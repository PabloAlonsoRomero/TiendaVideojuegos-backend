import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CarroComprasSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: true
    } ,
    videojuegos: [{
        type: Schema.Types.ObjectId,
        ref: 'videojuegos',
        required: true
    }]
})

const CarroCompras = mongoose.model('carrocompras', CarroComprasSchema);
// module.exports = CarroCompras;

export default CarroCompras;