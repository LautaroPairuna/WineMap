const product = require('../models').producto

const fecthData = async () => {

    try{
        const products = await product.findAll({raw: true})

        console.log(products)

    }catch (error){

        console.log(error)

    }

}

fecthData()


// module.exports = (fecthData)