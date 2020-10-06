import { Request, Response } from 'express'
import db from '../../db'

const getLots = async (req: Request, res: Response) => {
    try {
        const allLots = await db.query('SELECT * FROM lots ORDER BY id DESC', [])
        res.json(allLots.rows)
    } catch (err) {
        console.error(err.message)
    }
}

const getLot = async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        const getLot = await db.query('SELECT * FROM lots WHERE id = $1', [id])
        res.json(getLot.rows[0])
    } catch (err) {
        console.error(err.message)
    }
}

const addLot = async (req: Request, res: Response) => {
    try {
        const { name } = req.body
        const newLot = await db.query('INSERT INTO lots (name) VALUES($1) RETURNING *', [name])
        res.json(newLot.rows[0])
    } catch (err) {
        console.error(err.message)
    }
}

const editLot = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { name } = req.body
        const editLot = await db.query('UPDATE lots SET name = $1 WHERE id = $2', [name, id])
        res.json(editLot.rows[0])
    } catch (err) {
        console.error(err.message)
    }
}

const deleteLot = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const deleteLot = await db.query('DELETE FROM lots WHERE id = $1', [id])
        res.json({
            status: 'success'
        })
    } catch (err) {
        console.error(err.message)
    }
}

export { getLots, getLot, addLot, editLot, deleteLot }