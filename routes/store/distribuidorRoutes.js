import express from 'express';
import Distribuidor from '../../controllers/store/distribuidorController.js'

const router = express.Router();

router.get('/distribuidor', Distribuidor.getDistribuidores);

router.post('/distribuidor', Distribuidor.createDistribuidor);

router.put('/distribuidor/:id', Distribuidor.updateDistribuidor);

router.delete('/distribuidor/:id', Distribuidor.deleteDistribuidor);

export default router;