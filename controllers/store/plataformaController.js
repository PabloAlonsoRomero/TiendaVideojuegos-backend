import Plataforma from '../../models/store/plataforma.js'

const getPlataformas = async (req, res) => {
    try {
        const plataformas = await Plataforma.find();
        res.status(200).json(plataformas);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const createPlataforma = async (req, res) => {
    try {
        const plataforma = req.body;
        const newPlataforma = new Plataforma(plataforma);
        await newPlataforma.save();
        res.status(200).json(newPlataforma);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const updatePlataforma = async (req, res) => {
    try {
        const { plataformaId, nombre } = req.body;
        const updatedPlataforma = await Plataforma.findByIdAndUpdate(plataformaId, { nombre }, { new: true });
        res.status(200).json(updatedPlataforma);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const deletePlataforma = async (req, res) => {
    try {
        const { plataformaId } = req.body;
        await Plataforma.findByIdAndRemove(plataformaId);
        res.status(200).json({ message: 'Plataforma eliminada' });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export default { getPlataformas, createPlataforma, updatePlataforma, deletePlataforma };