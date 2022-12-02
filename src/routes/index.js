const express = require('express');
const router = express.Router();
const {outstandingProductsArray} = require('../controllers/products/productos_destacados')

router.get('/', outstandingProductsArray)

module.exports = router