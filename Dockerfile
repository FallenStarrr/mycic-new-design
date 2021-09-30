# Tested in node 14.7.6

FROM node:16-alpine as mycic-front-vendor
WORKDIR /app

COPY package-lock.json ./
COPY package.json ./

RUN npm i

FROM node:16-alpine as mycic-front-build
WORKDIR /app

COPY package-lock.json ./
COPY package.json ./
COPY tsconfig.json ./
COPY ./src /app/src
COPY ./public /app/public

COPY --from=mycic-front-vendor /app/node_modules /app/node_modules

RUN npm run build

FROM node:16-alpine as mycic-front-app
WORKDIR /app

COPY --from=mycic-front-build /app/build /app

EXPOSE 5000

CMD npx serve /app

