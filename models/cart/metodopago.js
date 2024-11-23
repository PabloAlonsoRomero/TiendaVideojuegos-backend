import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MetodoPagoSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    detalles: {
        type: String,
        required: true
    },
    fecha_creacion: {
        type: Date,
        required: true
    }
})

const MetodoPago = mongoose.model('metodopagos', MetodoPagoSchema);
// module.exports = MetodoPago

export default MetodoPago;