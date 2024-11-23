import express from'express';
import cors from 'cors';
import ejs from 'ejs';
import listEndpoints from 'express-list-endpoints';
import dotenv from 'dotenv';

import connectDB from './config/db.js';

// Routes cart
import carrocomprasRoutes from './routes/cart/carrocomprasRoutes.js';
import estadosRoutes from './routes/cart/estadosRoutes.js';
import metodopagoRoutes from './routes/cart/metodopagoRoutes.js';
import pedidosRoutes from './routes/cart/pedidosRoutes.js';

// Routes documentacion
import documentacionRoutes from './routes/doc/documentacionRoutes.js';

// Routes reviews
import resenaRoutes from './routes/reviews/resenaRoutes.js';

// Routes store
import desarrolladoraRoutes from './routes/store/desarrolladoraRoutes.js';
import distribuidorRoutes from './routes/store/distribuidorRoutes.js';
import generoRoutes from './routes/store/generoRoutes.js';
import plataformaRoutes from './routes/store/plataformaRoutes.js';
import videojuegoRoutes from './routes/store/videojuegoRoutes.js';

// Routes user
import rolRoutes from './routes/user/rolRoutes.js';
import usuarioRoutes from './routes/user/usuarioRoutes.js';


const app = express();
const PORT = process.env.PORT || 3000;
connectDB()

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.engine('ejs', ejs.__express);

// Middleware global
app.use(express.json());
app.use(cors());
app.use(express.static('public')); // Servir archivos estáticos

// App use cart routes
app.use(carrocomprasRoutes)
app.use(estadosRoutes)
app.use(metodopagoRoutes)
app.use(pedidosRoutes)

// App use documentacion routes
app.use(documentacionRoutes)

// App use reviews routes
app.use(resenaRoutes)

// App use store routes
app.use(desarrolladoraRoutes)
app.use(distribuidorRoutes)
app.use(generoRoutes)
app.use(plataformaRoutes)
app.use(videojuegoRoutes)

// App use user routes
app.use(rolRoutes)
app.use(usuarioRoutes)

// Ruta para listar endpoints
app.get('/endpoints', (req, res) => {
    const endpoints = listEndpoints(app);
    res.render('endpoints', { endpoints});
})

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
})