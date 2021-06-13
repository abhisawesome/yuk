# yuk

Yuk is a open source tool to create reverse proxy servers and also to configure load balancing.
<p><a href="https://hub.docker.com/r/abhijithababhijith/yuk">Docker hub</a></p>
### Why yuk ?

To configure proxy with less effort.

### Advantage of reverse proxy

- Controlling traffic (load balancing).
- SSL termination.
- Security and anonymity.

## To Run

### Prerequisite

1. Docker and docker-compose pre installed in the system

## <i>Table of contents</i>

- [Features](#features)
- [Run in production](#demo)

### Features

1. Proxy
2. Load balancing

### Production setup


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

