import { Pool } from 'pg'
import { db } from '../config'

const pool = new Pool(db)

export default {
    query: (text: string, params: Array<any>) => pool.query(text, params),
}