<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);    
    include 'functions.php';        

    ///get offerte with query to database
    $query = "SELECT * FROM `klanten`" ;     
   $resultaat = get($query);

    $outp = "";
    while($rs = $resultaat->fetch_array(MYSQLI_ASSOC)) {
        if ($outp != "") {$outp .= ",";}
        $outp .= '{"clientID":"' . $rs["Clientnr"] . '",';
        $outp .= '"company":"'. $rs["Company"] . '",';
        $outp .= '"contact":"'. $rs["Contact"]. '"}';
    }

    $outp ='{"klanten":['.$outp.']}';
    printf($outp);    
?>