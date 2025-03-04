import { Router } from 'express'
import { login, signin } from '../handlers/authHandler'

const router = Router()


router.post('/signin',signin)
router.post('/login',login)

export default router;
