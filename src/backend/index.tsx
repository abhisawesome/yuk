import NginxLoad from './nginx-load-balancer/index';

interface HostData {
    host: String,
    weight: String,
    type: String
}
interface Input {
    hostData: Array<HostData>
}

const configure = async({ hostData }: Input) => {
    try {
        const loadBalancer = new NginxLoad(hostData);
        await loadBalancer.createConfig();
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}

export { configure }