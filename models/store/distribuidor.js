import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DistribuidorSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
})

const Distribuidor = mongoose.model('Distribuidor', DistribuidorSchema, 'distribuidores');

// module.exports = Distribuidor;

export default Distribuidor;