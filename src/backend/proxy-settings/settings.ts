import Proxy from './proxy-configure';
import Token from '@/backend/helper/jwt';
import { DEFAULT_PRIVATE_KEY } from '@/constants/index'
interface HostData {
    host: String,
    weight: String,
    type: String
}
interface Input {
    hostData: Array<HostData>
}

const configure = async ({ hostData }: Input, location: String, token: string) => {
    try {
        new Token(DEFAULT_PRIVATE_KEY).verifyToken(token);
        const loadBalancer = new Proxy(hostData);
        const config = await loadBalancer.createConfig();
        await loadBalancer.makeConfig(config, location);
        return Promise.resolve({ status: true, message: 'Config file created' });
    } catch (error) {
        return Promise.reject(error);
    }
}

export { configure };