const express = require('express');
const router = express.Router();
const product = require('../models').producto
const product_controller = require('../controllers/productos_destacados')

router.get('/', function (req, res) {

    res.render('index');
    
})

router.post('/', product_controller)