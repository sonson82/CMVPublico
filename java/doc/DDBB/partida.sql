-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Temps de generació: 07-06-2021 a les 17:58:30
-- Versió del servidor: 10.4.18-MariaDB
-- Versió de PHP: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `zork`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `partida`
--

CREATE TABLE `partida` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `hora_inicio` datetime NOT NULL,
  `cambios_casilla` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Bolcament de dades per a la taula `partida`
--

INSERT INTO `partida` (`id`, `nombre`, `hora_inicio`, `cambios_casilla`) VALUES
(1, 'sonia', '2021-06-07 17:52:05', 32),
(2, 'sonia', '2021-06-07 17:54:22', 5),
(3, 'sonia', '2021-06-07 17:54:44', 1),
(4, 'sonia', '2021-06-07 17:55:36', 6);

--
-- Índexs per a les taules bolcades
--

--
-- Índexs per a la taula `partida`
--
ALTER TABLE `partida`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `partida`
--
ALTER TABLE `partida`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
