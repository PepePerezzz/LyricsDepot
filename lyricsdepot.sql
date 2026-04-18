-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-04-2026 a las 01:09:46
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lyricsdepot`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canciones`
--

CREATE TABLE `canciones` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `artista` varchar(50) NOT NULL,
  `albun` varchar(50) NOT NULL,
  `fecha` varchar(50) NOT NULL,
  `letra` text NOT NULL,
  `likes` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `canciones`
--

INSERT INTO `canciones` (`id`, `titulo`, `artista`, `albun`, `fecha`, `letra`, `likes`) VALUES
(2, 'Shape of You', 'Ed Sheeran', '÷ (Divide)', '2017-01-06', 'hay mama como estas', 11),
(3, 'Believer', 'Imagine Dragons', 'Evolve', '2017-02-01', '...', 0),
(4, 'Hello', 'Adele', '25', '2015-10-23', 'Hello from the other side...', 0),
(5, 'Hello', 'Lionel Richie', 'Can\'t Slow Down', '1984-10-01', 'Hello, is it me you\'re looking for?', 6),
(6, 'Stay', 'The Kid LAROI', 'F*CK LOVE 3', '2021-07-09', 'I do the same thing I told you that I never would...', 0),
(7, 'Stay', 'Rihanna', 'Unapologetic', '2012-01-27', 'Not really sure how to feel about it...', 0),
(8, 'Blinding Lights', 'The Weeknd', 'After Hours', '2019-11-29', 'I said, ooh, I\'m blinded by the lights...', 0),
(9, 'Let It Be', 'The Beatles', 'Let It Be', '1970-03-06', 'When I find myself in times of trouble...', 0),
(10, 'Numb', 'Linkin Park', 'Meteora', '2003-03-25', 'I\'m tired of being what you want me to be...', 0),
(11, 'Hello', 'Adele (Live at Royal Albert Hall)', 'Live Performance', '2016-11-25', 'Hello, it\'s me...', 0),
(12, 'Smells Like Teen Spirit', 'Nirvana', 'Nevermind', '1991-09-10', 'With the lights out, it\'s less dangerous...', 0),
(13, 'Hello', 'Ariana Grande', 'Dangerous Woman Sessions', '2016-05-20', 'Hello, can you hear me...', 0),
(14, 'Bohemian Rhapsody', 'Queen', 'A Night at the Opera', '1975-10-31', 'Is this the real life? Is this just fantasy?', 0),
(15, 'Skyfall', 'Adele', 'Skyfall', '2012-10-05', 'This is the end, hold your breath and count to ten...', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `correo` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `contrasena`, `correo`) VALUES
(1, 'Daniel', '1234', 'daniel@test.com'),
(13, 'hola', '@1213', '1231231312@@@');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `canciones`
--
ALTER TABLE `canciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `canciones`
--
ALTER TABLE `canciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
