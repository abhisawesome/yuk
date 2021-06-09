const createServer =  (port:Number, upstreamName:String) => `server { 
    listen ${port};
    location / {
        proxy_pass http://${upstreamName}/;
    }
}`;

export default createServer;