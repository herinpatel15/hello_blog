import { Request, Response } from "express";
import { routes } from "../router";
import { encrypt } from "../utiles/hashPass";
import { UserModel } from "../utiles/dbModel";

export const register = async (req: Request, res: Response) => {
    try {
        // get data
        const { username, email, password } = req.body

        // main logic here
        const checkEmail = await UserModel.findOne({username})

        if (!checkEmail) {
            const checkUsername = await UserModel.findOne({email})
            if (!checkUsername) {
                const hashPassword = encrypt(password)
                const user = await UserModel.create({
                    username,
                    email,
                    password: hashPassword
                })

                // success response
                console.log(user);
                res
                    .status(routes.login.succsessCode)
                    .json(user)
            } else {
                // error response
                res.status(routes.login.errorCode).json({ message: 'Username already exists', problem: 'email' })
            }
        } else {
            // error response
            res.status(routes.login.errorCode).json({ message: 'Username already exists', problem: 'username' })
        }
    } catch (err) {
        console.error(err);

        res
            .status(routes.register.errorCode)
            .json({ error: 'internal server error' })
    }
}

export const login = (req: Request, res: Response) => {
    try {
        // get data
        const { username, password } = req.body
        console.log({ username, password });

        // main logic here


        // response
        res
            .status(routes.login.succsessCode)
            .json({ username, password })
    } catch (err) {
        console.error(err);

        res
            .status(routes.login.errorCode)
            .json({ error: 'internal server error' })
    }
}