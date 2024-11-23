import express from 'express';
import generoController from "../../controllers/store/generoController.js";

const router = express.Router();

router.use(express.json());

router.get('/generos', generoController.getGeneros)

router.post('/generos', generoController.postGenero)

router.put('/generos/:id', generoController.putGenero)

router.delete('/generos/:id', generoController.deleteGenero)

export default router;