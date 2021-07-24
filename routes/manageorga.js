const express = require("express")
const bodyParser = require("body-parser")

const rutas = express.Router()

const Sequelize = require('sequelize')
const models = require('../models')
const usuario = models.Torneo

const {Op} = require("sequelize")

// Multer
const multer = require('multer')
const par = multer()

// Parsing de los datos
rutas.use(express.urlencoded({extended: true}))
rutas.use(express.json())
rutas.use(par.array())

/* Pagina de Inicio */
var LT = []
rutas.get('/', (req, res) => {
    rol.findAll({})
        .then(listaTorneos => {
            LT = listaTorneos
            res.redirect('orga/inicioorga')
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
})

/* Consulta total */
rutas.get('/inicioorga', (req,res) => {
    usuario.findAll({})
        .then(LT => {
            res.render('orga', {ltorneos: LT})
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
})

module.exports = rutas