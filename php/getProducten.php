<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);    
    include 'functions.php';

    $query = "SELECT * FROM `producten`" ;     
    $resultaat = get($query);

    $outp = "";
    while($rs = $resultaat->fetch_array(MYSQLI_ASSOC)) {
        if ($outp != "") {$outp .= ",";}
        $outp .= '{"id":"' . $rs["ID"] . '",';
        $outp .= '"titel":"'. $rs["Titel"] . '",';
        $outp .= '"prijs":"'. $rs["Prijs"]. '"}';
    }

    $outp ='{"producten":['.$outp.']}';
    printf($outp);    
?>