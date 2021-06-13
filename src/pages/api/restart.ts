import { Request, Response } from "express"
import { restartLoad } from '@/backend/proxy-settings';

export default async (req: Request, res: Response) => {
    const response = await restartLoad();
    return res
        .status(200)
        .send(response);
}