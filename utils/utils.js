import bcrypt from 'bcrypt';

const hashPassword = (password) => {
    return bcrypt.hashSync(password, 10);
}

const comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

/*
module.exports = {
    hashPassword,
    comparePassword
} */

export {hashPassword, comparePassword}