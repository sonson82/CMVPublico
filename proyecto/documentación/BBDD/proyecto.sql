-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Temps de generació: 10-06-2021 a les 11:14:26
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
-- Base de dades: `proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `has_tag`
--

CREATE TABLE `has_tag` (
  `tool` int(11) NOT NULL,
  `tag` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Bolcament de dades per a la taula `has_tag`
--

INSERT INTO `has_tag` (`tool`, `tag`) VALUES
(1, 1),
(1, 3),
(2, 1),
(2, 4),
(3, 1),
(3, 6),
(4, 1),
(4, 3),
(4, 6),
(5, 1),
(5, 8),
(6, 2),
(6, 5),
(7, 1),
(7, 5),
(8, 1),
(8, 6),
(9, 1),
(9, 6),
(10, 2),
(10, 10),
(11, 1),
(11, 2),
(11, 11),
(12, 2),
(12, 5),
(13, 1),
(13, 6),
(14, 1),
(14, 3),
(14, 7),
(15, 1),
(15, 5),
(16, 1),
(16, 8),
(17, 1),
(17, 2),
(17, 4),
(18, 1),
(18, 6),
(19, 1),
(19, 3),
(19, 7),
(20, 1),
(20, 9),
(21, 2),
(21, 10),
(21, 12),
(22, 13),
(23, 15),
(24, 15),
(25, 1),
(25, 14);

-- --------------------------------------------------------

--
-- Estructura de la taula `has_url`
--

CREATE TABLE `has_url` (
  `url` varchar(180) NOT NULL,
  `tool` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Bolcament de dades per a la taula `has_url`
--

INSERT INTO `has_url` (`url`, `tool`, `type`, `name`) VALUES
('http://www.cynthiasays.com/home.aspx?', 25, 3, 'Accessibility Scans'),
('http://www.seomastering.com/', 20, 3, 'SEO Audit'),
('https://caniuse.com/', 1, 3, 'Browsers (Can I use?)'),
('https://code.visualstudio.com/', 23, 1, 'Página Oficial'),
('https://codebeautify.org/xmlvalidator', 17, 3, 'CodeBeauti Validator'),
('https://css-tricks.com/snippets/css/a-guide-to-flexbox/', 1, 2, 'FlexBox'),
('https://devcode.la/tutoriales/manejo-de-arrays-en-javascript/', 7, 2, 'Manejo de Arrays'),
('https://developer.mozilla.org/en-US/docs/Web/API/XMLDocument', 17, 2, 'MDN Web Docs'),
('https://developer.mozilla.org/es/docs/Web/CSS', 1, 2, 'MDN Web Docs'),
('https://developer.mozilla.org/es/docs/Web/HTML', 2, 2, 'MDN Web Docs'),
('https://developer.mozilla.org/es/docs/Web/JavaScript/Guide', 7, 2, 'MDN Web Docs'),
('https://es.reactjs.org/', 13, 1, 'Página Oficial'),
('https://expressjs.com/', 18, 1, 'Página Oficial'),
('https://fonts.google.com/', 1, 2, 'Google Fonts'),
('https://getbootstrap.com/', 4, 1, 'Página Oficial'),
('https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Configurando-Git-por-primera-vez', 22, 2, 'Configuración'),
('https://github.com/', 22, 1, 'Página Oficial'),
('https://jigsaw.w3.org/css-validator/', 1, 3, 'W3C Validation Service'),
('https://jqueryui.com/', 8, 1, 'Página Oficial'),
('https://lesscss.org/', 19, 1, 'Página Oficial'),
('https://material-ui.com/es/', 9, 1, 'Página Oficial'),
('https://romualdfons.com/tutorial-wordpress/', 16, 2, 'De 0 a 100'),
('https://sass-lang.com', 14, 1, 'Pagina Oficial'),
('https://search.google.com/search-console/about?hl=es', 20, 3, 'Google Analalysis'),
('https://tecnops.es/patrones-de-diseno-y-ejemplos-de-uso-en-javascript/', 7, 2, 'Patrones de Diseño'),
('https://tutorial-drupal.com/', 5, 2, 'Blog'),
('https://wordpress.com/es/', 16, 1, 'Página Oficial'),
('https://www.apachefriends.org/index.html', 21, 1, 'Página Oficial'),
('https://www.drupal.org/', 5, 1, 'Página Oficial'),
('https://www.drupal.org/docs/user_guide/en/index.html', 5, 2, 'Documentación'),
('https://www.eclipse.org/downloads/', 24, 1, 'Página Oficial'),
('https://www.java.com/es/', 6, 1, 'Página Oficial'),
('https://www.learn-html.org/', 2, 2, 'Learn'),
('https://www.learn-js.org/', 7, 2, 'Learn'),
('https://www.learn-php.org/', 12, 2, 'Learn'),
('https://www.learnjavaonline.org/', 6, 2, 'Learn'),
('https://www.tawdis.net/index', 25, 3, 'Test de accesibilidad'),
('https://www.tutorialesprogramacionya.com/cssya/bootstrapya/', 4, 2, 'Boostrap YA'),
('https://www.tutorialesprogramacionya.com/cssya/css3ya/', 1, 2, 'CSS3 YA '),
('https://www.tutorialesprogramacionya.com/cssya/index.php?inicio=10', 1, 2, 'CSS YA'),
('https://www.tutorialesprogramacionya.com/htmlya/html5/index.php?inicio=0', 2, 2, 'HTML5 YA'),
('https://www.typescriptlang.org/', 15, 1, 'Página Oficial'),
('https://www.usableyaccesible.com/recurso_misvalidadores.php#accesibilidadwcag2', 25, 3, 'Guia de validadores'),
('https://www.w3.org/WAI/standards-guidelines/wcag/', 25, 3, 'Accessibility Guidelines (WCAG)'),
('https://www.w3schools.com/angular/default.asp', 3, 2, 'W3Schools'),
('https://www.w3schools.com/bootstrap/default.asp', 4, 2, 'W3Schools B3'),
('https://www.w3schools.com/bootstrap4/default.asp', 4, 2, 'W3Schools B4'),
('https://www.w3schools.com/colors/colors_picker.asp', 1, 2, 'Color Picker'),
('https://www.w3schools.com/css/default.asp', 1, 2, 'W3Schools'),
('https://www.w3schools.com/html/default.asp', 2, 2, 'W3Schools'),
('https://www.w3schools.com/java/default.asp', 6, 2, 'W3Schools'),
('https://www.w3schools.com/jquery/default.asp', 8, 2, 'W3Schools'),
('https://www.w3schools.com/js/default.asp', 7, 2, 'W3Schools'),
('https://www.w3schools.com/mysql/default.asp', 10, 2, 'W3Schools'),
('https://www.w3schools.com/nodejs/default.asp', 11, 2, 'W3Schools'),
('https://www.w3schools.com/php/default.asp', 12, 2, 'W3Schools'),
('https://www.w3schools.com/react/default.asp', 13, 2, 'W3Schools'),
('https://www.w3schools.com/xml/default.asp', 17, 2, 'W3Schools'),
('https://www.xml-sitemaps.com/', 17, 3, 'Sitemap XML Creator');

-- --------------------------------------------------------

--
-- Estructura de la taula `tag_type`
--

CREATE TABLE `tag_type` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Bolcament de dades per a la taula `tag_type`
--

INSERT INTO `tag_type` (`id`, `name`) VALUES
(1, 'Front-end'),
(2, 'Back-end'),
(3, 'Estilos'),
(4, 'Lenguaje de marcas'),
(5, 'Lenguaje de programación'),
(6, 'Libreria'),
(7, 'Preprocesador'),
(8, 'CMS'),
(9, 'Marketing'),
(10, 'Base de datos'),
(11, 'Entorno de ejecución'),
(12, 'Servidor'),
(13, 'Control de Versiones'),
(14, 'Usabilidad'),
(15, 'Entorno de desarrollo');

-- --------------------------------------------------------

--
-- Estructura de la taula `tool`
--

CREATE TABLE `tool` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `png` varchar(180) NOT NULL,
  `webp` varchar(180) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Bolcament de dades per a la taula `tool`
--

INSERT INTO `tool` (`id`, `name`, `png`, `webp`) VALUES
(1, 'CSS', 'https://sonson82.github.io/CMVPublico/proyecto/logo/css.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/css.webp'),
(2, 'HTML', 'https://sonson82.github.io/CMVPublico/proyecto/logo/html.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/html.webp'),
(3, 'ANGULAR', 'https://sonson82.github.io/CMVPublico/proyecto/logo/angular.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/angular.webp'),
(4, 'BOOTSTRAP', 'https://sonson82.github.io/CMVPublico/proyecto/logo/bootstrap.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/bootstrap.webp'),
(5, 'DRUPAL', 'https://sonson82.github.io/CMVPublico/proyecto/logo/drupal.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/drupal.webp'),
(6, 'JAVA', 'https://sonson82.github.io/CMVPublico/proyecto/logo/java.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/java.webp'),
(7, 'JAVASCRIPT', 'https://sonson82.github.io/CMVPublico/proyecto/logo/javascript.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/javascript.webp'),
(8, 'JQUERY', 'https://sonson82.github.io/CMVPublico/proyecto/logo/jquery.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/jquery.webp'),
(9, 'MATERIAL UI', 'https://sonson82.github.io/CMVPublico/proyecto/logo/material-ui.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/material-ui.webp'),
(10, 'MySQL', 'https://sonson82.github.io/CMVPublico/proyecto/logo/mysql.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/mysql.webp'),
(11, 'NODE.JS', 'https://sonson82.github.io/CMVPublico/proyecto/logo/nodejs.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/nodejs.webp'),
(12, 'PHP', 'https://sonson82.github.io/CMVPublico/proyecto/logo/php.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/php.webp'),
(13, 'REACTJS', 'https://sonson82.github.io/CMVPublico/proyecto/logo/react.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/react.webp'),
(14, 'SASS', 'https://sonson82.github.io/CMVPublico/proyecto/logo/sass.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/sass.webp'),
(15, 'TYPESCRIPT', 'https://sonson82.github.io/CMVPublico/proyecto/logo/typescript.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/typescript.webp'),
(16, 'WORDPRESS', 'https://sonson82.github.io/CMVPublico/proyecto/logo/wordpress.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/wordpress.webp'),
(17, 'XML', 'https://sonson82.github.io/CMVPublico/proyecto/logo/xml.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/xml.webp'),
(18, 'EXPRESS', 'https://sonson82.github.io/CMVPublico/proyecto/logo/express.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/express.png'),
(19, 'LESS', 'https://sonson82.github.io/CMVPublico/proyecto/logo/less.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/less.png'),
(20, 'SEO/SEM', 'https://sonson82.github.io/CMVPublico/proyecto/logo/seo.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/seo.png'),
(21, 'XAMPP', 'https://sonson82.github.io/CMVPublico/proyecto/logo/xampp.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/xampp.web'),
(22, 'GITHUB', 'https://sonson82.github.io/CMVPublico/proyecto/logo/github.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/github.web'),
(23, 'VS CODE', 'https://sonson82.github.io/CMVPublico/proyecto/logo/vscode.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/vscode.web'),
(24, 'ECLIPSE', 'https://sonson82.github.io/CMVPublico/proyecto/logo/eclipse.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/eclipse.web'),
(25, 'UX/UI', 'https://sonson82.github.io/CMVPublico/proyecto/logo/ux-ui.png', 'https://sonson82.github.io/CMVPublico/proyecto/logo/ux-ui.web');

-- --------------------------------------------------------

--
-- Estructura de la taula `url_type`
--

CREATE TABLE `url_type` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Bolcament de dades per a la taula `url_type`
--

INSERT INTO `url_type` (`id`, `name`) VALUES
(1, 'Oficial'),
(2, 'Tutorial'),
(3, 'Análisis');

--
-- Índexs per a les taules bolcades
--

--
-- Índexs per a la taula `has_tag`
--
ALTER TABLE `has_tag`
  ADD PRIMARY KEY (`tool`,`tag`);

--
-- Índexs per a la taula `has_url`
--
ALTER TABLE `has_url`
  ADD PRIMARY KEY (`url`);

--
-- Índexs per a la taula `tag_type`
--
ALTER TABLE `tag_type`
  ADD PRIMARY KEY (`id`);

--
-- Índexs per a la taula `tool`
--
ALTER TABLE `tool`
  ADD PRIMARY KEY (`id`);

--
-- Índexs per a la taula `url_type`
--
ALTER TABLE `url_type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `tag_type`
--
ALTER TABLE `tag_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT per la taula `tool`
--
ALTER TABLE `tool`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT per la taula `url_type`
--
ALTER TABLE `url_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
