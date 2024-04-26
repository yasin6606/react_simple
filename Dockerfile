FROM node:14 AS builder

USER root

ENV REACT_APP_SERVER_ADDR="http://localhost:3000/api/v1"
ENV REACT_APP_SOCKET_ADDR="ws://localhost:5001"

WORKDIR /home

COPY . .

RUN npm run build

FROM nginx:latest

USER root

RUN rm -rf /etc/nginx/conf.d/*

COPY ./nginx.conf /etc/nginx/conf.d

COPY --from=builder /home/build /usr/share/nginx/html