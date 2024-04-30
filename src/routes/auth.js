const express = require("express");
const router = express.Router();
const pool = require("../database");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Ruta para el login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Buscar el usuario en la base de datos por su nombre de usuario
    pool.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
      if (err) {
        console.error('Error al buscar usuario:', err);
        return res.status(500).send('Error interno del servidor');
      }

      // Verificar si se encontró un usuario con el nombre de usuario proporcionado
      if (results.length === 0) {
        return res.status(404).send('Usuario no encontrado');
      }

      try {
        // Comparar la contraseña proporcionada con la contraseña almacenada en la base de datos
        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          return res.status(401).send('Contraseña incorrecta');
        }

        // Generar un token JWT
        const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1h' });

        // Devolver el token como respuesta
        res.status(200).json({ token });
      } catch (error) {
        console.error('Error al comparar contraseñas:', error);
        res.status(500).send('Error interno del servidor');
      }
    });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).send('Error interno del servidor');
  }
});

module.exports = router;

module.exports = router;