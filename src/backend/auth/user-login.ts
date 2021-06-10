import findOne from '@/mongo/findOne';
import Mongo from '../mongo';

interface Params {
    email: string,
    password: string
}
const login = async (params: Params) => {
    try {
        const mongo = new Mongo();
        const db = await mongo.connectDb();
        const collection = db.collection('yuk_users');
        const userDetail = await findOne(collection, { email: params.email, password: params.password });
        mongo.closeConnection();
        if (userDetail === null) {
            return Promise.reject({ message: 'Invalid credentials' });
        } else {
            return Promise.resolve({
                name: userDetail.name,
                email: userDetail.email
            })
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

export {
    login
}