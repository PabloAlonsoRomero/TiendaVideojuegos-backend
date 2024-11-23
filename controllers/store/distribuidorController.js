import Distribuidor from '../../models/store/distribuidor.js';

const getDistribuidores = async (req, res) => {
    try {
        const distribuidores = await Distribuidor.find();
        res.status(200).json(distribuidores);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const createDistribuidor = async (req, res) => {
    try {
        const distribuidor = req.body;
        const newDistribuidor = new Distribuidor(distribuidor);
        await newDistribuidor.save();
        res.status(200).json(newDistribuidor);
    } catch {
        res.status(404).json({ message: err.message });
    }
}

const updateDistribuidor = async (req, res) => {
    try {
        const { distribuidorId, nombre} = req.body;
        const updatedDistribuidor = await Distribuidor.findByIdAndUpdate(distribuidorId, { nombre }, { new: true });
        res.status(200).json(updatedDistribuidor);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const deleteDistribuidor = async (req, res) => {
    try {
        const { distribuidorId } = req.body;
        await Distribuidor.findByIdAndRemove(distribuidorId);
        res.status(200).json({ message: 'Distribuidor eliminado correctamente' });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export default { getDistribuidores, createDistribuidor, updateDistribuidor, deleteDistribuidor };