# yuk

Yuk is a open source tool to create reverse proxy servers and also to configure load balancing.
<p><a href="https://hub.docker.com/r/abhijithababhijith/yuk">Docker hub</a></p>
### Why yuk ?

To configure proxy with less effort.

### Advantage of reverse proxy

- Controlling traffic (load balancing).
- SSL termination.
- Security and anonymity.

## <i>Table of contents</i>

- [Features](#features)
- [Production Setup](#production-setup)
- [Development Setup ](#development-setup)
- [Upcoming Features](#upcoming-features)

### Features
 ONLY ON : [HTTP]
1. Proxy
2. Load balancing

### Production Setup
#### Prerequisite

- Docker pre installed in the system
#### script
```
   docker run -d \
      -p 8080:8080 \
      -p 3001:3000 \
      -e DEFAULT_USER=admin \
      -e DEFAULT_PASSWORD=password \
      abhijithababhijith/yuk 
   ```
Run the above command, to run the docker container. Port 3001 is for the dashboard and the request to proxy server is mapped
to the port 8080.
### Development Setup
#### Prerequisite

- node, docker,docker-compose

#### script
1. Run ```npm i ``` on root folder
2. Run ```npm run dev``` , localhost:3000 serves the dashboard.
3. Run on docker ```docker-compose up -d```



### Upcoming Features

- HTTPS module
- UPD and TCP
- Access logs and error log
- Health checks
- Backup server