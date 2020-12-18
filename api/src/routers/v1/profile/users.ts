import express, {Request, Response, NextFunction} from "express";

const router = express.Router();

router.get('/user', (req: Request, res: Response, next: NextFunction): void => {
    res.send({
        name: "John",
        id: "1"
    })
})

export default router;