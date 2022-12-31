const express = require('express');
const router = express.Router();
const {getProducts, getProduct, postProduct, deleteProduct, updateProduct} = require('../controllers/productsController')

router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/', postProduct)

router.delete('/:id', deleteProduct)

router.put('/:id', updateProduct)

module.exports = router;