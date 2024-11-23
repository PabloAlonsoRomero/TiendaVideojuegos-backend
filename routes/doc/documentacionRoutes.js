import express from 'express';
import documentacionController from "../../controllers/doc/documentacionController.js";

const router = express.Router();

router.use(express.json());

router.get('/doc', documentacionController.getDocumentacion)

export default router;