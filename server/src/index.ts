import express from 'express'
import pool from './db/db'

const app = express()
const PORT = 8000

app.get('/', (req, res) => res.send('server'));

app.listen(PORT, () => console.log(`server is running at https://localhost:${PORT}`))