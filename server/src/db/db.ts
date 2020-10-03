import { Pool } from 'pg'
import { db } from '../config'

const database = new Pool(db)

export default database