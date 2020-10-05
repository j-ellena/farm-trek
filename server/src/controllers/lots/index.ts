import { Request, Response } from 'express'
import db from '../../db'

const addLot = async (req: Request, res: Response) => {
    try {
        const { name } = req.body
        const newLot = await db.query('INSERT INTO lots (name) VALUES($1) RETURNING *', [name])
        res.json(newLot.rows[0])
    } catch (err) {
        console.error(err.message)
    }
}

const getLots = async (req: Request, res: Response) => {
    try {
        const allLots = await db.query('SELECT * FROM lots ORDER BY id DESC', [])
        res.json(allLots.rows)
    } catch (err) {
        console.error(err.message)
    }
}

export { addLot, getLots }