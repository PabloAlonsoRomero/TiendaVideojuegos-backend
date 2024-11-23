import MetodoPago from '../../models/cart/metodopago.js';

// Obtener todos los métodos de pago de un usuario
const getMetodos = async(req, res) => {
    try {
        const usuarioId = req.usuario._id;
        const metodos = await MetodoPago.find({usuario: usuarioId});
        if (!metodos) {
            return res.status(404).json({ message: "Métodos de pago no encontrados" });
        }
        res.status(200).json(metodos);
    } catch (err) {
        res.status(500).json({message: "Error al obtener los métodos de pago", error: err.message})
    }
}

// Agregar un nuevo método de pago
const postMetodo = async (req, res) => {
    try {
        const usuarioId = req.usuario._id;
        const {tipo, detalles} = req.body;

        const nuevoMetodo = new MetodoPago({
            usuario: usuarioId,
            tipo,
            detalles,
            fecha_creacion: new Date()
        })

        await nuevoMetodo.save();
        res.status(201).json(nuevoMetodo);
    } catch (err) {
        res.status(500).json({message: "Error al agregar un método de pago", error: err.message})
    }
}

// Actualizar un método de pago existente
const putMetodo = async (req, res) => {
    try {
        const usuarioId = req.usuario._id;
        const {metodoId, tipo, detalles} = req.body;

        const metodo = await MetodoPago.findAndUpdate(
            {usuario: usuarioId, _id: metodoId},
            {tipo, detalles},
            {new: true}
        )

        if (!metodo) {
            return res.status(404).json({ message: "Método de pago no encontrado" });
        }

        res.status(200).json(metodo);
    } catch (err) {
        res.status(500).json({message: "Error al actualizar un método de pago", error: err.message})
    }
}

// Eliminar un método de pago
const deleteMetodo = async (req, res) => {
    try {
        const usuarioId = req.usuario._id;
        const {metodoId} = req.body;

        const metodo = await MetodoPago.findOneAndDelete({usuario: usuarioId, _id: metodoId});

        if (!metodo) {
            return res.status(404).json({ message: "Método de pago no encontrado" });
        }

        res.status(200).json({ message: "Método de pago eliminado exitosamente" });
    } catch (err) {
        res.status(500).json({message: "Error al eliminar un método de pago", error: err.message})
    }
}

export default { getMetodos, postMetodo, putMetodo, deleteMetodo };