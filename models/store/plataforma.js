import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PlataformaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
})

const Plataforma = mongoose.model('Plataforma', PlataformaSchema);
// module.exports = Plataforma;

export default Plataforma;