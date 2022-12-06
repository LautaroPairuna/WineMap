document.addEventListener('DOMContentLoaded', () => {
    fecthData()
})

import { producto as product } from '../../src/models'

const fecthData = async () => {

    try{
        const products = await product.findAll({raw: true})

        console.log(products)

    }catch (error){

        console.log(error)

    }

}