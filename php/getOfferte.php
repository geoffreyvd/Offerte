<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    ///init
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
    define('DB_HOST', 'localhost');
    define('DB_NAME', 'offerte_systeem');
    $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
    /* check connection */
    if ($mysqli->connect_errno) {
        printf("Connect failed: %s\n", $mysqli->connect_error);
        exit();
    }
  

    function get($tempQuery){
        $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
        if ($result = $mysqli->query("$tempQuery")) {
            return $result;
        }
        else{ 
            printf(" UNsuccesfull query: '$tempQuery'\n");
        }
    }
    
    
   $offerteID = $request->OfferteID;

    ///get offerte with query to database
    $query = "SELECT WerkzaamheidID, WerkzaamheidPrijs, WerkzaamheidTitel FROM offertes inner join klanten on offertes.KlantID = klanten.Clientnr inner join werkzaamheden on offertes.OfferteID = werkzaamheden.OfferteID where offertes.OfferteID = " . $offerteID;    
  
   $resultaat = get($query);

    $outp = "";
    while($rs = $resultaat->fetch_array(MYSQLI_ASSOC)) {
        if ($outp != "") {$outp .= ",";}
        $outp .= '{"ID":"' . $rs["WerkzaamheidID"] . '",';
        $outp .= '"price":"'. $rs["WerkzaamheidPrijs"] . '",';
        $outp .= '"name":"'. $rs["WerkzaamheidTitel"]. '"}';
    }

    $query = "SELECT KlantID, Company, OfferteNaam, OfferteOmschrijving FROM offertes inner join klanten on offertes.KlantID = klanten.Clientnr where offertes.OfferteID = " . $offerteID;

    $resultaat2 = get($query);
    $outp2 = "";
    while($rs = $resultaat2->fetch_array(MYSQLI_ASSOC)) {
        if ($outp2 != "") {$outp2 .= ",";}
        $outp2 .= '{"klantID":"' . $rs["KlantID"] . '",';
        $outp2 .= '"klantNaam":"'. $rs["Company"] . '",';
        $outp2 .= '"omschrijving":"'. $rs["OfferteOmschrijving"] . '",';
        $outp2 .= '"offerteTitel":"'. $rs["OfferteNaam"]. '"}';
    }

    $outp ='{"werkzaamheden":['.$outp.'], "offerte":['.$outp2.']}';
    

    printf($outp);
    
?>