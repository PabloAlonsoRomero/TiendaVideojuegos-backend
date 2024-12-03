import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_CLUSTER = process.env.DB_CLUSTER;
//const conexion = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`;
const conexion = `mongodb://mongo_container:27017/tienda`

const connectDB = async () => {
    try {
        await mongoose.connect(conexion,{})
        console.log('Database connected');
    } catch (error) {
        console.error('Error conectando a MongoDB:', error.message);
        process.exit(1); 
    }
}

// module.exports = connectDB;
export default connectDB;