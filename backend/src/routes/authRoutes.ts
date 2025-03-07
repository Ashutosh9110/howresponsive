import { Router } from 'express'
import {  login, signin } from '../handlers/authHandler'
import { userLoginSchema, userRegistrationSchema } from '../zodSchemas/userSchema';
import { ZodError } from 'zod';
import { Request, Response, NextFunction } from 'express';
const router = Router()


const validateRegistration = (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body)
        userRegistrationSchema.parse(req.body);
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({ error: error });
        }
    }
};

// Middleware to validate login
const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    try {
        userLoginSchema.parse(req.body);
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({ error: error});
        }
    }
};



router.post('/signin',validateRegistration,signin)
router.post('/login',validateLogin,login)


export default router;
