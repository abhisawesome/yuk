import { Request, Response } from "express"
import { configure } from '@/backend/proxy-settings'

export default async (req: Request, res: Response) => {
    const { hostData } = req.body
    const response = await configure({ hostData: hostData },
        process.env.NODE_ENV === 'production'
            ? '/etc/nginx/'
            : './nginx/'
    );
    return res
        .status(200)
        .send({ status: true });
}