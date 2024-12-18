import mongoose from "mongoose";
import Usuario from "../../models/user/usuario.js";
import { hashPassword, comparePassword } from '../../utils/utils.js';

const inicioSesion = async(req, res) => {
    try {
        const {email, password} = req.body;
        const usuario = await Usuario.findOne({email})

        if (!usuario) {
            return res.status(400).json({message: "Usuario no encontrado"})
        }

        const isLogged = comparePassword(password, usuario.contrasena)

        if (!isLogged) {
            return res.status(400).json({message: "Contraseña incorrecta"})
        }
        if (isLogged) {
            return res.status(200).json({userID: usuario._id, nombreUsuario: usuario.nombre_usuario, admin: usuario.admin, message: "Inicio de sesión exitoso"})
        }
    } catch (err) {
        res.status(500).json({message: "Error al iniciar sesión", error: err.message})
    }
}

const crearUsuario = async(req, res) => {
    try {
        const {nombre, email, contrasena, telefono, rol, nombre_usuario} = req.body;
        const hashedPassword = hashPassword(contrasena);
        const newUsuario = new Usuario({
            nombre: nombre,
            email: email,
            contrasena: hashedPassword,
            telefono: telefono,
            admin: false,
            fecha_creacion: new Date(),
            estado: true,
            nombre_usuario: nombre_usuario,
            biblioteca: [],
            wishlist: []
        })

        await newUsuario.save();

        res.status(200).json({message: "Usuario creado exitosamente", usuario: newUsuario })
    } catch (err) {
        res.status(500).json({message: "Error al crear usuario", error: err.message})
    }
}

const getBibliotecaUsuario = async(req, res) => {
    try {
        const { userId } = req.body;
        const usuario = await Usuario.findById(userId);
        if (!usuario) {
            return res.status(400).json({message: "Usuario no encontrado"})
        }
        res.status(200).json({message: "Biblioteca obtenida exitosamente", biblioteca: usuario.biblioteca})
    } catch (err) {
        res.status(500).json({message: "Error al obtener biblioteca", error: err.message})
    }
}

const verificarAdmin = async (req, res) => {
    try {
        const { userId } = req.body;
        const usuario = await Usuario.findById(userId);
        if (!usuario) {
            return res.status(400).json({message: "Usuario no encontrado"})
        }
        if (!usuario.admin) {
            return res.status(200).json({message: "Usuario no es administrador", admin: usuario.admin})
        }
        res.status(200).json({message: "Usuario es administrador", admin: usuario.admin})
    } catch (err) {
        res.status(500).json({message: "Error al verificar administrador", error: err.message})
    }
}

/*
module.exports = {
    inicioSesion,
    crearUsuario
}
    */

export default {inicioSesion, crearUsuario, getBibliotecaUsuario, verificarAdmin}