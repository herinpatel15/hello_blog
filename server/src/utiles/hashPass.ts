import Cryptr from "cryptr";
import { config } from "dotenv";

config()

if (!process.env.CRYPTR_KEY) {
    throw new Error('CRYPTR_KEY is not set. Please define it in the environment variables.');
}

const cryptr = new Cryptr(process.env.CRYPTR_KEY!, { 
    encoding: 'base64', 
    pbkdf2Iterations: 10000, 
    saltLength: 10 
});

export const encrypt = (data: string) => cryptr.encrypt(data)
export const decrypt = (data: string) => cryptr.decrypt(data)