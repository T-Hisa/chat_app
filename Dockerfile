# FROM node:alpine3.12
# FROM node:15.5-alpine3.12
FROM node:14.15.0-alpine
COPY ./ /chat_app
WORKDIR chat_app
RUN npm install -g @vue/cli && \
    apk update && \
    npm install
# RUN npm install -g @vue/cli
CMD npm run start