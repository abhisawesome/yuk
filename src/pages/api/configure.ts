import { Request, Response } from "express"
import { configure } from '../../backend'

export default async (req: Request, res: Response) => {
    const { hostData } = req.body
    const response = await configure({ hostData: hostData }, '.');
    return res
        .status(200)
        .send({ status: true });
}