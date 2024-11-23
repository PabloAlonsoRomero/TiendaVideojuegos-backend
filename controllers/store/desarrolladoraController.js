import Desarrollador from '../../models/store/desarrolladora.js';

const getDesarrolladoras = async (req, res) => {
    try {
        const desarrolladoras = await Desarrollador.find();
        res.status(200).json(desarrolladoras);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const createDesarrolladora = async (req, res) => {
    try {
        const desarrolladora = req.body;
        const newDesarrolladora = new Desarrollador(desarrolladora);
        await newDesarrolladora.save();
        res.status(201).json(newDesarrolladora);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const updateDesarrolladora = async (req, res) => {
    try {
        const { desarrolladoraId, nombre } = req.body;
        const updatedDesarrolladora = await Desarrollador.findByIdAndUpdate(desarrolladoraId, { nombre }, { new: true });
        res.status(200).json(updatedDesarrolladora);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const deleteDesarrolladora = async (req, res) => {
    try {
        const { desarrolladoraId } = req.body;
        await Desarrollador.findByIdAndRemove(desarrolladoraId);
        res.status(200).json({ message: 'Desarrolladora eliminada' });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export default { getDesarrolladoras, createDesarrolladora, updateDesarrolladora, deleteDesarrolladora };