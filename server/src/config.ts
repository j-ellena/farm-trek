import { user, password } from './secrets.json'

export const server = {
    port: 8000
}

export const db = {
    user,
    password,
    host: "localhost",
    port: 5432,
    database: "farm_trek"
}