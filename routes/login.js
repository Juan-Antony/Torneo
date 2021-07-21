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
    res.render('./login');
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
rutas.post('/login',(req,res) => {
    sess = req.session;
    usuario.findOne({where: {correo: req.body.correo, contrasenia: req.body.contrasenia}})
    .then(user => {
        if(user){
            sess.user = user;
            if(sess.user.rolId === 1){
                links = [
                    {endpoint: '/admin', name: 'Lista de Usuarios'},
                    {endpoint: '/agregarUsuario', name: 'Crear Nuevo Usuario'},
                    {endpoint: '/editarUsuario', name: 'Editar Usuario'},
                    {endpoint: '/inicio/logout', name: 'logout'},
                  ];
                  res.redirect('/admin');
            }
            else if(sess.user.rolId===2){
                links = [
                    {endpoint: '/orga', name: 'Torneos'},
                    {endpoint: '/agregarTorneo', name: 'Crear Nuevo Torneo'},
                    {endpoint: '/editarTorneo', name: 'Editar Torneo'},
                    {endpoint: '/organizarTorneo', name: 'Organizar Torneo'},
                    {endpoint: '/inicio/logout', name: 'logout'},
                  ];
                  res.redirect('/orga');
            }
            else{
                links = [
                    {endpoint: '/lider', name: 'Perfil'},
                    {endpoint: '/liderTorneo', name: 'Lista de Torneos'},
                    {endpoint: '/editarPerfil', name: 'Editar mi Perfil'},
                    {endpoint: '/editarEquipo', name: 'Editar Datos de mi Equipo'},
                    {endpoint: '/inicio/logout', name: 'logout'},
                  ];
                  res.redirect('/lider');
            }
        }else{
            res.redirect('/');
        }
    })
    .catch(error => res.status(400).send(error))
});

rutas.get('/registro',(req,res) => {
    models.Rol.findAll({ }).then(roles => {
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
        res.redirect('/torneoespect');
    });
});


module.exports = rutas