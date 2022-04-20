FROM node:16-alpine as builder
WORKDIR /app
COPY ./package.json ./
COPY prisma ./prisma/

RUN ls -la

RUN yarn

COPY . .

RUN yarn build

FROM node:16-alpine
EXPOSE 3000
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

RUN ls -la

COPY --from=builder /app/package.json ./package.json

RUN ls -la

COPY --from=builder /app/dist ./dist

RUN ls -la

CMD ["yarn", "start:prod"]

