<?php
require("PHP/tools.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="./CSS/bootstrap.css"/>
    <link rel="stylesheet" href="./CSS/customstyle.css"/>
    <link rel="stylesheet" media="screen and (max-width: 992px)" href="./CSS/style.css"/>
    <link rel="stylesheet" media="print" href="./CSS/printing.css">
    <link rel="icon" href="./Ressources/favicon.ico" />
    <meta charset="UTF-8">
    <script src="./JS/tools.js"></script>
    <script src="./JS/homeScript.js"></script>
    <script src="./JS/recipeContent.js"></script>
    <script src="./JS/customscript.js"></script>
    <title>Cook Book</title>
    <?php
        $dbLink=reader();
        $dbLinkHeader=$dbLink;
        $dbLinkContent=$dbLink;
        $headerData=getData($dbLinkHeader, headerQuery());
        disp($_POST["request_type"]);
        disp($_POST["type_id"]);
        switch($_POST["request_type"]){
            case "listAll":
                $listData=getData($dbLinkContent, listAllQuery());
                break;
            case "listId":
                $listData=getData($dbLinkContent, listTypeQuery($_POST['recipe_id']));
                break;
            case "recipe":
                $recipeData=getData($dbLinkContent, recipeQuery($_POST['recipe_id']));
                break;
            default:
                $listData=getData($dbLinkContent, listAllQuery());
        }
        $DATA['header']='';
        if($headerData != 'undefined'){
            $DATA['header']=$headerData;
        }
        $DATA['list']='';
        if($listData != 'undefined'){
            $DATA['list']=$listData;
        }
        $DATA['recipe']='';
        if($recipeData != 'undefined'){
            $DATA['recipe']=$recipeData;
        }
        dispSpe($DATA['header']);
        dispSpe($DATA['list']);
        dispSpe($DATA['recipe']);
    ?>
    <script>
        var data = {
            "header" : <?= json_encode($DATA['header']); ?>,
            "list" : <?= json_encode($DATA['list']); ?>,
            "recipe" : <?= json_encode($DATA['recipe'][0]); ?>
        }
        disp(data);
    </script>
</head>
<body onLoad="checkPage(data);">
<div id="headBand" class="head-footer-content d-flex justify-content-center"></div>
<div class="main-content">
        <?php

        if(($_POST["recipe_type"] != 'undefined' && $_POST["recipe_type"] == 'recipe' )){
            echo "<h1>".$DATA["recipe"]["Recipe_name"]."</h1>";
        }else{
            echo "<h1>Cook Book</h1>";
        }
        require("content.php");
        ?>
</div>
</body>
<footer id="footBand" class="head-footer-content">
    <a class="not-a-link" href="control.php">©</a>Wilfried DIAS
</footer>
</html>
