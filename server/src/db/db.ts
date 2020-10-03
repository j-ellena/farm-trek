import { Pool } from 'pg'
import { user, password } from '../secrets.json'

const pool = new Pool({
    user,
    password,
    host: "localhost",
    port: 5432,
    database: "farm_trek"
})

export default pool