const express = require('express');
const router = express.Router();
const product_controller = require('../controllers/productos_destacados')

router.get('/', product_controller)