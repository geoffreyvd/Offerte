-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Machine: 127.0.0.1
-- Gegenereerd op: 24 jun 2015 om 17:11
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
-- Tabelstructuur voor tabel `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `producten`
--

CREATE TABLE IF NOT EXISTS `producten` (
`ID` int(3) NOT NULL,
  `Titel` tinytext NOT NULL,
  `Prijs` decimal(10,2) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `werkzaamheden`
--

CREATE TABLE IF NOT EXISTS `werkzaamheden` (
`WerkzaamheidID` int(7) NOT NULL,
  `WerkzaamheidTitel` tinytext NOT NULL,
  `WerkzaamheidPrijs` decimal(10,2) NOT NULL,
  `OfferteID` int(5) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=304 DEFAULT CHARSET=latin1;

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
-- Indexen voor tabel `producten`
--
ALTER TABLE `producten`
 ADD PRIMARY KEY (`ID`);

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
MODIFY `OfferteID` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=116;
--
-- AUTO_INCREMENT voor een tabel `producten`
--
ALTER TABLE `producten`
MODIFY `ID` int(3) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT voor een tabel `werkzaamheden`
--
ALTER TABLE `werkzaamheden`
MODIFY `WerkzaamheidID` int(7) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=304;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
