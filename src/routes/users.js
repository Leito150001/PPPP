const express = require("express");
const router = express.Router();
const pool = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Obtener el token del encabezado de autorización
  const token = req.headers["authorization"];

  // Verificar si el token existe
  if (!token) {
    return res.status(401).send("No se proporcionó un token de acceso");
  }

  // Verificar y decodificar el token
  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      console.error("Error al verificar el token:", err);
      return res.status(403).send("Token no válido");
    }

    // Agregar la información del usuario decodificado al objeto req
    req.user = decoded;

    // Continuar con el siguiente middleware
    next();
  });
};

const isAdmin = (req, res, next) => {
  // Verificar si el usuario está autenticado y tiene un ID de usuario
  if (!req.user || !req.user.id) {
    return res.status(403).send("Acceso denegado");
  }

  const userId = req.username.id;

  // Realizar una consulta a la base de datos para obtener el campo isAdmin del usuario
  pool.query(
    "SELECT isAdmin FROM users WHERE id = ?",
    [userId],
    (err, results) => {
      if (err) {
        console.error("Error al verificar permisos de administrador:", err);
        return res.status(500).send("Error interno del servidor");
      }

      // Verificar si se encontraron resultados
      if (results.length === 0) {
        return res.status(404).send("Usuario no encontrado");
      }

      // Interpretar el valor de isAdmin como un booleano
      const isAdmin = results[0].isAdmin !== 0; // Si isAdmin no es 0, será true; de lo contrario, será false

      // Verificar si el usuario tiene permisos de administrador (isAdmin = true)
      if (isAdmin) {
        // Si el usuario tiene permisos de administrador, permitir el acceso a la ruta
        next();
      } else {
        // Si el usuario no tiene permisos de administrador, enviar una respuesta de error
        res.status(403).send("No tienes permiso para acceder a esta ruta");
      }
    }
  );
};

/////// RUTAS DE LA TABLA USERS /////////////
// Ruta para obtener todos los usuarios sin la contraseña y el username
router.get("/users", verifyToken, isAdmin, (req, res) => {
  pool.query("SELECT fullname, email, isadmin FROM users", (err, results) => {
    if (err) {
      console.error("Error al obtener usuarios:", err);
      res.status(500).send("Error interno del servidor");
      return;
    }
    res.json(results);
  });
});

// Ruta para crear un nuevo usuario
router.post("/users", async (req, res) => {
  try {
    const { fullname, username, email, password, isadmin } = req.body;

    // Generar un hash para la contraseña
    const hashedPassword = await bcrypt.hash(password, 10); // Costo de hash 10

    // Crear un objeto con los campos del nuevo usuario
    const newUser = {
      fullname,
      username,
      email,
      password: hashedPassword, // Se guarda la contraseña hasheada
      isadmin,
    };

    // Insertar el nuevo usuario en la base de datos
    pool.query("INSERT INTO users SET ?", newUser, (err, result) => {
      if (err) {
        console.error("Error al agregar usuario:", err);
        res.status(500).send("Error interno del servidor");
        return;
      }
      res.status(201).send("Usuario agregado correctamente");
    });
  } catch (error) {
    console.error("Error al encriptar la contraseña:", error);
    res.status(500).send("Error interno del servidor");
  }
});

// Ruta para eliminar un usuario por su ID
router.delete("/users/:id", (req, res) => {
  const userId = req.params.id;

  pool.query("DELETE FROM users WHERE id = ?", userId, (err, result) => {
    if (err) {
      console.error("Error al eliminar usuario:", err);
      res.status(500).send("Error interno del servidor");
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send("Usuario no encontrado");
      return;
    }
    res.status(200).send("Usuario eliminado correctamente");
  });
});

module.exports = router;
