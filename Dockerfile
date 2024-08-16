FROM node:18-alpine AS base

FROM base AS builder
WORKDIR /app
COPY package.json package-lock.json* ./

RUN npm ci
COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY postcss.config.mjs .
COPY tailwind.config.ts .
COPY tsconfig.json .
COPY .env.production .

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN mkdir .next
RUN chown nextjs:nodejs .next

USER nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
CMD HOSTNAME="0.0.0.0" node server.js