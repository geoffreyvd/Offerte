-- phpMyAdmin SQL Dump
-- version 4.3.0
-- http://www.phpmyadmin.net
--
-- Machine: localhost
-- Gegenereerd op: 01 jun 2015 om 16:41
-- Serverversie: 5.5.41-MariaDB
-- PHP-versie: 5.5.25

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

--
-- Gegevens worden geëxporteerd voor tabel `admin`
--

INSERT INTO `admin` (`password`) VALUES
('$2y$10$Z1EMSt5lXMaPq5UBEHZVau4g0KnNYcAS9JWBzhM4DlHAxb5Kz0GwC');

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
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `klanten`
--

INSERT INTO `klanten` (`Clientnr`, `Contact`, `Company`, `Address`, `Zipcode`, `City`) VALUES
(1, 'Alex Dijkman Dulkes', 'Wagenhof Bedrijfsmakelaars B.V.', 'Tappersweg 12', '2031 ET', 'HAARLEM'),
(2, 'Rubin Ootes', 'Catch 22', 'Abraham Mensstraat 21', '2015 JP', 'HAARLEM'),
(3, 'Wouter Beulink', 'Timmerbedrijf Beulink', 'Timorstraat 125', '2022 RD', 'HAARLEM'),
(4, 'Jos Mica', 'Autorijschool Jos Mica', 'Marnixplein 2', '2023 RL', 'HAARLEM'),
(5, 'Ellis Vester Goudsblom', 'Spray Tan Castricum', 'Burgemeester Mooijstraat 33', '1901 ER', 'CASTRICUM'),
(6, 'Elvira Vink', 'Ruitersport-Levade', 'Koudenhorn 44', '2011 JD', 'HAARLEM'),
(7, 'Carola Lanser', 'Seeger / Kappersgold', 'Hoofdstraat 230', '2071 EP', 'SANTPOORT-NOORD'),
(8, 'Michel Bruins Slot', 'Robuust', 'Ottho Heldringstraat 43', '1066XT', 'AMSTERDAM'),
(9, 'Michel Lammerse', 'Lamgraglas', 'Amsterdamsevaart 166', '2032 EH', 'HAARLEM'),
(10, 'Marc van Dalen', 'Bakkerij Neplenbroek / Bakkerij Maron B.V.', 'Techniekweg 32', '3542 DT', 'UTRECHT'),
(11, 'Bianca van Laar', 'Aurahuis', 'Schroeder van der Kolkwg 6', '2061 KE', 'BLOEMENDAAL'),
(12, 'Jan Noordijk', 'Stichting Visionsound', 'Louis Pasteurstraat 286', '2035RT', 'HAARLEM'),
(13, 'Frankie Holscher', 'The Tanning Man', 'Aart van der Neerweg 23', '1191 EC', 'OUDERKERK A/D AMSTEL'),
(14, 'Klaas??Jan Neefkens', 'Unicucine B.V.', 'George Gershwinplein 6', '1082 MV', 'AMSTERDAM'),
(15, 'Klaas-?_Jan Neefkens', 'Unicucine Consult', 'George Gershwinplein 6', '1082 MV', 'AMSTERDAM'),
(16, 'Klaas-Jan Neefkens', 'Gadget Supplies B.V.', 'Molenweide 44', '1902 CH', 'CASTRICUM'),
(17, 'Alex Dijkman Dulkes', 'Wagenhof Vastgoedbeheer B.V.', 'Tappersweg 12', '2031 ET', 'HAARLEM'),
(18, 'Rob van Bambergen', 'Yow Yow', 'Herenweg 29-?_K', '2105 MB', 'HEEMSTEDE'),
(19, 'Paul Luyf', 'Paul Luyf Optiek', 'Rijksstraatweg 14', '2022 DA', 'HAARLEM'),
(20, 'Klaas-Jan Neefkens', 'Unicucine wijnen B.V.', 'George Gershwinplein 6', '1082 MV', 'AMSTERDAM'),
(21, 'Ron Koster', 'Link-to-Art', 'Koningstraat 20-?_E', '2011TD', 'HAARLEM'),
(22, 'Sebastiaan Bolweg', 'Bolweg Advocatuur', 'Van Eedenstraat 18', '2012 EM', 'HAARLEM'),
(23, 'Luc Last', 'Meervilt V.O.F.', 'Jansweg 27-?_29', '2011 KL', 'HAARLEM'),
(24, 'Maritska Kluivers', 'The Hague City Flower', 'Prinsestraat 25', '2513CA', 'DEN HAAG'),
(25, 'Malou Meeuws', '', 'Marsmanplein 146', '2025DV', 'HAARLEM'),
(26, 'Job Dekker', 'Minty Media', 'Mollerusweg 82', '2031BZ', 'HAARLEM'),
(27, 'Michel Bruins Slot', 'ESIGGIE', 'Ottho Heldringstraat 43', '1066XT', 'AMSTERDAM'),
(28, 'Ronald Jolie', 'Jolie-Baaten Bedrijfsmakelaardij', 'Zeilmakerstraat 12', '1991 JC', 'VELSERBROEK'),
(29, 'Paul Luyf', 'Stichting Oogproject', 'Rijksstraatweg 14', '2022 DA', 'HAARLEM'),
(30, 'Administratie', 'Van Diemen Communicatiemakelaars', 'Suikersilo-West  22', '1165 MP', 'HALFWEG NH'),
(31, 'Anthony Lau', 'Signature Products Limited', 'Waterloo Plaza 53- 55, Waterloo Road', '', 'HONG KONG'),
(32, 'Anthony Buning', 'Het Luikje', 'Wustelaan 100', '2071AG', 'SANTPOORT-NOORD'),
(33, 'Simon Corper', 'Pension Zee en Duinzicht', 'Marisstraat 11', '2042AH', 'ZANDVOORT'),
(34, 'Petra Meeuwes', 'Petra', 'A. v/d Goesstraat 3', '2026TH', 'HAARLEM');

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `offertes`
--

INSERT INTO `offertes` (`OfferteID`, `OfferteNaam`, `OfferteOmschrijving`, `OfferteDatum`, `KlantID`) VALUES
(1, 'test offerte', 'dit is een test oferte en dit vak is de omschrijving', '2015-06-01', 34);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `werkzaamheden`
--

CREATE TABLE IF NOT EXISTS `werkzaamheden` (
`WerkzaamheidID` int(7) NOT NULL,
  `WerkzaamheidTitel` tinytext NOT NULL,
  `WerkzaamheidPrijs` decimal(10,2) NOT NULL,
  `OfferteID` int(5) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `werkzaamheden`
--

INSERT INTO `werkzaamheden` (`WerkzaamheidID`, `WerkzaamheidTitel`, `WerkzaamheidPrijs`, `OfferteID`) VALUES
(1, 'test werkzaamheid 1', '10.00', 1);

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
MODIFY `Clientnr` int(4) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT voor een tabel `offertes`
--
ALTER TABLE `offertes`
MODIFY `OfferteID` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT voor een tabel `werkzaamheden`
--
ALTER TABLE `werkzaamheden`
MODIFY `WerkzaamheidID` int(7) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
