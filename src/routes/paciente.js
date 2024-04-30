const express = require("express");
const router = express.Router();
const pool = require("../database");
const bcrypt = require('bcrypt');

const isAdmin = (req, res, next) => {
  // Verificar si el usuario está autenticado y tiene un ID de usuario
  if (!req.user || !req.user.id) {
      return res.status(403).send('Acceso denegado');
  }

  const userId = req.user.id;

  // Realizar una consulta a la base de datos para obtener el campo isadmin del usuario
  pool.query('SELECT isAdmin FROM users WHERE id = ?', [userId], (err, results) => {
      if (err) {
          console.error('Error al verificar permisos de administrador:', err);
          return res.status(500).send('Error interno del servidor');
      }

      // Verificar si se encontraron resultados
      if (results.length === 0) {
          return res.status(404).send('Usuario no encontrado');
      }

      // Verificar si el usuario tiene permisos de administrador (isadmin = true)
      if (results[0].isAdmin === 1) {
          // Si el usuario tiene permisos de administrador, permitir el acceso a la ruta
          next();
      } else {
          // Si el usuario no tiene permisos de administrador, enviar una respuesta de error
          res.status(403).send('No tienes permiso para acceder a esta ruta');
      }
  });
};


///////// RUTAS DE LA TABLA PACIENTES ////////////////////////////////
// Ruta para obtener todos 'Pacientes'
router.get("/pacientes", (req, res) => {
    // Realizar una consulta a la base de datos para obtener todos los usuarios
    pool.query("SELECT * FROM paciente", (err, resultados) => {
      if (err) {
        console.error("Error al obtener usuarios:", err);
        res.status(500).send("Error interno del servidor");
        return;
      }
      // Enviar los resultados como respuesta en formato JSON
      res.json(resultados);
    });
  });
  
  //Ruta para obterner 1 paciente
  router.get("/pacientes/:id", (req, res) => {
    const pacienteId = req.params.id;
  
    // Realizar una consulta a la base de datos para obtener el paciente por su ID
    pool.query("SELECT * FROM paciente WHERE id = ?", pacienteId, (err, resultados) => {
      if (err) {
        console.error("Error al obtener paciente:", err);
        res.status(500).send("Error interno del servidor");
        return;
      }
  
      // Verificar si se encontró un paciente con el ID proporcionado
      if (resultados.length === 0) {
        res.status(404).send("Paciente no encontrado");
        return;
      }
  
      // Enviar el resultado como respuesta en formato JSON
      res.json(resultados[0]);
    });
  });
  
  // Ruta para listar todos los pacientes con campos específicos
  router.get("/pacientes-campos-especificos", (req, res) => {
    // Consulta SQL para obtener los campos específicos
    const sqlQuery = "SELECT nombre, nombre_de_la_madre, municipio, provincia, fecha, diagnostico_egreso FROM paciente";
  
    // Ejecutar la consulta en la base de datos
    pool.query(sqlQuery, (err, resultados) => {
      if (err) {
        console.error("Error al obtener pacientes:", err);
        res.status(500).send("Error interno del servidor");
        return;
      }
  
      // Enviar los resultados como respuesta en formato JSON
      res.json(resultados);
    });
  });
  
  // Ruta para agregar pacientes (requiere permisos de administrador)
router.post("/pacientes", isAdmin, (req, res) => {
  // Obtener los datos del cuerpo de la solicitud
  const nuevoPaciente = req.body;

  // Insertar el nuevo paciente en la base de datos
  pool.query("INSERT INTO paciente SET ?", nuevoPaciente, (err, result) => {
      if (err) {
          console.error("Error al agregar paciente:", err);
          res.status(500).send("Error interno del servidor");
          return;
      }
      res.status(201).send("Paciente agregado correctamente");
  });
});

// Ruta para actualizar un paciente (requiere permisos de administrador)
router.put("/pacientes/:id", isAdmin, (req, res) => {
  const pacienteId = req.params.id;
  const pacienteActualizado = req.body;
  // Actualizar el paciente en la base de datos
  pool.query(
      "UPDATE paciente SET ? WHERE id = ?",
      [pacienteActualizado, pacienteId],
      (err, result) => {
          if (err) {
              console.error("Error al actualizar paciente:", err);
              res.status(500).send("Error interno del servidor");
              return;
          }
          if (result.affectedRows === 0) {
              res.status(404).send("Paciente no encontrado");
              return;
          }
          res.status(200).send("Paciente actualizado correctamente");
      }
  );
});

// Ruta para eliminar un paciente (requiere permisos de administrador)
router.delete("/pacientes/:id", isAdmin, (req, res) => {
  const pacienteId = req.params.id;
  // Realizar una consulta a la base de datos para eliminar el paciente por su ID
  pool.query("DELETE FROM paciente WHERE id = ?", pacienteId, (err, result) => {
      if (err) {
          console.error("Error al eliminar paciente:", err);
          res.status(500).send("Error interno del servidor");
          return;
      }
      // Verificar si se eliminó correctamente el paciente
      if (result.affectedRows === 0) {
          res.status(404).send("Paciente no encontrado");
          return;
      }
      // Enviar una respuesta indicando que el paciente fue eliminado correctamente
      res.status(200).send("Paciente eliminado correctamente");
  });
});


  module.exports = router;