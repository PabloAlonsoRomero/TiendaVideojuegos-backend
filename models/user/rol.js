import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RolSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    permisos: [{
        type: String,
        required: true
    }]
})

const Rol = mongoose.model('roles', RolSchema);
// module.exports = Rol;

export default Rol;