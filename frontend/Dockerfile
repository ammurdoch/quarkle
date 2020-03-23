FROM node:lts-slim as stage1

RUN mkdir /code
WORKDIR /code

COPY package.json yarn.lock /code/
RUN cd /code && yarn install

COPY . /code
RUN yarn relay
RUN yarn build

FROM node:lts-slim

COPY --from=stage1 /code /code
WORKDIR /code

RUN npm install pm2 -g
