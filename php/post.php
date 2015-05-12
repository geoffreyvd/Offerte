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


    function post($tempQuery){
        $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
        if ($mysqli->query("$tempQuery") === TRUE) {
            printf(" successfull query: '$tempQuery'\n");
        }
    }

    ///post werkzaamheden with query to database
    $query = "insert into werkzaamheden (WerkzaamheidID, WerkzaamheidTitel, WerkzaamheidPrijs) values";
    
    foreach($request as $key=>$value){
        if($key == 0){            
        $query .=  "('NULL', '$value->name', '$value->price')";
        }
        else{            
        $query .=  ",('NULL', '$value->name', '$value->price')";            
        }
                
    }

    post($query);


    //$name = $request[0]->name; array-object
    //$price = $request->price; array
    ///"insert into werkzaamheden (WerkzaamheidID, WerkzaamheidTitel, WerkzaamheidPrijs)    values ('NULL', 'Fred',10)"
?>