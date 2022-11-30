const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {body} = require('express-validator');
const register_controller = require('../controllers/register')
const login_controller = require('../controllers/login')

router.get('/login_register', function (req, res) {

    res.render('login_and_register');
    
})

router.post('/register', [

    body('nombre_completo', 'Ingrese un nombre y un apellido').exists().isLength({min:5}),
    body('email', 'Ingrese un email valido').isEmail(),
    body('contrasena', 'Ingrese un contraseña más segura').exists().isLength({min:8})

], register_controller)

router.post('/login', login_controller)



module.exports = router;