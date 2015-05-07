<?php
/**
 * Database configuration
 */
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');
define('DB_NAME', 'angularcode');

$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

function post($DATA){
    $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
    if ($mysqli->query("INSERT INTO `angularcode`.`test2` (`Werkzaamheid_id`, `Werkzaamheid`, `Prijs`) VALUES (NULL, '$DATA', '600.50')") === TRUE) {
        printf(" successfully created $DATA.<br>\n");
    }
}
function get($DATA){
    $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
    if ($result = $mysqli->query("SELECT $DATA FROM `angularcode`.`test2`")) {
        printf("successfully found $DATA.<br>\n");
        printf("Select returned %d rows.<br>\n", $result->num_rows);
        return $result;
    }
}
function delete($DATA){
    $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
    if ($mysqli->query("DELETE FROM `angularcode`.`test2` WHERE `test2`.`Werkzaamheid_id` = $DATA") === TRUE) {
        printf(" successfully deleted $DATA.<br>\n");
    }
}

post('Website maken');
get('Werkzaamheid');
delete(1);


/* If we have to retrieve large amount of data we use MYSQLI_USE_RESULT 
if ($result = $mysqli->query("SELECT * FROM City", MYSQLI_USE_RESULT)) {

    /* Note, that we can't execute any functions which interact with the
       server until result set was closed. All calls will return an
       'out of sync' error 
    if (!$mysqli->query("SET @a:='this will not work'")) {
        printf("Error: %s\n", $mysqli->error);
    }
    $result->close();
}*/

$mysqli->close();
?>