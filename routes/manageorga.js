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
            res.redirect('orga/inicioorga')
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
})

/* Consulta total */
rutas.get('/inicioorga', (req,res) => {
    torneo.findAll({})
        .then(LT => {
            res.render('orga', {ltorneos: LT})
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
})

rutas.get('/agregarTrn', (req, res) => {
    res.render('agregarTorneo', {ltorneos: LT});
})

rutas.post('/agregarTrn', (req, res) => {
    torneo.create({
            nombreTorneo: req.body.nombreTorneo,
            descripcion: req.body.descripcion,
            fechaInicio: req.body.fechaInicio,
            fechafin: req.body.fechafin,
            numMaxEquipos: req.body.numMaxEquipos
        })
        .then(LT => {
            res.redirect('orga/inicioorga')
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error)
        })
})

module.exports = rutas