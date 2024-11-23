import Rol from '../../models/user/rol.js'

const getRoles = async (req, res) => {
    try {
        const roles = await Rol.find();
        res.status(200).json(roles);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export default { getRoles };