import express, { Express } from 'express'
import cors from 'cors'
import routes from './routes'

import { server } from './config'

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(routes)

const { port } = server

app.get('*', (req, res) => res.send('server'))

app.listen(port, () => console.log(`server is running at https://localhost:${port}`))