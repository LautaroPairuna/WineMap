const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const users_controller = require('../controllers/users')

router.get('/login_register', function (req, res) {

    res.render('login_and_register');
    
})

router.post('/register', [

    body('nombre_completo')
        .exists()
        .withMessage('Ingrese un nombre y un apellido')
        .isLength({min:5})
        .withMessage('El Nombre y Apellido es demasiado corto'),
    body('email')
        .exists()
        .withMessage('Ingrese un email')
        .isEmail()
        .withMessage('Ingrese un email valido'),
    body('contrasena')
        .exists()
        .withMessage('Ingrese una contraseña')
        .isLength({min:8})
        .withMessage('Ingrese un contraseña más segura')

], users_controller.newUser)

router.post('/login', users_controller.login)


module.exports = router;