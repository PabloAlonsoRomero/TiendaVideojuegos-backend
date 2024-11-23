import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GeneroSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
})

const Genero = mongoose.model('Genero', GeneroSchema);
// module.exports = Genero;

export default Genero;