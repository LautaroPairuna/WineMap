const express = require('express');
const router = express.Router();
const {getAllProducts, getProductDetail, getProductsList} = require('../controllers/productsController')

router.get('/products', getAllProducts)

router.get('/products/:id', getProductDetail)

router.get('/products/:id', getProductsList)


module.exports = router;