<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);    
    include 'functions.php';

    $query = "SELECT * FROM `klanten`" ;     
    $resultaat = get($query);

    $outp = "";
    while($rs = $resultaat->fetch_array(MYSQLI_ASSOC)) {
        if ($outp != "") {$outp .= ",";}
        $outp .= '{"clientID":"' . $rs["Clientnr"] . '",';
        $outp .= '"contact":"'. $rs["Contact"] . '",';
        $outp .= '"company":"'. $rs["Company"] . '",';
        $outp .= '"address":"'. $rs["Address"] . '",';
        $outp .= '"zipcode":"'. $rs["Zipcode"] . '",';
        $outp .= '"city":"'. $rs["City"]. '"}';
    }

    $outp ='{"klanten":['.$outp.']}';
    printf($outp);    
?>