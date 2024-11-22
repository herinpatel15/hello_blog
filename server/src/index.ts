import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import authRouter from './routes/authRouter'
import { dbConnection } from './utiles/dbConnection'

config()

const app = express()
const port = process.env.PORT || 3000

const dbConnectionData = dbConnection()

if (!dbConnectionData) {
    console.error('Error connecting to database')
} else {
    console.log('Database connected')
}

app.use(cors())
app.use(express.json())

// All router
app.use('/api/v1', authRouter)

app.listen(port, () => console.log('server run on port : ' + port))