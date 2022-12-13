const express = require('express');
const router = express.Router();
const {getAllProducts, getProductDetail} = require('../controllers/productsController')

router.get('/', getAllProducts)

router.get('/:id', getProductDetail)

module.exports = router;