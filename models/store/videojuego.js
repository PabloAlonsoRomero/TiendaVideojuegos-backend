import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const VideojuegoSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    genero: [{
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    }],
    precio: {
        type: Schema.Types.Decimal128,
        required: true
    },
    desarrolladora: {
        type: Schema.Types.ObjectId,
        ref: 'Desarrolladora',
        required: true
    },
    distribuidor: {
        type: Schema.Types.ObjectId,
        ref: 'Distribuidor',
        required: true
    },
    plataformas: [{
        type: Schema.Types.ObjectId,
        ref: 'Plataforma',
        required: true
    }],
    fecha_lanzamiento: {
        type: Date,
        required: true
    },
    imagenes: [{
        type: String,
        required: true
    }],
    video_url: {
        type: String,
        required: true
    },
    calificacion: {
        type: Schema.Types.Decimal128,
        required: false
    },
    estado: {
        type: Boolean,
        required: true
    }
})

const Videojuego = mongoose.model('videojuegos', VideojuegoSchema);

//module.exports = Videojuego;
export default Videojuego;