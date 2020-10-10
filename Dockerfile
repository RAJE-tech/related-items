FROM node:13.12.0-alpine

RUN mkdir -p /src/related_items

WORKDIR /src/related_items

COPY . /src/related_items

RUN npm install

EXPOSE 3002

CMD [ "npm", "start" ]