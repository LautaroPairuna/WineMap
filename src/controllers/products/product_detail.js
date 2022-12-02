const product = require('../../models').producto

const productsArray = async (req, res) => {

    try{
        const products = await product.findAll({
            raw: true,
            limit: 8,
            order: RAND
        })

        res.status(200).render('product_detail', {products})

    }catch (error){

        console.log(error)

    }

}

module.exports = {productsArray}