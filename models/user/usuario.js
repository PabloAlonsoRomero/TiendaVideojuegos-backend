import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    rol: [{
        type: Schema.Types.ObjectId,
        ref: 'roles',
        required: true
    }],
    fecha_creacion: {
        type: Date,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    },
    nombre_usuario: {
        type: String,
        required: true
    },
    biblioteca: [{
        type: Schema.Types.ObjectId,
        ref: 'videojuegos',
        required: true
    }],
    wishlist: [{
        type: Schema.Types.ObjectId,
        ref: 'videojuegos',
        required: true
    }]
})

const Usuario = mongoose.model('usuarios', UsuarioSchema);

// module.exports = Usuario;
export default Usuario;