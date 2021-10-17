FROM node:latest
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json .
RUN npm install
RUN npm install nodemon -g
COPY . .
EXPOSE 3001
CMD ["npm", "run","start"]

