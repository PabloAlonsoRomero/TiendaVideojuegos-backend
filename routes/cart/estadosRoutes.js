import express from 'express';
import Estados from '../../controllers/cart/estadosController.js'

const router = express.Router();

router.get('/estados/:id', Estados.getOneEstado);

export default router;