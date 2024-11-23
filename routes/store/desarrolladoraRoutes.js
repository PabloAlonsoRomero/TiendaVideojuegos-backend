import express from 'express';
import Desarrolladora from '../../controllers/store/desarrolladoraController.js'

const router = express.Router();

router.get('/desarrolladora', Desarrolladora.getDesarrolladoras);

router.post('/desarrolladora', Desarrolladora.createDesarrolladora);

router.put('/desarrolladora/:id', Desarrolladora.updateDesarrolladora);

router.delete('/desarrolladora/:id', Desarrolladora.deleteDesarrolladora);

export default router;