import express from 'express';
import MetodoPago from '../../controllers/cart/metodopagoController.js'

const router = express.Router();

router.get('/metodopago', MetodoPago.getMetodos);

router.post('/metodopago', MetodoPago.postMetodo);

router.put('/metodopago', MetodoPago.putMetodo);

router.put('/metodopago', MetodoPago.deleteMetodo);

export default router;