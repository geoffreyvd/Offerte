<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    include 'functions.php';    
    
    $klantid = $request->klantid; 
    
    $query = "delete from klanten where Clientnr = $klantid";
    $OfferteID = delete($query);

    echo "succes delete klant met id: $klantid";
?>