const express = require('express');
const router = express.Router();

router.get('/product_detail', function (req, res) {

    res.render('product_detail');
    
}) 

module.exports = router;