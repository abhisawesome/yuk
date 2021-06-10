interface HostData {
    host: String,
    weight: String,
    type: String
}
const createUpstream = (data:Array<HostData>,upstreamName:String)=>{
    let config = `upstream ${upstreamName} {`;
  data.forEach((serverElement:any) => {
    const { host, weight } = serverElement;
    if (host) {
      config += `server ${host} weight=${weight || 1};`;
    }
  });
  config += ' }';
  return config;
}

export default createUpstream;