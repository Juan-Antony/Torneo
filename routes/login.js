const express = require("express")
const bodyParser = require("body-parser")

const rutas = express.Router()

const session = require('express-session');
const Sequelize = require('sequelize')
const models = require('../models')
const usuario = models.Usuario
const rol = models.Rol

const {Op} = require("sequelize")

// Multer
const multer = require('multer')
const par = multer()

// Parsing de los datos
rutas.use(express.urlencoded({extended: true}))
rutas.use(express.json())
rutas.use(par.array())

/* Pagina de Inicio */
rutas.get('/', (req, res) => {
    res.render('login');
})
/*
rutas.post('/', (req, res) => {
    var correo = req.body.correo;
    var contrasenia = req.body.contrasenia;
    console.log(`${correo} - ${contrasenia}`)
    // ahora, ya tienes ambos datos en el servidor, entonces alli haces tu consulta a la db 
    res.send('login');
})
*/
rutas.post('/signup', (req, res) => {
    var correo = req.body.correo;
    var contrasenia = req.body.contrasenia;
    var nombreCompleto = req.body.nombreCompleto;
    var rolId = req.body.rolId;
    console.log(`${correo} - ${contrasenia}`)
    // ahora, ya tienes ambos datos en el servidor, entonces alli haces tu consulta a la db 
    res.send('login');
})
rutas.post('/',(req,res) => {
    sess = req.session;
    usuario.findOne({where: {correo: req.body.correo, contrasenia: req.body.contrasenia}})
    .then(user => {
        if(user){
            sess.user = user;
            if(sess.user.rolId === 1){
                links = [
                    {endpoint: '/manageadmin/inicioadmin', name: 'Lista de Usuarios'},
                    {endpoint: '/manageadmin/agregarUsuario', name: 'Crear Nuevo Usuario'},
                    {endpoint: '/manageadmin/editarUsuario', name: 'Editar Usuario'},
                    {endpoint: '/login/logout', name: 'logout'},
                  ];
                  res.redirect('/admin/inicioadmin');
            }
            else if(sess.user.rolId===2){
                links = [
                    {endpoint: '/manageorga', name: 'Torneos'},
                    {endpoint: '/manageorga/agregarTorneo', name: 'Crear Nuevo Torneo'},
                    {endpoint: '/manageorga/editarTorneo', name: 'Editar Torneo'},
                    {endpoint: '/manageorga/organizarTorneo', name: 'Organizar Torneo'},
                    {endpoint: '/login/logout', name: 'logout'},
                  ];
                  res.redirect('/manageorga');
            }
            else{
                links = [
                    {endpoint: '/managelider', name: 'Perfil'},
                    {endpoint: '/mangelider/liderTorneo', name: 'Lista de Torneos'},
                    {endpoint: '/managelider/editarPerfil', name: 'Editar mi Perfil'},
                    {endpoint: '/managelider/editarEquipo', name: 'Editar Datos de mi Equipo'},
                    {endpoint: '/login/logout', name: 'logout'},
                  ];
                  res.redirect('/managelider');
            }
        }else{
            res.redirect('/');
        }
    })
    .catch(error => res.status(400).send(error))
});

rutas.get('/registro',(req,res) => {
    rol.findAll({ }).then(roles => {
        res.render('signup',{roles: roles});
    }).catch(error => res.status(400).send(error))
});

rutas.get('/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err) {
            req.session = null;
            return console.log(err);
        }
        links = [{endpoint: '/inicio', name: 'Login'},];
        res.redirect('/inicio');
    });
});


module.exports = rutas