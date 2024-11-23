import Pedido from '../../models/cart/pedido.js';

const getPedidos = async(req, res) => {
    try {
        const usuarioId = req.usuario._id;
        const pedidos = await Pedido.find({usuario: usuarioId});
        if (!pedidos) {
            return res.status(404).json({ message: "Pedidos no encontrados" });
        }
        res.status(200).json(pedidos);
    } catch (err) {
        res.status(500).json({message: "Error al obtener los pedidos", error: err.message})
    }
}

const postPedido = async (req, res) => {
    try {
        const usuarioId = req.usuario._id;
        const { videojuegos, total, estado } = req.body;

        const nuevoPedido = new Pedido({
            usuario: usuarioId,
            videojuegos,
            total,
            estado,
            fecha_creacion: new Date()
        })

        await nuevoPedido.save();
        res.status(201).json(nuevoPedido);
    } catch (err) {
        res.status(500).json({message: "Error al agregar un pedido", error: err.message})
    }
}

export default { getPedidos, postPedido };