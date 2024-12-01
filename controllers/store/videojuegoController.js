import { populate } from "dotenv";
import Videojuego from "../../models/store/videojuego.js";

const getAllVideojuegos = async(req, res) => {
    try {
        const videojuegos = await Videojuego.find()
        .populate('genero', 'nombre -_id')
        .populate('desarrolladora', 'nombre -_id')
        .populate('distribuidor', 'nombre -_id')
        .populate('plataformas', 'nombre -_id');
        res.status(200).json(videojuegos)
    } catch (err) {
        res.status(500).json({message: "Error al obtener los videojuegos", error: err.message})
    }
}

const getOneVideojuego = async(req, res) => {
    try {
        const { _id } = req.body;
        const videojuego = await Videojuego.findById( _id )
        .populate('desarrolladora', 'nombre -_id')
        .populate('distribuidor', 'nombre -_id')
        .populate('genero', 'nombre -_id')
        ;
        res.status(200).json(videojuego) 
    } catch (err) {
        res.status(500).json({message: "Error al obtener el videojuego", error: err.message})
    }
}

const getRandomVideojuego = async(req, res) => {
    try {
        const count = await Videojuego.countDocuments();
        const random = Math.floor(Math.random() * count);
        const videojuego = await Videojuego.findOne().skip(random);
        res.status(200).json(videojuego)
    } catch (err) {
        res.status(500).json({message: "Error al obtener el videojuego", error: err.message})
    }
}

const putOneVideojuego = async(req, res) => {
    try {
        const {id} = req.params;
        const videojuego = await Videojuego.findByIdAndUpdate({_id: id}, req.body, {new: true});
        res.status(200).json(videojuego)
    } catch (err) {
        res.status(500).json({message: "Error al actualizar el videojuego", error: err.message})
    }
}

const deleteOneVideojuego = async(req, res) => {
    try {
        const {id} = req.params;
        await Videojuego.findByIdAndDelete(id);
        res.status(200).json({message: "Videojuego eliminado exitosamente"})
    } catch (err) {
        res.status(500).json({message: "Error al eliminar el videojuego", error: err.message})
    }
}

const createVideojuego = async(req, res) => {
    try {
        const {titulo, descripcion, genero, precio, desarrollador, distribuidor, plataformas, fecha_lanzamiento, imagenes, video_url, calificacion} = req.body;
        const videojuego = new Videojuego({titulo, descripcion, genero, precio, desarrollador, distribuidor, plataformas, fecha_lanzamiento, imagenes, video_url, calificacion:0.0, estado:true});
        await videojuego.save();
        res.status(201).json(videojuego)
    } catch (err) {
        res.status(500).json({message: "Error al crear el videojuego", error: err.message})
    }
}

/*
module.exports = {
    getAllVideojuegos,
    getOneVideojuego,
    putOneVideojuego,
    deleteOneVideojuego,
    createVideojuego
}
    */

export default { getAllVideojuegos, getOneVideojuego, putOneVideojuego, deleteOneVideojuego, createVideojuego, getRandomVideojuego }
