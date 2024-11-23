import express from 'express';
import Rol from '../../controllers/user/rolController.js'

const router = express.Router();

router.get('/rol', Rol.getRoles);

export default router;