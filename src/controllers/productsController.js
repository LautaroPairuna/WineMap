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

const getProductsList = async (req, res) => {

    try{
        const productsList = await products.findAll({
            raw: true,
            limit: 8,
            order: Sequelize.literal('rand()')
        })

        return res.status(200).render('product_detail.ejs', {productsList})

    }catch (error){

        console.log(error)

    }

}

const getProductDetail = async (req, res) => {

    try{

        const { id } = req.params;

        const product_query = await products.findOne({ where: { id: [id] } });

        if (!product_query) {

            return res.send('No existe este producto');

        }

        return res.status(200).render('product_detail.ejs', {product_query});
        

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


module.exports = {getAllProducts, getProductsList ,getProductDetail, getOutstandingProductsList}