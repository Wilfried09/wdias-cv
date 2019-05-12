<?php
    require("./PHP/tools.php");
    if(isDefined($_POST)){
        if(!isValid($_POST)) {
           if(ModifyRequest($_POST)){
               $dbLink=connect();
               require("admin.php");
           }else{
               require("loginForm.php");
           }
        }
    }else{
        require("loginForm.php");
    }
