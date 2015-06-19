<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    include 'functions.php';

    $query = "TRUNCATE TABLE klanten";
    post($query, false);
    
    $query = "insert into klanten (Clientnr, Contact, Company, Address, Zipcode, City) values";

    foreach($request as $key=>$value){
        if($key == 0){            
        $query .=  "('NULL', '$value->contact', '$value->company', '$value->address', '$value->zipcode', '$value->city')";
        }
        else{            
        $query .=  ",('NULL', '$value->contact', '$value->company', '$value->address', '$value->zipcode', '$value->city')";            
        }                
    }

    post($query, false);    
?>