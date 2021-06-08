import { Response, Request } from "express"
import { checkStatus } from '../../backend'

export default async (req: Request, res: Response) => {
    try {
        const response = await checkStatus();
        return res
            .status(200)
            .send(response)
    } catch (error) {
        return res
            .status(500)
            .send({ status: false, message: error.message || "Something went wrong !!" })
    }
}