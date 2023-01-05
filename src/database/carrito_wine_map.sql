-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 05-01-2023 a las 14:25:48
-- Versión del servidor: 8.0.27
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `carrito_wine_map`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admins`
--

DROP TABLE IF EXISTS `admins`;
CREATE TABLE IF NOT EXISTS `admins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `admins`
--

INSERT INTO `admins` (`id`, `usuario`, `contrasena`, `createdAt`, `updatedAt`) VALUES
(1, 'AdministratorCWM', 'latopa22', '2023-01-05 14:12:36', '2023-01-05 14:12:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `producto` varchar(255) DEFAULT NULL,
  `precio` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `destacado` tinyint(1) NOT NULL DEFAULT '0',
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `producto`, `precio`, `foto`, `destacado`, `activo`, `createdAt`, `updatedAt`) VALUES
(1, 'Adentro Gran Nevado', '7200', '316-adentro-gran-nevado.jpg', 1, 1, '2022-11-28 14:26:47', '2022-11-28 14:26:47'),
(2, 'Adentro Malbec', '6500', '313-adentro-malbec.jpg', 1, 1, '2022-11-28 14:26:47', '2022-11-28 14:26:47'),
(3, 'Adentro Merlot', '5700', '314-adentro-merlot.jpg', 1, 1, '2022-11-28 14:26:47', '2022-11-28 14:26:47'),
(4, 'Adentro Torrontés', '6000', '315-adentro-torrontes.jpg', 1, 1, '2022-11-28 14:26:47', '2022-11-28 14:26:47'),
(5, 'Aitana', '8000', '66-aitana.jpg', 0, 1, '2022-11-28 14:26:47', '2022-12-27 20:38:08'),
(6, 'Altimus MMVIII', '3500', '1-mmviii.jpg', 1, 1, '2022-11-28 14:26:47', '2022-11-28 14:26:47'),
(7, 'Altura Maxima', '3000', '43-altura-maxima.jpg', 1, 1, '2022-11-28 14:26:47', '2022-11-28 14:26:47'),
(8, 'El Esteco Cabernet Suavignon', '2700', '9-chaniar-punco.jpg', 1, 1, '2022-11-28 14:26:47', '2022-11-28 14:26:47'),
(9, 'Laborum Cabernet Sauvignon', '4500', '106-laborum-cabernet-sauvignon.jpg', 0, 0, '2022-11-28 14:26:47', '2022-12-17 00:46:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20221115144359-create-usuario.js'),
('20221127223632-create-producto.js'),
('20221128135137-create-producto.js'),
('20221228183701-create-admin.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_completo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `contrasena` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre_completo`, `contrasena`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'Lautaro', '$2b$12$jQzzrmTyMrg8ZmwfEfaXAO8hTN6iULaC/6iPa.rXNUJcqga.f509C', 'papairus925@gmail.com', '2022-12-06 22:00:06', '2022-12-06 22:00:06'),
(2, 'Lautaro Pairuna', '$2b$12$g5JOVrPdn4dHI2bOEink0eu0xnofsxmqKNdxfMPjXyGh/bpI46U3q', 'lautaropairuna@gmail.com', '2022-12-07 02:10:51', '2022-12-07 02:10:51'),
(3, 'dasdas', '$2b$12$qpf8Ub9dFEBx0L7OQ5jyheZELAkYOYe9Vh6eLQ6KvdKFuNBqRCUDG', 'dasdas@gmail.com', '2022-12-29 21:31:02', '2022-12-29 21:31:02');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
