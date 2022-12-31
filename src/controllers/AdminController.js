const users = require('../models').Admin
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

async function newUser(req, res) {

    try{

        const {nombre_completo, email, contrasena} = req.body

        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            
            const valores = req.body
            const validaciones = errors.array()

            return res.render('login_and_register', { validaciones: validaciones, valores: valores })

        }

        const registro_consulta = await users.findAll({ where: { email: [email] }});
            
        if(registro_consulta.length > 0) {

            console.log('Este usuario ya existe!')

        }else {

            bcrypt.hash(contrasena, 12).then(async hash => {
            
                const contrasena = hash;
    
                let usuario = await users.create ({nombre_completo, email, contrasena})
    
                return res.status(200).send(usuario)
                
    
            })

        }

    }catch(e){

        res.status(404).send(`${e}`)
        
    }
    
}

async function login(req, res) {

    try{

        const {email_login, contrasena_login} = req.body

        const user_consulta = await users.findOne({ where: {
           
            email: email_login
            
        }});

        if(user_consulta) {

            const isTruePassword = bcrypt.compareSync(contrasena_login, user_consulta.contrasena)

            if(!isTruePassword){

                return res.send('Contraseña incorrecta!')

            }else{

                return res.status(200).redirect('/')

            }

        }else{

            return res.send('Este usuario no existe!')

        }


    }catch (error) {

        console.log(error)

    }
    
};

module.exports = {newUser, login}