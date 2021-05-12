FROM node:16.1-alpine3.13

RUN apk update && apk add bash

WORKDIR /app

COPY ./package*.json ./

RUN npm install --quiet

COPY . .

RUN npm run build