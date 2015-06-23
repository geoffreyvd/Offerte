<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    include 'functions.php';    
    
    $productid = $request->productid; 
    
    $query = "delete from producten where ID = $productid";
    $OfferteID = delete($query);

    echo "succes delete product met id: $productid";
?>