import jwt from 'jsonwebtoken';

class Token {
    privateKey: string
    constructor(privateKey: string) {
        this.privateKey = privateKey;
    }
    // generate token
    generateToken(data: any) {
        const token = jwt.sign(data, this.privateKey);
        return token;
    }
    // verify token
    verifyToken(token: string) {
        try {
            const data = jwt.verify(token, this.privateKey);
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
    // generate token with expiry time
    generateTokenWithExpiry(data: any, expireTime: number) {
        const token = jwt.sign(data, this.privateKey, { expiresIn: expireTime });
        return token;
    }
}

export default Token;