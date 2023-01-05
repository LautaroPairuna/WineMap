const express = require('express');
const router = express.Router();
const {getProducts, getProduct, postProduct, deleteProduct, updateProduct} = require('../controllers/productsController')
const { login } = require('../controllers/AdminController')

router.get('/products', getProducts)

router.get('/products/:id', getProduct)

router.post('/products', postProduct)

router.delete('/products/:id', deleteProduct)

router.put('/products/:id', updateProduct)

router.post('/login', login)

module.exports = router;