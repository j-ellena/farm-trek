import { Request, Response } from 'express'
import db from '../../db'

const getLots = async (req: Request, res: Response) => {
    try {
        const { rows } = await db.query('SELECT * FROM lots ORDER BY id DESC', [])
        res.status(200).json(rows)
    } catch (err) {
        console.error(err.message)
    }
}

const getLot = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { rows } = await db.query('SELECT * FROM lots WHERE id = $1', [id])
        res.status(200).json(rows[0])
    } catch (err) {
        console.error(err.message)
    }
}

const addLot = async (req: Request, res: Response) => {
    try {
        const { name } = req.body
        const { rows } = await db.query('INSERT INTO lots (name) VALUES($1) RETURNING *', [name])
        res.status(201).json(rows[0])
    } catch (err) {
        console.error(err.message)
    }
}

const editLot = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { name } = req.body
        const { rows } = await db.query('UPDATE lots SET name = $1 WHERE id = $2', [name, id])
        res.status(200).json({ id: parseInt(id), name })
    } catch (err) {
        console.error(err.message)
    }
}

const deleteLot = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        await db.query('DELETE FROM lots WHERE id = $1', [id])
        res.status(204)
    } catch (err) {
        console.error(err.message)
    }
}

export { getLots, getLot, addLot, editLot, deleteLot }