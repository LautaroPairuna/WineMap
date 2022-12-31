const products = require('../models').producto
const { Sequelize } = require('sequelize');

const getAllProducts = async (req, res) => {

    try{
        const allProducts = await products.findAll({
            raw: true,
        })

        return res.status(200).render('products.ejs', {allProducts})

    }catch (error){

        console.log(error)

    }

}

const getProductDetail = async (req, res) => {

    try{

        const { id } = req.params;

        const product_query = await products.findOne({ where: { id: [id] } });

        const productsList = await products.findAll({
            raw: true,
            limit: 8,
            order: Sequelize.literal('rand()')
        })

        if (!product_query) {

            return res.send('No existe este producto');

        }

        return res.status(200).render('product_detail.ejs', {product_query, productsList});
        

    }catch (error) {

        console.log(error)

    }

}

const getOutstandingProductsList = async (req, res) => {

    try{
        const Outstandingproducts = await products.findAll({
            raw: true, 
            where: {
                destacado: 1
            },
            limit: 8,
            order: Sequelize.literal('rand()')
        })

        return res.status(200).render('index.ejs', {Outstandingproducts})

    }catch (error){

        console.log(error)

    }

}

//API CONTROLLERS

const getProducts = async (req, res) => {
    
    const listProduct = await products.findAll()

    res.json(listProduct)

}

const getProduct = async (req, res) => {

    const { id } = req.params ;

    const product = await products.findOne({
        where: {
            id: id
        }
    })

    if(product) {
        res.json(product)
    }else{

        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        }) 
    }

}


const deleteProduct = async (req, res) => {

    const { id } = req.params ;

    const product = await products.findOne({
        where: {
            id: id
        }
    })

    if(!product) {

        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        }) 

    }else{

        await product.destroy()
        res.json({
            msg: 'El producto fue eliminado con exito!'
        })
    }

}

const postProduct = async (req, res) => {

    try{

        await products.create(req.body);

        res.json({
            msg: 'El producto fue creado con exito!'
        })

    } catch (error) {

        console.log(error)

        res.json({
            msg: 'Upps ocurrio un error, por favor comuniquese con el Soporte para brindarle una solucion'
        })

    }

}

const updateProduct = async (req, res) => {

    try{

        const { id } = req.params ;

        const product = await products.findOne({
            where: {
                id: id
            }
        })

        if(!product) {

            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            }) 
            
        }else{

            await product.update(req.body);

            res.json({
                msg: `El producto con el id ${id} ha sido actualizado correctamente!`
            })

        }

    }catch (error) {

        console.log(error)

        res.json({
            msg: 'Upps ocurrio un error, por favor comuniquese con el Soporte para brindarle una solucion'
        })

    }

}


module.exports = {getAllProducts, getProductDetail, getOutstandingProductsList, getProducts, getProduct, postProduct, deleteProduct, updateProduct}