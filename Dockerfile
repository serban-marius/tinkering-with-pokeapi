FROM node:12.19.0-alpine3.9

RUN apk update && apk add bash

WORKDIR /app

COPY ./package*.json ./

RUN npm install --quiet

COPY . .

RUN npm run build