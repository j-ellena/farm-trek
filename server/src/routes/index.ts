import { Router } from 'express'
import { getLots, getLot, addLot, editLot, deleteLot } from '../controllers/lots'
 
const router: Router = Router()

router.get('/lots', getLots)

router.get('/lots/:id', getLot)

router.post('/lots', addLot)

router.put('/lots/:id', editLot)

router.delete('/lots/:id', deleteLot)

export default router