import { Router } from 'express'
import { getLots, addLot } from '../controllers/lots'
 
const router: Router = Router()

router.get('/lots', getLots)

router.post('/lots', addLot)

export default router