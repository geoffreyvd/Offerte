-- phpMyAdmin SQL Dump
-- version 4.3.0
-- http://www.phpmyadmin.net
--
-- Machine: localhost
-- Gegenereerd op: 22 mei 2015 om 13:17
-- Serverversie: 5.5.41-MariaDB
-- PHP-versie: 5.5.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databank: `offerte_systeem`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `klanten`
--

CREATE TABLE IF NOT EXISTS `klanten` (
`Clientnr` int(4) NOT NULL,
  `Contact` varchar(40) NOT NULL,
  `Company` varchar(100) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Zipcode` varchar(8) NOT NULL,
  `City` varchar(30) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `klanten`
--

INSERT INTO `klanten` (`Clientnr`, `Contact`, `Company`, `Address`, `Zipcode`, `City`) VALUES
(1, 'Geoffrey van Driessel', 'Geoffrey B.V.', 'Straat 40', '2031 ET', 'HAARLEM'),
(2, 'company2', 'contact2', 'ergens in nederland', 'postcode', 'HAARLEM');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `offertes`
--

CREATE TABLE IF NOT EXISTS `offertes` (
`OfferteID` int(5) NOT NULL,
  `OfferteNaam` varchar(30) NOT NULL,
  `OfferteOmschrijving` text NOT NULL,
  `OfferteDatum` date NOT NULL,
  `KlantID` int(4) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `offertes`
--

INSERT INTO `offertes` (`OfferteID`, `OfferteNaam`, `OfferteOmschrijving`, `OfferteDatum`, `KlantID`) VALUES
(22, 'Offerte systeem', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.', '2015-05-12', 3),
(23, 'Offerte systeem', 'omschrijving job offerte', '2015-05-12', 3),
(24, 'Offerte systeem', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.fsdff', '2015-05-12', 3),
(25, 'Offerte systeem', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SgdfgfdgfdgdfEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.', '2015-05-12', 3),
(26, 'Offerte systeem', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.', '2015-05-12', 3),
(27, 'job offerte', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.', '2015-05-12', 3),
(28, 'Offerte systeem', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.', '2015-05-12', 3),
(29, 'Offerte systeem', 'Mobiel', '2015-05-12', 3),
(30, 'Offerte systeem', 'Mobiel', '2015-05-12', 3),
(31, 'mobieltitel', 'Mobiel', '2015-05-12', 3),
(32, 'mobieltitel', 'Mobiel', '2015-05-12', 3),
(33, 'Offerte systeem', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.', '2015-05-12', 3),
(34, 'Offerte systeem', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.', '2015-05-12', 3),
(35, 'Offerte systeem', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.', '2015-05-12', 3),
(36, 'Offerte systeem', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.', '2015-05-12', 3),
(37, 'Offerte systeem', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.', '2015-05-12', 3),
(38, 'Offerte systeem', '', '2015-05-12', 3),
(39, 'Offerte systeem', '', '2015-05-12', 3),
(40, 'Offerte systeem', '', '2015-05-12', 3),
(41, '', '', '2015-05-13', 0),
(42, 'gdfgd', 'gfdgdfgd', '2015-05-13', 0),
(43, 'fsdfs', 'xbvbvccv', '2015-05-13', 0),
(44, 'Offerte100', 'fdssdfs', '2015-05-15', 0),
(45, 'Offerte systeem', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SgdfgfdgfdgdfEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.', '2015-05-15', 3),
(46, 'Offerte systeem2', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SgdfgfdgfdgdfEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.', '2015-05-15', 3),
(47, 'job dekker offerte', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.', '2015-05-15', 3),
(48, 'job dekker offerte2', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.', '2015-05-15', 3),
(49, 'job offerte2', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.', '2015-05-15', 3),
(50, 'Offerte systeem1', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.', '2015-05-15', 3),
(51, '', '', '2015-05-18', 0),
(52, '', '', '2015-05-18', 0),
(53, '', '', '2015-05-18', 0),
(54, 'Offerte sst2eem', 'De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.fsdff', '2015-05-18', 3),
(55, '', '', '2015-05-18', 0),
(56, 'test100', 'test omschrijving', '2015-05-18', 3),
(57, 'test100', 'test omschrijving', '2015-05-18', 3),
(58, 'test100', 'test omschrijving', '2015-05-18', 3),
(59, 'test100', 'test omschrijving', '2015-05-18', 30),
(60, 'test100', 'test omschrijving', '2015-05-18', 32),
(61, 'testdinsdag', 'testdinsdag omschrijving', '2015-05-19', 1),
(62, 'testdinsdag', 'testdinsdag omschrijving', '2015-05-19', 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `werkzaamheden`
--

CREATE TABLE IF NOT EXISTS `werkzaamheden` (
`WerkzaamheidID` int(7) NOT NULL,
  `WerkzaamheidTitel` tinytext NOT NULL,
  `WerkzaamheidPrijs` decimal(10,2) NOT NULL,
  `OfferteID` int(5) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `werkzaamheden`
--

INSERT INTO `werkzaamheden` (`WerkzaamheidID`, `WerkzaamheidTitel`, `WerkzaamheidPrijs`, `OfferteID`) VALUES
(79, 'Wordpress Website', '450.00', 22),
(80, 'Wordpress Theme', '50.00', 22),
(81, 'SEO', '80.00', 22),
(82, 'Specifieke wensen', '120.00', 22),
(83, 'werkzaamheidje blabla', '99999.00', 23),
(84, 'werkzaamheidje blablaffsdf', '99999.00', 24),
(85, 'werkzaamheidje blablaffsdfdfsgdfsgdsgsdf', '99999.00', 25),
(86, 'werkzaamheidje blablaffsdfdfsgdfsgdsgsdf', '99999.00', 26),
(87, 'werkzaamheidje blablaffsdfdfsgdfsgdsgsdf', '99999.00', 27),
(88, 'werkzaamheidje blablaffsdfdfsgdfsgdsgsdf', '99999.00', 28),
(89, '', '0.00', 28),
(90, '', '0.00', 28),
(91, 'mobiele werkzaamheid', '120.00', 29),
(92, 'mobiele werkzaamheid', '120.00', 30),
(93, 'mobiele werkzaamheid', '120.00', 31),
(94, 'mobiele werkzaamheid', '120.00', 32),
(95, 'Wordpress Website', '450.00', 33),
(96, 'Wordpress Theme', '50.00', 33),
(97, 'fsdfgf', '80.00', 33),
(98, 'Specifieke wensen', '120.00', 33),
(99, 'Wordpress Website', '450.00', 34),
(100, 'Wordpress Theme', '50.00', 34),
(101, 'fsdfgf2', '80.00', 34),
(102, 'Specifieke wensen', '120.00', 34),
(103, 'Wordpress Website', '450.00', 35),
(104, 'Wordpress Theme', '50.00', 35),
(105, 'fsdfgf2', '80.00', 35),
(106, 'Specifieke wensenfdfsg', '120.00', 35),
(107, 'Wordpress Website', '450.00', 36),
(108, 'Wordpress Theme', '50.00', 36),
(109, 'fsdfgf2', '80.00', 36),
(110, 'Specifieke wensenfdfsg', '120.00', 36),
(111, 'Wordpress Website', '450.00', 37),
(112, 'Wordpress Theme', '50.00', 37),
(113, 'fsdfgf2', '80.00', 37),
(114, 'Specifieke wensenfdfsg', '120.00', 37),
(115, '', '0.00', 38),
(116, '', '0.00', 39),
(117, '', '0.00', 40),
(118, 'fdsfsdfsd', '10.00', 42),
(119, 'fgfxgfd', '20.00', 42),
(120, 'sdfsdf', '10.00', 43),
(121, 'fsdfds', '20.00', 43),
(122, 'test', '10.00', 44),
(123, 'test2', '10.00', 45),
(124, 'test2', '20.00', 45),
(125, 'test2', '10.00', 46),
(126, 'test2', '20.00', 46),
(127, 'Wordpress Website', '450.00', 47),
(128, 'Wordpress Theme', '50.00', 47),
(129, 'SEO', '80.00', 47),
(130, 'Specifieke wensen', '120.00', 47),
(131, 'Wordpress Website', '450.00', 48),
(132, 'Wordpress Theme', '50.00', 48),
(133, 'SEO', '80.00', 48),
(134, 'Specifieke wensen', '120.00', 48),
(135, 'werkzaamheidje blablaffsdfdfsgdfsgdsgsdf', '99999.00', 49),
(136, 'Wordpress Website', '450.00', 50),
(137, 'Wordpress Theme', '50.00', 50),
(138, 'SEO', '80.00', 50),
(139, 'Specifieke wensen', '120.00', 50),
(140, 'werkzaamheidje blablaffsdf2', '99999.00', 54),
(141, 'test werkzaamheden', '100.00', 56),
(142, 'test werkzaamheden', '100.00', 57),
(143, 'test werkzaamheden', '100.00', 58),
(144, 'test werkzaamheden', '100.00', 59),
(145, 'test werkzaamheden', '100.00', 60),
(146, 'test werkzaamheden2', '200.00', 60),
(147, 'testdinsdag  werkzaamheden', '100.00', 61),
(148, 'testdinsdag werkzaamheden2', '200.00', 61),
(149, 'testdinsdag  werkzaamheden', '100.00', 62),
(150, 'testdinsdag werkzaamheden2', '200.00', 62);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `klanten`
--
ALTER TABLE `klanten`
 ADD PRIMARY KEY (`Clientnr`);

--
-- Indexen voor tabel `offertes`
--
ALTER TABLE `offertes`
 ADD PRIMARY KEY (`OfferteID`);

--
-- Indexen voor tabel `werkzaamheden`
--
ALTER TABLE `werkzaamheden`
 ADD PRIMARY KEY (`WerkzaamheidID`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `klanten`
--
ALTER TABLE `klanten`
MODIFY `Clientnr` int(4) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT voor een tabel `offertes`
--
ALTER TABLE `offertes`
MODIFY `OfferteID` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=63;
--
-- AUTO_INCREMENT voor een tabel `werkzaamheden`
--
ALTER TABLE `werkzaamheden`
MODIFY `WerkzaamheidID` int(7) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=151;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
