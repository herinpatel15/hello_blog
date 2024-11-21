import { Request, Response, Router } from "express";
import { routes } from "../router";

const router = Router()

router.get(routes.login.path, (req: Request, res: Response) => {
    try {
        res
        .status(routes.login.succsessCode)
        .json({massage: "ohk herin"})
    } catch (err) {
        console.error(err);
        res
        .status(routes.login.errorCodes)
        .json({error: 'internal server error'})
    }
})

export default router