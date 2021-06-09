FROM node:latest
# Install nginx
RUN apt update
RUN apt install nginx -y
RUN service nginx start
# Frontend
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN mkdir config
RUN cat ./conf/default.conf > ./config/nginx.conf
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]
