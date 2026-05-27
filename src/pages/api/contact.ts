import type { APIRoute } from "astro";

export const prerender = false;

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

  // === Envoi du message ===
  // Brancher ici Resend / Sendgrid / SMTP / Formspree selon la solution retenue.
  // Exemple Resend (à activer avec RESEND_API_KEY + npm i resend) :
  //
  // import { Resend } from "resend";
  // const resend = new Resend(import.meta.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Site emy-com <site@emy-com.fr>",
  //   to: "emy@emy-com.fr",
  //   reply_to: email,
  //   subject: `Nouveau message — ${name}${company ? " (" + company + ")" : ""}`,
  //   text: `De : ${name}\nEmail : ${email}\nEntreprise : ${company}\n\n${message}`,
  // });

  console.log("[contact-form]", { name, email, company, message });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};
