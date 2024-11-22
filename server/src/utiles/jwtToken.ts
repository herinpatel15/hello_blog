import jwt from 'jsonwebtoken'

type UserData = {
    id: string,
    username: string
}

export function jwt_sign(userData: UserData) {
    if(!process.env.JWT_KEY) {
        throw new Error('JWT_KEY is not defined')
    }
    // jwt.sign(userData, process.env.JWT_KEY, {}, (err, token) => {
    //     if (err) throw err
    //     console.log(userData, process.env.JWT_KEY, token);
        
    //     return token
    // })
    try {
        const token = jwt.sign(userData, process.env.JWT_KEY)
        return token
    } catch (err) {
        console.error(err)
        throw new Error('jwt token ganaration error');
        
    }
}