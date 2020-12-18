import express from 'express';
import users from './profile/users';

const router = express.Router();

router.use('/profile', users);

export default router;