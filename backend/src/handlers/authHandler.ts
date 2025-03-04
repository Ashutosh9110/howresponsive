import {Response, Request } from 'express'


export const signin = async (req:Request, res:Response) => {
    res.status(200).json({"message":"signin"})
}

export const login = async (req:Request, res:Response) => { 
    res.status(200).json({"message":"login"})
}