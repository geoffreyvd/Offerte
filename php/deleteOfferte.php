<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    include 'functions.php';    
    
    $offerteID = $request->OfferteID;
    
    $query = "delete from offertes where OfferteID = $offerteID";   
    $OfferteID = delete($query);
    
    $query = "delete from werkzaamheden where OfferteID = $offerteID";   
    $OfferteID = delete($query);

    echo "succes delete offerte met id: $offerteID";
?>