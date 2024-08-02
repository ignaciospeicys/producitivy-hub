FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g expo
RUN npm install -g @expo/ngrok

COPY . .

EXPOSE 19006

CMD ["npm", "start"]
