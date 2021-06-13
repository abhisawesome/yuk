import { Request, Response } from "express"
import { configure } from '@/backend/proxy-settings'
import { CONFIGURE_PATH } from '@/constants/index'
export default async (req: Request, res: Response) => {
    const { hostData } = req.body
    const response = await configure({ hostData: hostData }, CONFIGURE_PATH);
    return res
        .status(200)
        .send({ status: true });
}