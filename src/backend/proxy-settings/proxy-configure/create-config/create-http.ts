const createHttp =  (upstream: String, server: String) => `http {
    ${upstream}
    ${server}
}`;

export default createHttp;