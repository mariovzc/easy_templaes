# syntax=docker/dockerfile:1

FROM node:alpine3.16

WORKDIR /app


RUN apk add --no-cache python3 g++ make
RUN apk add git


COPY . .

CMD [ "nodemon", "index.js" ]
