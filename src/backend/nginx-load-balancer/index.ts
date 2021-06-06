import fs from 'fs-extra';
import config from './create-config';
interface HostData {
    host: String,
    weight: String,
    type: String
}
class NginxLoadBalancer {

    data !: Array<HostData>
    upstreamName = 'yuk'
    port = 8080
    constructor(args: Array<HostData>) {
        this.data = args;
    }
    // Create config
    async createConfig() {
        return config(this.data, this.upstreamName, this.port)
    }
    // create config file
    async makeConfig(config: String, location?: String | '.') {
        await fs.outputFileSync(`${location}/config/nginx.conf`, config)
    }
}

export default NginxLoadBalancer;