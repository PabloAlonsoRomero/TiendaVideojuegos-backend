import CarroCompras from "../../models/cart/carrocompras.js";

const getCarroCompras = async(req, res) => {
    try {
        const usuarioId = req.usuario._id;
        const carrocompras = await CarroCompras.findOne({usuario: usuarioId}).populate('productos.producto');
        if (!carrocompras) {
            return res.status(404).json({ message: "Carro de compras no encontrado" });
        }
        res.status(200).json(carrocompras);
    } catch (err) {
        res.status(500).json({message: "Error al obtener el carro de compras", error: err.message})
    }
}

const postCarroCompras = async(req, res) => {
    try {
        const usuarioId = req.usuario._id;
        const { videojuegoId } = req.body;

        let carrocompras = await CarroCompras.findOne({ usuario: usuarioId });

        if (!carrocompras) {
            carrocompras = new CarroCompras({
                usuario: usuarioId,
                videojuegos: [videojuegoId]
            });
        } else {
            if (!carrocompras.videojuegos.includes(videojuegoId)) {
                carrocompras.videojuegos.push(videojuegoId);
            }
        }

        await carrocompras.save();
        res.status(201).json(carrocompras);
    } catch (err) {
        res.status(500).json({message: "Error al agregar un producto al carro de compras", error: err.
            message})
    }
}

const putCarroCompras = async(req, res) => {
    try {
        const usuarioId = req.usuario._id;
        const { videojuegoId } = req.body;

        let carrocompras = await CarroCompras.findOne({ usuario: usuarioId });

        if (!carrocompras) {
            return res.status(404).json({ message: "Carro de compras no encontrado" });
        }

        if (action === 'add') {
            if (!carrocompras.videojuegos.includes(videojuegoId)) {
                carrocompras.videojuegos.push(videojuegoId);
            }
        } else if (action === 'remove') {
            carrocompras.videojuegos = carrocompras.videojuegos.filter(v => v.toString() !== videojuegoId);
        } else {
            return res.status(400).json({ message: "Acción no válida" });
        }

        await carrocompras.save();
        res.status(200).json(carrocompras);
    } catch (err) {
        res.status(500).json({message: "Error al actualizar el carro de compras", error: err.message})
    }
}

const deleteCarroCompras = async(req, res) => {
    try {
        const usuarioId = req.user._id;
        const carrocompras = await CarroCompras.findOneAndDelete({ usuario: usuarioId });
        if (!carrocompras) {
            return res.status(404).json({ message: "Carro de compras no encontrado" });
        }
        res.status(200).json({ message: "Carro de compras eliminado exitosamente" });
    } catch (err) {
        res.status(500).json({ message: "Error al eliminar el carro de compras", error: err.message });
    }
}

export default {getCarroCompras, postCarroCompras, putCarroCompras, deleteCarroCompras}
