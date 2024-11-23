import express from 'express';
import Plataforma from '../../controllers/store/plataformaController.js'

const router = express.Router();

router.get('/plataforma', Plataforma.getPlataformas);

router.post('/plataforma', Plataforma.createPlataforma);

router.put('/plataforma/:id', Plataforma.updatePlataforma);

router.delete('/plataforma/:id', Plataforma.deletePlataforma);

export default router;