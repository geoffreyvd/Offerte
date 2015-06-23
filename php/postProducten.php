<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    include 'functions.php';

    $query = "TRUNCATE TABLE producten";
    post($query, false);
    
    $query = "insert into producten (ID, Titel, Prijs) values";

    foreach($request as $key=>$value){
        if($key == 0){            
            $query .=  "('NULL', '$value->titel', '$value->prijs')";
        }
        else{            
            $query .=  ",('NULL', '$value->titel', '$value->prijs')";            
        }                
    }

    post($query, false);    
?>