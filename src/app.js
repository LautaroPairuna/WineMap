require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mime = require('mime')
const path = require('path')

const setHeadersOnStatic = (res, path, stat) => {
  const type = mime.getType(path);
  res.set('content-type', type);
}

const staticOptions = {
  setHeaders: setHeadersOnStatic
}


//Seteamos ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public'), staticOptions));
app.use('/public', express.static('public'))
app.use(require ('./routes/carrito'))
app.use(require ('./routes/contacto'))
app.use(require ('./routes/login_register'))
app.use(require ('./routes/product_detail'))
app.use('/', require('./routes/index'))
    
app.listen(process.env.PUERTO, function() {
    console.log('Servidor iniciado en puerto: ' + process.env.PUERTO)
})

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Somenthing broke!');
});
