FROM reg.cic.kz/centras/node:14 as mycic-front-vendor
WORKDIR /app

COPY package-lock.json ./
COPY package.json ./

RUN npm i

FROM reg.cic.kz/centras/node:14 as mycic-front-build
WORKDIR /app

COPY package-lock.json ./
COPY package.json ./
COPY ./src ./
COPY ./public ./

COPY --from=mycic-front-vendor /app/node_modules /app/node_modules

RUN npm run build

FROM reg.cic.kz/centras/node:14 as mycic-front-app
WORKDIR /app

COPY --from=mycic-front-build /app/build /app

EXPOSE 5000

CMD npx serve /app

