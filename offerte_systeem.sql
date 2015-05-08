-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Machine: 127.0.0.1
-- Gegenereerd op: 08 mei 2015 om 10:14
-- Serverversie: 5.6.21
-- PHP-versie: 5.6.3

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
-- Tabelstructuur voor tabel `hulptabel`
--

CREATE TABLE IF NOT EXISTS `hulptabel` (
  `OfferteID` int(5) NOT NULL,
  `WerkzaamheidID` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `hulptabel`
--

INSERT INTO `hulptabel` (`OfferteID`, `WerkzaamheidID`) VALUES
(1, 1),
(1, 2),
(2, 3);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `offertes`
--

CREATE TABLE IF NOT EXISTS `offertes` (
`OfferteID` int(5) NOT NULL,
  `OfferteNaam` varchar(30) NOT NULL,
  `OfferteOmschrijving` text NOT NULL,
  `OfferteDatum` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `offertes`
--

INSERT INTO `offertes` (`OfferteID`, `OfferteNaam`, `OfferteOmschrijving`, `OfferteDatum`) VALUES
(1, 'Offerte1', 'Alleen de website gemaakt voor wat geld blabla', '2015-05-06'),
(2, 'Offerte2', 'omschrijving blabla', '2015-05-07');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `werkzaamheden`
--

CREATE TABLE IF NOT EXISTS `werkzaamheden` (
`WerkzaamheidID` int(7) NOT NULL,
  `WerkzaamheidTitel` tinytext NOT NULL,
  `WerkzaamheidPrijs` decimal(10,2) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `werkzaamheden`
--

INSERT INTO `werkzaamheden` (`WerkzaamheidID`, `WerkzaamheidTitel`, `WerkzaamheidPrijs`) VALUES
(1, 'Website gemaakt', '300.69'),
(2, 'SEO', '500.45'),
(3, 'Logo', '20.00');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `hulptabel`
--
ALTER TABLE `hulptabel`
 ADD PRIMARY KEY (`OfferteID`,`WerkzaamheidID`);

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
-- AUTO_INCREMENT voor een tabel `offertes`
--
ALTER TABLE `offertes`
MODIFY `OfferteID` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT voor een tabel `werkzaamheden`
--
ALTER TABLE `werkzaamheden`
MODIFY `WerkzaamheidID` int(7) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
