import express from 'express'
import cors from 'cors'
import database from './db/db'
import { server } from './config'

const app = express()

app.use(cors())

const { port } = server

app.get('/', (req, res) => res.send('server'));

app.listen(port, () => console.log(`server is running at https://localhost:${port}`))