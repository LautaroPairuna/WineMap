const product = require('../../models').producto

const outstandingProductsArray = async (req, res) => {

    try{
        const products = await product.findAll({
            raw: true, 
            where: {
                destacado: 1
            },
            limit: 8,
        })

        res.status(200).render('index', {products})

    }catch (error){

        console.log(error)

    }

}

module.exports = {outstandingProductsArray}