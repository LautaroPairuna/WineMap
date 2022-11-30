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

const contenedorProductos = document.querySelector('#contenedor_productos')
const printProducts = (products) => {
    const template = document.querySelector('#template_productos_destacados').content
    const fragment = document.createDocumentFragment()
    console.log(template)
    products.forEach(producto => {
        console.log(producto)
        template.querySelector('img').setAttribute('src', product.foto)
    })
}