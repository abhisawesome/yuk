import { Request, Response } from "express"
import { configure } from '@/backend/proxy-settings'
import { CONFIGURE_PATH } from '@/constants/index'
export default async (req: Request, res: Response) => {
    const { hostData, token } = req.body
    try {
        if (req.method !== 'POST') {
            throw new Error('Invalid type');
        }
        const response = await configure({ hostData: hostData }, CONFIGURE_PATH, token);
        return res
            .status(200)
            .send({ status: true });
    } catch (error) {
        return res.status(500).send({ status: false })
    }
}