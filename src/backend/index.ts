import NginxLoad from './nginx-load-balancer/index';

interface HostData {
    host: String,
    weight: String,
    type: String
}
interface Input {
    hostData: Array<HostData>
}

const configure = async ({ hostData }: Input, location: String) => {
    try {
        const loadBalancer = new NginxLoad(hostData);
        const config = await loadBalancer.createConfig();
        await loadBalancer.makeConfig(config, location);
        return Promise.resolve({ status: true, message: 'Config file created' })
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}


export { configure }