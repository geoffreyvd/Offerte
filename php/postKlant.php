<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    include 'functions.php';

    $query = "insert into klanten (Clientnr, Contact, Company, Address, Zipcode, City) values";
    
    $contactNaam = $request->contactNaam;
    $bedrijfsNaam = $request->bedrijfsNaam;
    $adres = $request->adres;
    $postcode = $request->postcode;
    $stad = $request->stad;
        
    $query .= " ('NULL', '$contactNaam', '$bedrijfsNaam', '$adres', '$postcode', '$stad')";
    ///run function post and check id, save offerteID 
    $OfferteID = post($query,false);

echo "succes";
?>