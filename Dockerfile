FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN mkdir config
RUN cat ./conf/default.conf > ./config/nginx.conf
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]