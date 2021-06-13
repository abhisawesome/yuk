import Token from '@/backend/helper/jwt';

interface Params {
    email: string,
    password: string
}

const login = async (params: Params) => {
    try {
        const defaultUser = process.env.DEFAULT_USER;
        const defaultPassword = process.env.DEFAULT_PASSWORD;
        let token;
        if (defaultUser === params.email && defaultPassword === params.password) {
            token = new Token(process.env.PRIVATE_KEY || 'default@privateKey')
                .generateTokenWithExpiry({ email: params.email },50000)
            return Promise.resolve({ token })
        }else{
            return Promise.reject('Invalid user')
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

export {
    login
}