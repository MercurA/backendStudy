import express from "express";

const router = express.Router();

router.get('/user', (req, res, next) => {
    res.send({
        name: "John",
        id: "1"
    })
})

export default router;