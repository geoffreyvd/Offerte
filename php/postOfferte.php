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

    function post($tempQuery, $checkID){
        $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
        if ($mysqli->query("$tempQuery") === TRUE) {
            printf(" successfull query: '$tempQuery'\n");
            if( $checkID === true){
                printf ("New Record has id %d.\n", $mysqli->insert_id);
                return($mysqli->insert_id);
            }
        }
        else{ 
            printf(" UNsuccesfull query: '$tempQuery'\n");
        }
    }

    ///post offerte with query to database
    $query = "insert into offertes (OfferteID, OfferteNaam, OfferteOmschrijving, OfferteDatum) values";
    
   $titel = $request->titel;
   $omschrijving = $request->omschrijving;
   $datum = date("Y-m-d");   
   $query .= " ('NULL', '$titel', '$omschrijving', '$datum')";
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