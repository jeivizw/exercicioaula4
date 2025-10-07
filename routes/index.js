const express = require('express');
const router = express.Router();

//importar outros routers
const usuariosRouter= require('./usuarios');
const produtosRouter= require('./produtos');
const authRouter= require('./auth');

//rota principal
router.get('/', (req,res) => {
    res.json({
        message: 'API da padaria Doce Sabor',
        version: '1.0.0',
        endpoints: {
            usuarios: '/api/usuarios',
            produtos: '/api/produtos',
            auth: '/api/auth'
        }
    });
});

//Usar sub-Routers
router.use('/usuarios', usuariosRouter);
router.use('/produtos', produtosRouter);
router.use('/auth', authRouter);

Module.exports = router;