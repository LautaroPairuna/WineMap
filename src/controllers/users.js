const user = require('../models').usuario
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

function renderLoginRegisterPage(req, res) {

    res.render('login_and_register')

}

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

    }catch(e){

        res.status(404).send(`${e}`)
        
    }
    
}

async function login(req, res) {

    try{

        const {email_login, contrasena_login} = req.body

        const registro_consulta = await user.findAll({ 

            where: { 

                email: email_login, 
                contrasena: contrasena_login

            }

        });

        usuario = registro_consulta.filter(data => data.email === email_login)

        if(usuario.length > 0) {

            const isTruePassword = bcrypt.compareSync(contrasena_login, user.contrasena)

            if(!isTruePassword){

                return res.send('Contraseña incorrecta!')

            }else{

                return res.send('Bienvenido!')

            }

        }

        res.status(200).redirect('/')

    }catch (error) {

        console.log(error)

    }
    
};

module.exports = {newUser, login, renderLoginRegisterPage}