FROM node:9.10.0-alpine

WORKDIR /app
RUN apk update

COPY ./ .
RUN npm rebuild node-sass

