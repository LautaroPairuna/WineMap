const user = require('../models').usuario
const bcrypt = require('bcrypt')

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

    }catch (error) {

        console.log(error)

    }
    
};

module.exports = (login)