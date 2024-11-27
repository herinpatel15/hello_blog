import express, { Request, Response } from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import authRouter from './routes/authRouter'
import userRouter from './routes/userRouter'
import { dbConnection } from './utiles/dbConnection'
import coockieParser from 'cookie-parser'

config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.json())
app.use(coockieParser())

const dbConnectionData = dbConnection()

if (!dbConnectionData) {
    console.error('Error connecting to database')
} else {
    console.log('Database connected')
}

// All router
app.use('/api/v1', authRouter)
app.use('/api/v1', userRouter)

app.get('/', (req: Request, res: Response) => {
    res.json({msg: "hello herin"})
})

app.listen(port, () => console.log('server run on port : ' + port))