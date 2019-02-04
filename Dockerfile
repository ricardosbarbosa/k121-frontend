FROM node:10-alpine

WORKDIR /usr/app/frontend
COPY . .

RUN yarn

EXPOSE 3000
CMD [ "yarn", "start"]