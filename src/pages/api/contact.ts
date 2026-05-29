import type { APIRoute } from "astro";

export const prerender = false;

const TO = "emy@emy-com.fr";
// Le domaine du FROM doit être dans les allowedDomains du token mail.mlanglois.fr
// ET vérifié dans SES (DKIM). Surchargeable via la variable d'env CONTACT_FROM.
const FROM = process.env.CONTACT_FROM || "Emy Communication <contact@emy-com.fr>";

export const POST: APIRoute = async ({ request }) => {
  let payload: Record<string, FormDataEntryValue | string> = {};

  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    payload = await request.json();
  } else {
    const fd = await request.formData();
    fd.forEach((v, k) => (payload[k] = v));
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const company = String(payload.company || "").trim();
  const message = String(payload.message || "").trim();
  const captcha = Number(payload.captcha);
  const captchaExpected = Number(payload.captcha_expected);
  const honeypot = String(payload.website || "");

  if (honeypot) {
    // Honeypot rempli : on simule un succès pour ne pas indiquer au bot qu'il a été détecté
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ ok: false, error: "missing_fields" }),
      { status: 400, headers: { "content-type": "application/json" } }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(
      JSON.stringify({ ok: false, error: "invalid_email" }),
      { status: 400, headers: { "content-type": "application/json" } }
    );
  }

  if (
    Number.isNaN(captcha) ||
    Number.isNaN(captchaExpected) ||
    captcha !== captchaExpected
  ) {
    return new Response(
      JSON.stringify({ ok: false, error: "invalid_captcha" }),
      { status: 400, headers: { "content-type": "application/json" } }
    );
  }

  // === Envoi du message via l'API mail.mlanglois.fr (Amazon SES) ===
  const mailUrl = process.env.MAIL_MLGS_URL;
  const mailToken = process.env.MAIL_MLGS_TOKEN;
  if (!mailUrl || !mailToken) {
    console.error("[contact-form] MAIL_MLGS_URL ou MAIL_MLGS_TOKEN manquant dans les variables d'environnement");
    return new Response(
      JSON.stringify({ ok: false, error: "config_missing" }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }

  const subject = `Nouveau message via emy-com.fr — ${name}${company ? " (" + company + ")" : ""}`;
  const text = [
    `Nouveau message reçu via le formulaire de contact emy-com.fr`,
    ``,
    `De : ${name}`,
    `Email : ${email}`,
    company ? `Entreprise : ${company}` : null,
    ``,
    `Message :`,
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #313131;">
      <h2 style="color: #00a9b8; font-family: Montserrat, sans-serif; text-transform: uppercase; letter-spacing: 0.04em; font-size: 20px; margin: 0 0 24px;">
        Nouveau message — emy-com.fr
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr><td style="padding: 8px 0; color: #666; width: 110px;">De :</td><td style="padding: 8px 0;"><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Email :</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #00a9b8;">${escapeHtml(email)}</a></td></tr>
        ${company ? `<tr><td style="padding: 8px 0; color: #666;">Entreprise :</td><td style="padding: 8px 0;">${escapeHtml(company)}</td></tr>` : ""}
      </table>
      <div style="background: #f3f3f3; padding: 16px 20px; border-left: 3px solid #00a9b8; border-radius: 4px;">
        <p style="margin: 0 0 8px; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.06em;">Message</p>
        <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
      </div>
      <p style="margin-top: 24px; font-size: 13px; color: #999;">
        Pour répondre, écris à <a href="mailto:${escapeHtml(email)}" style="color: #00a9b8;"><strong>${escapeHtml(email)}</strong></a>.
      </p>
    </div>
  `;

  try {
    const res = await fetch(`${mailUrl}/api/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${mailToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        subject,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      console.error(`[contact-form] mail.mlanglois.fr error (${res.status}):`, errBody);
      return new Response(
        JSON.stringify({ ok: false, error: "send_failed" }),
        { status: 502, headers: { "content-type": "application/json" } }
      );
    }
  } catch (err) {
    console.error("[contact-form] Exception:", err);
    return new Response(
      JSON.stringify({ ok: false, error: "send_exception" }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
