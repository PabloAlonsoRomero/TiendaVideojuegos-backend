import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PedidoSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: true
    },
    videojuegos: [{
        type: Schema.Types.ObjectId,
        ref: 'videojuegos',
        required: true
    }],
    total: {
        type: Schema.Types.Decimal128,
        required: true
    },
    estado: {
        type: Schema.Types.ObjectId,
        ref: 'estados',
        required: true
    }, 
    fecha_creacion: {
        type: Date,
        required: true
    }
})

const Pedido = mongoose.model('pedidos', PedidoSchema);
// module.exports = Pedido;

export default Pedido;