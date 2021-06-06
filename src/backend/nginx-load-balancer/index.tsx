import config from './create-config';

interface HostData {
    host: String,
    weight: String,
    type: String
}
class NginxLoadBalancer {
    data !: Array<HostData>
    upstreamName = 'yuk'
    port =8080
    constructor(args:Array<HostData>){
        this.data = args;
    }

    async createConfig(){
        return config(this.data,this.upstreamName,this.port)
    }
}

export default NginxLoadBalancer;