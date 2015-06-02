<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    include 'functions.php';

    $wachtwoord = $request->wachtwoord;

    $query = "SELECT password FROM `admin`";
    $result = get($query);
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {    
        $wwAdmin = $rs["password"];
    }

    if (password_verify($wachtwoord, $wwAdmin)){
        echo(true);
    }
    else{
        echo(false);
    }  
?>