require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const toastr = require('express-toastr')
const cors = require('cors');
const app = express();
const port = process.env.PUERTO || 3000

//Seteamos ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')


app.use(cookieParser('user-session'))
app.use(session({
    secret: 'user-session',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 900000 }
    
}))
app.use(flash());

app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(express.static('public'));
app.use('/public', express.static('public'))
app.use(require ('./routes/carrito'))
app.use(require ('./routes/contacto'))
app.use(require ('./routes/authenticateRoutes'))
app.use('/products', require('./routes/productsRoutes'))
app.use('/', require('./routes/index'))
app.use('/api', require('./routes/ApiRoutes'))
    
app.listen(port, function() {
    console.log('Servidor iniciado en puerto: ' + port)
})

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Somenthing broke!');
});
