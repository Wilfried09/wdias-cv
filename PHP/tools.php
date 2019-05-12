<?php

function isDefined($data){
    dispFunc("/isDefined");
    dispSpe($data);
    $defined = true;

    if (!count($data)) {
        return false;
    }

    foreach($data as $i){
        if($i == 'undefined' || $i == ''){
            $defined = false;
        }
    }
    return $defined;
}

function isValid($data){
    dispFunc("/isValid");
    disp("/isValid");
    dispSpe($data);
    $valid = true;

    if (!count($data)) {
        return false;
    }

    if($data['login'] != 'undefined'){
        $valid = false;
    }
    return $valid;
}

function connect(){
    dispFunc("/connect");
    $DBHOST = 'mysql-cookbook.alwaysdata.net';
    $DBNAME = 'cookbook_bdd';
    $DBLOGIN = "cookbook";
    $DBPASS = "1MDPmaster";

    $dbLink = mysqli_connect($DBHOST, $DBLOGIN, $DBPASS);
    if (mysqli_connect_errno()){
        echo "Identifiant ou Mot de passe incorrect";
    }else{
        mysqli_select_db($dbLink, $DBNAME);
        return $dbLink;
    }
}

function reader(){
    dispFunc("/reader");
    $DBHOST = 'mysql-cookbook.alwaysdata.net';
    $DBNAME = 'cookbook_bdd';
    $DBLOGIN = 'cookbook_display';
    $DBPASS = '1MDPreader';

    $dbLink = mysqli_connect($DBHOST, $DBLOGIN, $DBPASS);
    if (mysqli_connect_errno()){
        echo "Site inaccessible, veuillez réessayer plus tard.";
    }else{
        mysqli_select_db($dbLink, $DBNAME);
        return $dbLink;
    }
}

function headerQuery(){
    return "SELECT Type_id, Type_name FROM Type T ORDER BY Type_id";
}

function listAllQuery(){
    return "SELECT R.Recipe_id, R.Recipe_name, R.Recipe_shot, R.Type_id, T.Type_name FROM Recipe R, Type T WHERE R.Type_id=T.Type_id ORDER BY R.Recipe_id";
}

function listTypeQuery($type_id){
    return "SELECT R.Recipe_id, R.Recipe_name, R.Recipe_shot, R.Type_id, T.Type_name FROM Recipe R, Type T WHERE R.Type_id=T.Type_id AND R.Type_id='".$type_id."' ORDER BY R.Recipe_id";
}

function recipeQuery($recipe_id){
    return "SELECT R.Recipe_id, R.Recipe_name, R.Recipe_shot, R.Recipe_video, R.Recipe_json, R.Type_id, T.Type_name FROM Recipe R, Type T WHERE R.Type_id=T.Type_id AND R.Recipe_id ='".$recipe_id."' ORDER BY R.Recipe_id";
}

function getHeaderData($dbLink){
    dispFunc("/getHeaderData");
    $query = headerQuery();
    $dbresult = mysqli_query($dbLink, $query);
    $data=[];
    while($row=mysqli_fetch_array($dbresult, MYSQLI_ASSOC)){
        array_push($data, $row);
    }


    if(!isset($data)){
        return false;
    }else{
        return $data;
    }
}

function getData($dbLink, $query){
    dispFunc("/getData");
    $dbresult = mysqli_query($dbLink, $query);
    $data=[];
    while($row=mysqli_fetch_array($dbresult, MYSQLI_ASSOC)){
        array_push($data, $row);
    }

    dispSpe($data);

    if(!isset($data)){
        return false;
    }else{
        return $data;
    }

}

function modifyRequest($post){
    disp("/modifyRequest");
    $dbLink=reader();
    $query = "SELECT Username, Password FROM Admin WHERE Username='".$post['username']."'";
    $data = getData($dbLink, $query);
    $data = $data[0];
    if(isset($data)){
        if($data['Password']== SHA1($post['password'])){
            return true;
        }
    }
    return false;
}

function disp($text){
    //echo $text."<br>";
}

function dispSpe($text){
    //var_dump($text);
    //echo "<br>";
}

function dispFunc($text){
    //echo $text."<br>";
}