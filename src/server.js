import express from 'express'
import { Router } from 'express'

const app = express()
const router = Router()

app.listen(3333, () => {
    console.log('🚀 Server is running on http://localhost:3333!')
})

