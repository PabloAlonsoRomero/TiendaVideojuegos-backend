import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DesarrolladoraSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
})

const Desarrolladora = mongoose.model('Desarrolladora', DesarrolladoraSchema, 'desarrolladoras');

// module.exports = Desarrolladora;

export default Desarrolladora;