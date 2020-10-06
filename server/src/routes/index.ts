import { Router } from 'express'
import { getLots, addLot, editLot } from '../controllers/lots'
 
const router: Router = Router()

router.get('/lots', getLots)

router.post('/lots', addLot)

router.put('/lots/:id', editLot)

export default router