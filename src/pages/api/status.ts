import { Response, Request } from "express"
import { checkStatus } from '@/backend/proxy-settings'

export default async (req: Request, res: Response) => {
    try {
        if (req.method !== 'POST') {
            throw new Error('Invalid type');
        }
        const { token } = req.body;
        const response = await checkStatus(token);
        return res
            .status(200)
            .send(response)
    } catch (error) {
        return res
            .status(500)
            .send({ status: false, message: error.message || "Something went wrong !!" })
    }
}