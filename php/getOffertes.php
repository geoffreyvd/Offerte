<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include 'functions.php';

    $query = "SELECT offertes.OfferteID, OfferteNaam, OfferteOmschrijving, OfferteDatum, Company FROM offertes inner join klanten on offertes.KlantID = klanten.Clientnr";
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