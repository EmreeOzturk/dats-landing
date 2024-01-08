# Node.js 18.19
FROM node:18.19

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

COPY .env .env
RUN chmod 400 .env

CMD ["npm", "start"]
