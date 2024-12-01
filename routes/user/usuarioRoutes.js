import express from 'express';
const router = express.Router();
import usuarioController from "../../controllers/user/usuarioController.js";

router.post('/usuario/login', usuarioController.inicioSesion)

router.post('/usuario/registro', usuarioController.crearUsuario)

router.post('/usuario/biblioteca', usuarioController.getBibliotecaUsuario)

router.post('/usuario/admin', usuarioController.verificarAdmin)

// module.exports = router;

export default router;