import express from 'express';
import Pedidos from '../../controllers/cart/pedidosController.js'

const router = express.Router();

router.get('/pedidos', Pedidos.getPedidos);

router.post('/pedidos', Pedidos.postPedido);

export default router;