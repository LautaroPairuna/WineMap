const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const usersController = require('../controllers/usersController')

router.get('/authentication', function (req, res) {

    res.render('login_and_register');
    
})

router.post('/register', [

    body('nombre_completo', 'Ingrese un nombre y un apellido')
        .exists()
        .not()
        .isEmpty()
        .isLength({min:5})
        .withMessage('El nombre y apellido es demasiado corto'),
    body('email', 'Ingrese un email')
        .exists()
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Ingrese un email valido'),
    body('contrasena', 'Ingrese una contraseña')
        .exists()
        .not()
        .isEmpty()
        .isLength({min:8})
        .withMessage('Ingrese una  contraseña más segura')

], usersController.newUser)

router.post('/login', usersController.login)


module.exports = router;