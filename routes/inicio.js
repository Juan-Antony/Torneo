const express = require("express")
const bodyParser = require("body-parser")

const rutas = express.Router()

const Sequelize = require('sequelize')
const models = require('../models')
const torneo = models.Torneo

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
    torneo.findAll({})
        .then(listaTorneos => {
            LT = listaTorneos
            res.redirect('inicio')
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
})

/* Consulta total */
rutas.get('/inicio', (req,res) => {
    torneo.findAll({})
        .then(LT => {
            res.render('torneoespect', {ltorneos: LT})
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
})



module.exports = rutas