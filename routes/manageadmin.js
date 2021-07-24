const express = require("express")
const bodyParser = require("body-parser")

const rutas = express.Router()

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
var LR = []
rutas.get('/', (req, res) => {
    rol.findAll({})
        .then(listaRoles => {
            LR = listaRoles
            res.redirect('admin/inicioadmin')
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
})

/* Consulta total */
rutas.get('/inicioadmin', (req,res) => {
    usuario.findAll({})
        .then(LU => {
            res.render('admin', {lroles: LR, lusuarios: LU})
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
})

rutas.get('/agregarUsr', (req, res) => {
    res.render('agregarUsuario', {lroles: LR});
})

rutas.post('/agregarUsr', (req, res) => {
    usuario.create({
            nombreCompleto: req.body.nombreCompleto,
            correo: req.body.correo,
            contrasenia: req.body.contrasenia,
            rolId: req.body.rol
        })
        .then(LU => {
            res.redirect('inicioadmin')
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
})

rutas.get('/editarUsr', (req, res) => {
    res.render('editarUsuario');
})

module.exports = rutas