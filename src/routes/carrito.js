const express = require('express');
const router = express.Router();

router.get('/carrito', function (req, res) {

    res.render('carrito');
    
})

module.exports = router;