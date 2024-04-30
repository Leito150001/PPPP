const express = require("express");
const router = express.Router();
const pool = require("../database");
const bcrypt = require('bcrypt');


const usersRouter = require('./users');
const authRouter = require('./auth');
const pacienteRouter = require('./paciente')


// Usar las rutas importadas
router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/paciente',pacienteRouter)

// Ruta para la página de inicio
router.get("/home", (req, res) => {
  res.render("links/home.ejs");
});

// Ruta para la página 'contact'
router.get("/controlUser", (req, res) => {
  res.send("Control de usuarios");
});

module.exports = router;
