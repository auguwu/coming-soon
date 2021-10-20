FROM node:17-alpine

LABEL MAINTAINER="August <cutie@floofy.dev>"
RUN apk update && apk add git ca-certificates

WORKDIR /opt/coming-soon
COPY . .
RUN npm i -g typescript eslint next
RUN npm ci
RUN NEXT_TELEMETRY_DISABLED=1 NODE_ENV=production npm run build
RUN rm -rf src

ENTRYPOINT [ "next", "start" ]
