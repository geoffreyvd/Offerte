<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    include 'functions.php';

    $zoekTerm = $request->trefwoord;

    $query = "SELECT offertes.OfferteID, OfferteNaam, OfferteOmschrijving, OfferteDatum, Company FROM offertes inner join klanten on offertes.KlantID = klanten.Clientnr WHERE OfferteDatum LIKE '%$zoekTerm%' OR OfferteNaam LIKE '%$zoekTerm%' OR OfferteID LIKE '%$zoekTerm%' OR OfferteOmschrijving LIKE '%$zoekTerm%' OR Company LIKE '%$zoekTerm%' OR Contact LIKE '%$zoekTerm%'";

    $result = get($query);

    $outp = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($outp != "") {$outp .= ",";}
        $outp .= '{"ID":"' . $rs["OfferteID"] . '",';
        $outp .= '"omschrijving":"'. $rs["OfferteOmschrijving"] . '",';
        $outp .= '"naam":"'. $rs["OfferteNaam"]. '",';
        $outp .= '"datum":"'. $rs["OfferteDatum"]. '",';
        $outp .= '"bedrijf":"'. $rs["Company"]. '"}';
    }
    $outp ='{"records":['.$outp.']}';

    echo($outp);
?>