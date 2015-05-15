<?php   
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

    function get($tempQuery){
        $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
        if ($result = $mysqli->query("$tempQuery")) {
            return $result;
        }
        else{ 
            printf(" UNsuccesfull query: '$tempQuery'\n");
        }
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
    
?>