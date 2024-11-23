import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EstadoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
})

const Estado = mongoose.model('estados', EstadoSchema);
// module.exports = Estado;

export default Estado;