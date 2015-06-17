<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    include 'functions.php';

    ///post offerte with query to database
    $query = "insert into offertes (OfferteID, OfferteNaam, OfferteOmschrijving, OfferteDatum, KlantID) values";
    
    $titel = $request->titel;
    $klantid = $request->klantid;
    $omschrijving = str_replace(array("\r\n", "\r", "\n"), "<br>", $request->omschrijving);
    $datum = date("Y-m-d");
    $query .= " ('NULL', '$titel', '$omschrijving', '$datum', '$klantid')";
    ///run function post and check id, save offerteID 
    $OfferteID = post($query,true);

    ///post werkzaamheden with query to database
    $query = "insert into werkzaamheden (WerkzaamheidID, WerkzaamheidTitel, WerkzaamheidPrijs, OfferteID) values";
    $werkzaamheden = $request->werkzaamheden;
    foreach($werkzaamheden as $key=>$value){
        if($key == 0){            
        $query .=  "('NULL', '$value->name', '$value->price', '$OfferteID')";
        }
        else{            
        $query .=  ",('NULL', '$value->name', '$value->price', '$OfferteID')";            
        }                
    }

    post($query, false);
?>