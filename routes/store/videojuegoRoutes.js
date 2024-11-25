import express from 'express';
const router = express.Router();
import videojuegoController from "../../controllers/store/videojuegoController.js";

router.use(express.json());

router.get('/videojuegos', videojuegoController.getAllVideojuegos)

router.get('/videojuegos/random', videojuegoController.getRandomVideojuego)

router.get('/videojuegos/:id', videojuegoController.getOneVideojuego)

router.put('/videojuegos/:id', videojuegoController.putOneVideojuego)

router.delete('/videojuegos/:id', videojuegoController.deleteOneVideojuego)

router.post('/videojuegos', videojuegoController.createVideojuego)

// module.exports = router;
export default router;