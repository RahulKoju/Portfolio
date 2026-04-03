 1. Builder stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG RESEND_API_KEY
ENV RESEND_API_KEY=$RESEND_API_KEY

RUN npm run build

# 2. production stage
FROM node:18-alpine

WORKDIR /app

# RUN apk add --no-cache curl

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]

HEALTHCHECK CMD node -e "require('http').get('http://localhost:3000', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
# 	CMD curl -f http://localhost:3000 || exit 1