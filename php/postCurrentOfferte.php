<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    include 'functions.php';    
    
    $offerteID = $request->offerteid;
    $titel = addslashes($request->titel);
    $klantid = $request->klantid;
    $omschrijving = str_replace(array("\r\n", "\r", "\n"), "<br>", addslashes($request->omschrijving));
    $datum = date("Y-m-d");   

    ///post offerte with query to database
    $query = "UPDATE offertes SET OfferteNaam = '$titel', OfferteOmschrijving = '$omschrijving', OfferteDatum = '$datum', KlantID = '$klantid' WHERE OfferteID = $offerteID";
    post($query,false);

    ///delete old werkzaamheden
    $query = "delete from werkzaamheden where OfferteID = $offerteID";
    delete($query);  


    ///post werkzaamheden with query to database
    $query = "insert into werkzaamheden (WerkzaamheidID, WerkzaamheidTitel, WerkzaamheidPrijs, OfferteID) values";
    $werkzaamheden = $request->werkzaamheden;
    foreach($werkzaamheden as $key=>$value){
        if($key == 0){            
            $query .=  "('NULL', '" . addslashes($value->name) . "', '$value->price', '$offerteID')";
        }
        else{            
            $query .=  ",('NULL','" . addslashes($value->name) . "', '$value->price', '$offerteID')";            
        }                
    }
    post($query, false);
?>