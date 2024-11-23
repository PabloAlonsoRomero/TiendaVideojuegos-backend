import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ResenaSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: true
    },
    videojuego: {
        type: Schema.Types.ObjectId,
        ref: 'videojuegos',
        required: true
    },
    calificacion: {
        type: Number,
        required: true
    },
    comentario: {
        type: String,
        required: true
    },
    fecha_creacion: {
        type: Date,
        required: true
    }
})

const Resena = mongoose.model('reseñas', ResenaSchema);
// module.exports = Resena;

export default Resena;