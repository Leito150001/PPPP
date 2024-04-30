const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const pool = require("../database");
const helpers = require('./helpers');

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const [user] = await pool.query("SELECT * FROM users WHERE username = ?", [username]);
      if (!user) {
        return done(null, false, { message: "Usuario no encontrado" });
      }
      
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return done(null, false, { message: "Contraseña incorrecta" });
      }
      
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id); // Aquí podrías serializar el usuario de forma diferente si fuera necesario
});

passport.deserializeUser(async (id, done) => {
  try {
    const [user] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

router.post('/login', (req, res, next) => {
     passport.authenticate('local', (err, user, info) => {
       if (err) {
         return res.status(500).send('Error interno del servidor');
       }
       if (!user) {
         return res.status(401).send(info.message);
       }
   
       // Si el usuario es administrador, establecer una propiedad isAdmin en el objeto de sesión
       req.session.isAdmin = user.isAdmin; // Suponiendo que isAdmin es un campo booleano en la base de datos
   
       // Si el usuario es administrador, redirigir a una página de administrador, de lo contrario, redirigir a una página normal
       if (req.session.isAdmin) {
         return res.redirect('/home');
       } else {
         return res.redirect('/home');
       }
     })(req, res, next);
   });
   

module.exports = router;
