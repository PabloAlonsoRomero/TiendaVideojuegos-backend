import express from 'express';
import Resena from '../../controllers/reviews/resenaController.js'

const router = express.Router();

router.get('/resena/:id', Resena.getResenas);

router.get('/resena/usuario/:id', Resena.getResenasUsuario)

router.post('/resena', Resena.createResena)

router.put('/resena/:id', Resena.updateResena)

router.delete('/resena/:id', Resena.deleteResena)

export default router;