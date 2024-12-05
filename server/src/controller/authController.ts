import { Request, Response } from "express";
import { routes } from "../router";
import { decrypt, encrypt } from "../utiles/hashPass";
import { UserModel } from "../utiles/dbModel";
import { jwt_sign } from "../utiles/jwtToken";

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
                const token = jwt_sign({username: user.username!, id: user._id.toString()})
                // success response
                res
                    .cookie('token', token)
                    .json('ok')
            } else {
                // error response
                res.status(500).json({ message: 'Username already exists', problem: 'email' })
            }
        } else {
            // error response
            res.status(500).json({ message: 'Username already exists', problem: 'username' })
        }
    } catch (err) {
        console.error(err);

        res
            .status(500)
            .json({ error: 'internal server error' })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        // get data
        const { username, password } = req.body
        // console.log({ username, password });

        // main logic here
        const checkUsername = await UserModel.findOne({username})
        if(!checkUsername) {
            // error response
            res
                .status(500)
                .json({ message: 'Username does not exist', problem: 'username'})
        } else {
            const unhashPassword = decrypt(checkUsername.password!)
            if(unhashPassword !== password) {
                // error response
                res
                    .status(500)
                    .json({ message: 'Invalid password', problem: 'password' })
            } else {
                const token = jwt_sign({username: checkUsername.username!, id: checkUsername._id.toString()})
                
                // success response
                res
                    .cookie('token', token)
                    .json('ok')
            }

        }
    } catch (err) {
        console.error(err);

        res
            .status(500)
            .json({ error: 'internal server error' })
    }
}

export const logout = async (req: Request, res: Response) => {
    try {
        const {token} = req.cookies
        if(token) {
            res
            .clearCookie('token')
            .json('ok')
        }
    } catch (err) {
        console.error(err)
        res
         .status(500)
         .json({error: 'internalserver error'})
    }
}