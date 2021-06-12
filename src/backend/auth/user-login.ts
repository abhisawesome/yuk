import findOne from '@/mongo/findOne';
import Mongo from '../mongo';
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
        }
        const mongo = new Mongo();
        const db = await mongo.connectDb();
        const collection = db.collection('yuk_users');
        const userDetail = await findOne(collection, { email: params.email, password: params.password });
        mongo.closeConnection();
        if (userDetail === null) {
            return Promise.reject({ message: 'Invalid credentials' });
        } else {
            token = new Token(process.env.PRIVATE_KEY || 'default@privateKey')
                .generateToken({
                    name: userDetail.name,
                    email: userDetail.email
                })
            return Promise.resolve({
                token
            })
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

export {
    login
}