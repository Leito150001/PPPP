-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 01-04-2024 a las 09:16:14
-- Versión del servidor: 8.0.36-0ubuntu0.20.04.1
-- Versión de PHP: 7.4.3-4ubuntu2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `neonatojs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `id` int NOT NULL,
  `nombre` varchar(255) NOT NULL DEFAULT '',
  `apellidos` varchar(255) NOT NULL DEFAULT '',
  `nombre_de_la_madre` varchar(255) NOT NULL DEFAULT '',
  `carnet_identidad_madre` varchar(255) NOT NULL DEFAULT '',
  `direccion` varchar(500) NOT NULL DEFAULT '',
  `telefono` varchar(15) NOT NULL DEFAULT '',
  `municipio` varchar(255) NOT NULL DEFAULT '',
  `provincia` varchar(255) NOT NULL DEFAULT '',
  `diagnostico_ingreso` varchar(1000) NOT NULL DEFAULT '',
  `diagnostico_egreso` varchar(1000) NOT NULL DEFAULT '',
  `alta` varchar(6) NOT NULL DEFAULT '',
  `riesgo` varchar(5) NOT NULL DEFAULT '',
  `genetico` varchar(5) NOT NULL DEFAULT '',
  `precoz` varchar(5) NOT NULL DEFAULT '',
  `numero_control` int NOT NULL DEFAULT '0',
  `diag_prenatal` varchar(5) NOT NULL DEFAULT '',
  `hoja_conf` varchar(5) NOT NULL DEFAULT '',
  `accion_inmediatas` varchar(5) NOT NULL DEFAULT '',
  `cronograma_seg` varchar(5) NOT NULL DEFAULT '',
  `info_maternidad` varchar(5) NOT NULL DEFAULT '',
  `coordinacion_equipo` varchar(5) NOT NULL DEFAULT '',
  `criterio_cirujano` varchar(5) NOT NULL DEFAULT '',
  `presencia_en_salon` varchar(5) NOT NULL DEFAULT '',
  `actuacion_afeccion` varchar(5) NOT NULL DEFAULT '',
  `ginecologo_asig` varchar(5) NOT NULL DEFAULT '',
  `coordinacion_traslado1` varchar(5) NOT NULL DEFAULT '',
  `coincidencia_diag` varchar(5) NOT NULL DEFAULT '',
  `coordinacion_traslado2` varchar(5) NOT NULL DEFAULT '',
  `justific_traslado` varchar(5) NOT NULL DEFAULT '',
  `evaluacion_trasl` varchar(5) NOT NULL DEFAULT '',
  `deficiencias_trasl` varchar(1000) NOT NULL DEFAULT '',
  `interconsult_cirujano` varchar(5) NOT NULL DEFAULT '',
  `interconsult_medica` varchar(5) NOT NULL DEFAULT '',
  `estudios_inter_quirurgica` varchar(5) NOT NULL DEFAULT '',
  `doc_contrarref` varchar(5) NOT NULL DEFAULT '',
  `programa_acciones` varchar(5) NOT NULL DEFAULT '',
  `cronograma_atencion` varchar(5) NOT NULL DEFAULT '',
  `confir_segunda_opinion` varchar(5) NOT NULL DEFAULT '',
  `verificar_equipo_quirurgico` varchar(5) NOT NULL DEFAULT '',
  `verificar_equipo_anestesico` varchar(5) NOT NULL DEFAULT '',
  `clasificacion` varchar(5) NOT NULL DEFAULT '',
  `fecha` datetime NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `evaluacion_atencion_primaria` varchar(15) NOT NULL DEFAULT 'B',
  `evaluacion_regreso_neonato_operado` varchar(15) NOT NULL DEFAULT 'B',
  `evaluacion_hogar_materno` varchar(15) NOT NULL DEFAULT 'B',
  `evaluacion_servicio_neonatologia_provinciales` varchar(15) NOT NULL DEFAULT 'B',
  `evaluacion_servicio_neonatologia_cerecine` varchar(15) NOT NULL DEFAULT 'B',
  `evaluacion_atencion_medica` varchar(15) NOT NULL DEFAULT 'B',
  `evaluacion_equipo_quirurgico` varchar(15) NOT NULL DEFAULT 'B'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`id`, `nombre`, `apellidos`, `nombre_de_la_madre`, `carnet_identidad_madre`, `direccion`, `telefono`, `municipio`, `provincia`, `diagnostico_ingreso`, `diagnostico_egreso`, `alta`, `riesgo`, `genetico`, `precoz`, `numero_control`, `diag_prenatal`, `hoja_conf`, `accion_inmediatas`, `cronograma_seg`, `info_maternidad`, `coordinacion_equipo`, `criterio_cirujano`, `presencia_en_salon`, `actuacion_afeccion`, `ginecologo_asig`, `coordinacion_traslado1`, `coincidencia_diag`, `coordinacion_traslado2`, `justific_traslado`, `evaluacion_trasl`, `deficiencias_trasl`, `interconsult_cirujano`, `interconsult_medica`, `estudios_inter_quirurgica`, `doc_contrarref`, `programa_acciones`, `cronograma_atencion`, `confir_segunda_opinion`, `verificar_equipo_quirurgico`, `verificar_equipo_anestesico`, `clasificacion`, `fecha`, `updated_at`, `evaluacion_atencion_primaria`, `evaluacion_regreso_neonato_operado`, `evaluacion_hogar_materno`, `evaluacion_servicio_neonatologia_provinciales`, `evaluacion_servicio_neonatologia_cerecine`, `evaluacion_atencion_medica`, `evaluacion_equipo_quirurgico`) VALUES
(1, 'Pepito', 'Pérez López', 'María López García', '123456789', 'Calle Principal #123', '1234567890', 'Ciudad de México', 'Ciudad de México', 'Neumonía', 'Recuperación completa', 'Sí', 'No', 'No', 'No', 1001, 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Ninguna', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'A', '2024-03-28 12:00:00', '2024-03-27 11:30:56', 'Aprobado', 'Aprobado', 'Aprobado', 'Aprobado', 'Aprobado', 'Aprobado', 'Aprobado'),
(2, 'María', 'González Sánchez', 'Luisa Sánchez Hernández', '987654321', 'Avenida Revolución #456', '9876543210', 'Guadalajara', 'Jalisco', 'Bronquitis', 'Recuperación en curso', 'No', 'Sí', 'No', 'Sí', 1002, 'No', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Ninguna', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'B', '2024-04-02 12:00:00', '2024-03-27 11:40:14', 'Aceptable', 'Aceptable', 'Aceptable', 'Aceptable', 'Aceptable', 'Aceptable', 'Aceptable'),
(3, 'Carlos', 'Martínez García', 'Ana García Sánchez', '654321987', 'Calle Flores #789', '6547893210', 'Monterrey', 'Nuevo León', 'Apendicitis', 'Recuperación completa', 'Sí', 'No', 'Sí', 'No', 1003, 'No', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Ninguna', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'A', '2024-04-03 12:00:00', '2024-03-27 11:40:58', 'Aprobado', 'Aprobado', 'Aprobado', 'Aprobado', 'Aprobado', 'Aprobado', 'Aprobado'),
(4, 'Ana', 'Hernández López', 'Carmen López García', '987654321', 'Avenida Juárez #456', '7894561230', 'Puebla', 'Puebla', 'Dolor abdominal', 'Recuperación en curso', 'No', 'Sí', 'No', 'Sí', 1004, 'No', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Ninguna', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'B', '2024-04-04 12:00:00', '2024-03-27 11:41:23', 'Aceptable', 'Aceptable', 'Aceptable', 'Aceptable', 'Aceptable', 'Aceptable', 'Aceptable');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `username` varchar(15) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `isAdmin` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `fullname`, `username`, `email`, `password`, `isAdmin`) VALUES
(2, 'Admin Perez', 'admin', 'admin@gmail.com', '$2b$10$507b6zrhILFujZkEAwiTF.JHohrrnmd1HDQvpLik.L6bD2c1nx6L2', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
