import { NextFunction, Request, Response } from "express";

type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>;

export default (execution: AsyncHandler) => (req: Request, res: Response, next: NextFunction) => {
    execution(req, res, next).catch(next);
}
