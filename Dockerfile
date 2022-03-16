FROM node:12.18.1
ENV NODE_ENV=production
WORKDIR /app

COPY ./index.js ./
COPY ./dal.js ./
COPY ./package.json ./
COPY ./public ./public

EXPOSE 3000

RUN npm install --production

CMD [ "npm", "start" ]
