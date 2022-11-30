const user = require('../models').usuario
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

async function newUser(req, res) {

    try{

        const userdata = req.body

        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            
            const valores = req.body
            const validaciones = errors.array()

            res.render('login_and_register', { validaciones: validaciones, valores: valores })

        }

        const registro_consulta = await user.findAll({ where: { email: [userdata.email] }});
            
        if(registro_consulta.length > 0) {

            console.log('Este usuario ya existe!')

        }else {

            bcrypt.hash(userdata.contrasena, 12).then(async hash => {
            
                userdata.contrasena = hash;
    
                let usuario = await user.create (userdata)
    
                return res.status(200).send(usuario)
                
    
            })

        }

        return res.redirect('/login_register')

    }catch(e){

        res.status(404).send(`${e}`)
        
    }
    
}


module.exports = (newUser)