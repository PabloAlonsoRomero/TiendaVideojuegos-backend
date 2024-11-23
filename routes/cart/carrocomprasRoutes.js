import express from 'express';
import CarroCompras from '../../controllers/cart/carrocomprasController.js'

const router = express.Router();

router.get('/carrocompras', CarroCompras.getCarroCompras);

router.post('/carrocompras', CarroCompras.postCarroCompras);

router.put('/carrocompras', CarroCompras.putCarroCompras);

router.put('/carrocompras', CarroCompras.deleteCarroCompras);

export default router;