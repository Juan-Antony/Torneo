const express = require('express')
const http = require('http');
const morgan = require("morgan")

/* Uso de layout */
const expressEjsLayout = require('express-ejs-layouts')

const hostname = 'localhost';
const port = 3000;

/* Crear la app Express */
const app = express();

app.use(morgan('combined'))

/* EJS */
app.set('view engine','ejs');
app.set('layout', '../layouts/plantilla');
app.use(expressEjsLayout);
global.sess;
global.links = [
  {endpoint: '/equipos/listar', name: 'Equipos'},
  {endpoint: '/torneos/listar', name: 'Torneos'},
  {endpoint: '/usuarios/listar', name: 'Usuarios'},
  {endpoint: '/roles/listar', name: 'Roles'},
  {endpoint: '/inicio/login', name: 'Login'},
  {endpoint: '/inicio/logout', name: 'logout'},
];

/* MAnejo de Sesion */
const session = require('express-session')
app.use(session ({
  secret : "misecreto",
  resave : false,
  saveUninitialized : false
}))

/* Uso de Rutas */
const a1 = require('./routes/inicio')
app.use('/', a1)
const a2 = require('./routes/login')
app.use('/login', a2)
const a3 = require('./routes/manageadmin')
app.use('/admin', a3)
const a4 = require('./routes/manageorga')
app.use('/orga', a4)
const a5 = require('./routes/managelider')
app.use('/lider', a5)

/* Archivos estaticos */
app.use(express.static(__dirname + "/public"))

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

