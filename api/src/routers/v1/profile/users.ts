import express, { Request, Response, NextFunction } from "express";
import asyncHandler from "../../../helpers/asyncHandler";

const router = express.Router();

router.get('/user',
    asyncHandler(async (req: Request, res: Response) => {
    res.send({
        success: true,
        data: {
            name: 'John'
        }
    })     
}))

export default router;