<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');
define('DB_NAME', 'offerte_systeem');

$conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
/* check connection */
if ($conn->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

$result = $conn->query("SELECT * FROM `offertes`");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"ID":"' . $rs["OfferteID"] . '",';
    $outp .= '"omschrijving":"'. $rs["OfferteOmschrijving"] . '",';
    $outp .= '"naam":"'. $rs["OfferteNaam"]. '",';
    $outp .= '"datum":"'. $rs["OfferteDatum"]. '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>