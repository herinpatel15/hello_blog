import express from 'express'
import { config } from 'dotenv'
import authRouter from './routes/authRouter'

config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// all router
app.use('/api/v1', authRouter)

app.listen(port, () => console.log('server run on port : ' + port))