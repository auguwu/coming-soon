# 🐻‍❄️✨ @noel/coming-soon: A simple "coming soon" site for my projects, made with Astro and Tailwind
# Copyright (c) 2021-2023 Noel <cutie@floofy.dev>
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

FROM node:19-alpine AS builder

RUN apk update
WORKDIR /_build

ENV NODE_ENV=production

COPY package.json /_build/package.json
COPY .yarnrc.yml /_build/.yarnrc.yml
COPY yarn.lock /_build/yarn.lock
COPY .yarn /_build/.yarn

RUN yarn install --immutable
COPY . .

RUN yarn build

FROM node:19-alpine

RUN apk update && apk add --no-cache tini
WORKDIR /app/noel/coming-soon

COPY --from=builder /_work/node_modules /app/noel/coming-soon/node_modules
COPY --from=builder /_work/dist         /app/noel/coming-soon/dist

RUN addgroup -g 1001 noel && \
    adduser -DSH -u 1001 -G noel noel && \
    chown -R noelware:noelware /app/noel/coming-soon

USER noel
ENTRYPOINT ["tini", "-s"]
CMD ["node", "dist/server/entry.mjs"]
