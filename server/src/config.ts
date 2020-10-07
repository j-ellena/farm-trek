import { user, password } from './secrets.json'

export const port: string | number = process.env.PORT || 8000

export const db = {
    user,
    password,
    host: "localhost",
    port: 5432,
    database: "farm_trek"
}