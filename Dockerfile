# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:22-slim AS build
WORKDIR /app

# Install dependencies (cached as long as lockfile is unchanged)
COPY package.json package-lock.json ./
RUN npm ci

# Build the site (optimise images + astro build)
COPY . .
RUN npm run build

# ---- Runtime stage ----
FROM node:22-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
# Astro node (standalone) reads HOST and PORT
ENV HOST=0.0.0.0
ENV PORT=4321

# Bring the built server + its node_modules over from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
