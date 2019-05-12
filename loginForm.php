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
    <script src="./JS/barLeft.js"></script>
    <script src="./JS/contentRight.js"></script>
    <script src="./JS/customscript.js"></script>
    <title>Wilfried DIAS - CV</title>
</head>
<body onLoad="checkPage();">

<div id="headBand" class="head-footer-content admin-header d-flex justify-content-center"><div class="clickableMenu"><a class="not-a-link" href="index.php">Retour au site</a></div></div>

    <div class="admin-form-container centered-text d-flex flex-column">
        <h3>Connexion Administrateur</h3>

        <form class="admin-form d-flex flex-column" method="POST" action="control.php">
            <input id="login" name="username" type="text" placeholder="Identifiant">
            <input id="psw" name="password" type="password" placeholder="Mot de passe">
            <input class="btn-success" type="submit" value="Connexion">
        </form>
        <?php if(!ModifyRequest($_POST)){echo '<span class="font-bold font-red">Identifiant ou Mot de Passe incorrect</span>';} ?>
    </div>

</body>
<footer id="footBand" class="head-footer-content">
    ©Wilfried DIAS
</footer>
</html>
