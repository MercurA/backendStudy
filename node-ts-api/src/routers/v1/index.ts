import express from 'express';
import users from './profile/users';

const router = express.Router();

router.use('/healthCheck', (req, res) => {
    res.send({
        success: true,
        msg: ""
    })
})

router.use('/profile', users);
export default router;