FROM node:16 AS packages

ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock

WORKDIR /app

# Installing packages
RUN yarn

# Staging Image
FROM packages

ADD . /app

ENV NODE_ENV=production

# Building TypeScript files
RUN yarn build

EXPOSE 8080

CMD node dist/main
