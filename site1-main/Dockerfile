FROM node:18-alpine

RUN apk add --no-cache openssl

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

RUN npm ci

COPY . .

RUN npx prisma generate

CMD \
    npx prisma migrate deploy; npm run dev;   

# # Install dependencies only when needed
# FROM base AS deps
# RUN apk add --no-cache libc6-compat
# WORKDIR /app

# # Install dependencies
# COPY package.json package-lock.json* ./
# RUN npm ci

# # Rebuild the source code only when needed
# FROM base AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# # Generate Prisma Client
# RUN npx prisma generate

# # Build Next.js
# RUN npm run build

# # Production image, copy all the files and run next
# FROM base AS runner
# WORKDIR /app

# ENV NODE_ENV production

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# # Copy necessary files
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/prisma ./prisma
# COPY --from=builder /app/node_modules/.prisma/client ./node_modules/.prisma/client

# # Set the correct permissions
# RUN mkdir .next
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static

# RUN chown -R nextjs:nodejs .

# USER nextjs

# EXPOSE 3000

# ENV PORT 3000
# ENV HOSTNAME "0.0.0.0"



# CMD \
#     npx prisma migrate deploy; npx tsx ./prisma/seed.ts; node server.js;
