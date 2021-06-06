import createUpstream from './create-upstream';
import createServer from './create-server';
import createHttp from './create-http';
import createEvent from './create-event';

interface HostData {
    host: String,
    weight: String,
    type: String
}

const createConfig = (data: Array<HostData>, upstreamName: String, port: Number) => {
    const upstream = createUpstream(data, upstreamName);
    const server = createServer(port, upstreamName);
    const http = createHttp(upstream, server);
    const events = createEvent();
    return Promise.resolve(`${events}\n ${http}`);
}

export default createConfig;