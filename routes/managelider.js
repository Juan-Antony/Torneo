const express = require("express")
const bodyParser = require("body-parser")

const rutas = express.Router()

const Sequelize = require('sequelize')
const models = require('../models')
const torneo = models.Torneo
const usuario = models.Usuario

const {Op} = require("sequelize")

// Multer
const multer = require('multer')
const par = multer()

// Parsing de los datos
rutas.use(express.urlencoded({extended: true}))
rutas.use(express.json())
rutas.use(par.array())

/* Pagina de Inicio */
var LU = []
rutas.get('/', (req, res) => {
    usuario.findAll({})
        .then(listaUsuarios => {
            LU = listaUsuarios
            res.redirect('lider/iniciolider')
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
})

/* Consulta total */
rutas.get('/iniciolider', (req,res) => {
    usuario.findAll({})
        .then(LU => {
            res.render('lider', {lusuarios: LU})
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
})

module.exports = rutas