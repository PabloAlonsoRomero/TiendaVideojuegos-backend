import Genero from '../../models/store/genero.js';

const getGeneros = async(req, res) => {
    try {
        const generos = await Genero.find();
        res.status(200).json(generos)
    } catch (err) {
        res.status(500).json({message: "Error al obtener los generos", error: err.message})
    }
}

const postGenero = async(req, res) => {
    try {
        const {nombre} = req.body;
        const genero = new Genero({nombre});
        await genero.save();
        res.status(201).json(genero);
    } catch (err) {
        res.status(500).json({message: "Error al crear el genero", error: err.message})
    }
}

const putGenero = async(req, res) => {
    try {
        const {id} = req.params;
        const genero = await Genero.findByIdAndUpdate({_id: id}, req.body, {new: true});
        res.status(200).json(genero);
    } catch (err) {
        res.status(500).json({message: "Error al actualizar el genero", error: err.message})
    }
}

const deleteGenero = async(req, res) => {
    try {
        const {id} = req.params;
        await Genero.findByIdAndDelete(id);
        res.status(200).json({message: "Genero eliminado exitosamente"})
    } catch (err) {
        res.status(500).json({message: "Error al eliminar el genero", error: err.message})
    }
}

export default {getGeneros, postGenero, putGenero, deleteGenero}