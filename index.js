const express = require('express')
const http = require('http');
const morgan = require("morgan")

/* Uso de layout */
const expressEjsLayout = require('express-ejs-layouts')

const hostname = 'localhost';
const port = 3000;

/* CRear la app Express */
const app = express();

app.use(morgan('combined'))

/* EJS */
app.set('view engine','ejs');
app.set('layout', '../layouts/plantilla');
app.use(expressEjsLayout);

/* MAnejo de Sesion */
const session = require('express-session')
app.use(session ({
  secret : "misecreto",
  resave : false,
  saveUninitialized : false
}))

/* Uso de Rutas */
/*********************************************/
/*******        REEMPLAZAR AQUI     **********/
/*********************************************/
const a1 = require('./routes/inicio')
app.use('/', a1)
//acá estamos agregando las rutas del archivo login
const a2 = require('./routes/login')
app.use('/login', a2)

/* Archivos estaticos */
app.use(express.static(__dirname + "/public"))

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

