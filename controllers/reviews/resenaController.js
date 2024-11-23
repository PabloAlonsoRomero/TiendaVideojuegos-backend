import Resena from "../../models/reviews/resena.js";

const getResenas = async (req, res) => {
    try {
        const {videojuegoId} = req.params;
        const resenas = await Resena.find({videojuego: videojuegoId}).populate('usuario', 'nombre')
        if (!resenas) {
            res.status(404).json({message: "No se encontraron reseñas para este videojuego"})
        }
        res.status(200).json(resenas)
    } catch (err) {
        res.status(500).json({message: "Error al obtener las reseñas", error: err.message})
    }
}

const getResenasUsuario = async (req, res) => {
    try {
        const {usuarioId} = req.params;
        const resenas = await Resena.find({usuario: usuarioId})
        if (!resenas) {
            res.status(404).json({message: "No se encontraron reseñas para este usuario"})
        }
        res.status(200).json(resenas)
    } catch (err) {
        res.status(500).json({message: "Error al obtener las reseñas", error: err.message})
    }
}

const createResena = async (req, res) => {
    try {
        const {usuarioId, videojuegoId, calificacion, comentario} = req.body;
        const Resena = new Resena({
            usuario: usuarioId,
            videojuego: videojuegoId,
            calificacion,
            comentario,
            fecha_creacion: new Date()
        })
        await Resena.save()
        res.status(201).json({message: "Reseña creada con éxito", resena: Resena})
    } catch (err) {
        res.status(500).json({message: "Error al crear la reseña", error: err.message})
    }
}

const updateResena = async (req, res) => {
    try {
        const {resenaId} = req.params;
        const {calificacion, comentario} = req.body;
        const Resena = await Resena.findById(resenaId)
        if (!Resena) {
            res.status(404).json({message: "Reseña no encontrada"})
        }
        Resena.calificacion = calificacion;
        Resena.comentario = comentario;
        await Resena.save()
        res.status(200).json({message: "Reseña actualizada con éxito", resena: Resena})
    } catch (err) {
        res.status(500).json({message: "Error al actualizar la reseña", error: err.message})
    }
}

const deleteResena = async (req, res) => {
    try {
        const {resenaId} = req.params;
        const Resena = await Resena.findById(resenaId)
        if (!Resena) {
            res.status(404).json({message: "Reseña no encontrada"})
        }
        await Resena.remove()
        res.status(200).json({message: "Reseña eliminada con éxito"})
    } catch (err) {
        res.status(500).json({message: "Error al eliminar la reseña", error: err.message})
    }
}

export default {
    getResenas,
    getResenasUsuario,
    createResena,
    updateResena,
    deleteResena
}