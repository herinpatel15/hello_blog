import { Request, Response } from "express";
import { jwt_verify } from "../utiles/jwtToken";

export const profileData = (req: Request, res: Response) => {
    try {
        const {token} = req.cookies
        const profileInfo = jwt_verify(token)
        console.log(profileInfo);
        res
            .status(200)
            .json(profileInfo)
    } catch (err) {
        console.log(err);
        res
            .status(500)
            .json({error: 'internal server error'})
    }
}