const users = require('../models').Admin;

async function login(req, res) {
  try {
    const { usuario, contrasena } = req.body;

    const user = await users.findOne({ where: { usuario: usuario } });
    if (user && user.contrasena === contrasena) {
      return res.status(200).json({ success: true });
    } else {
      return res.send('Este usuario no existe!');
    }
  } catch (error) {
    handleError(error, res);
  }
}

function handleError(error, res) {
  console.error(error);
  res.status(500).send('Ocurrió un error inesperado.');
}

module.exports = { login };