import express from 'express';
const router = express.Router();
import videojuegoController from "../../controllers/store/videojuegoController.js";

router.use(express.json());

router.get('/videojuegos', videojuegoController.getAllVideojuegos)

router.get('/videojuegos/random', videojuegoController.getRandomVideojuego)

router.post('/videojuegos/getOneVideojuego', videojuegoController.getOneVideojuego)

router.put('/videojuegos/:id', videojuegoController.putOneVideojuego)

router.delete('/videojuegos/:id', videojuegoController.deleteOneVideojuego)

router.post('/videojuegos/crear', videojuegoController.createVideojuego)

// module.exports = router;
export default router;