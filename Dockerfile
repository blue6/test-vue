# syntax=docker/dockerfile:1

FROM node:16.13.0
# ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

# RUN yarn install --production
RUN yarn install

COPY . .

# RUN yarn test

# CMD [ "yarn", "serve" ]
CMD [ "yarn", "--version" ]
