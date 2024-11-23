import Estado from '../../models/cart/estados.js';

const getOneEstado = async (req, res) => {
    try {
        const estado = await Estado.findById(req.params.id);
        if (!estado) {
            return res.status(404).json({ message: "Estado no encontrado" });
        }
        res.status(200).json(estado);
    } catch (err) {
        res.status(500).json({ message: "Error al obtener el estado", error: err.message });
    }
}

export default { getOneEstado };