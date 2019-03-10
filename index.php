<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="./CSS/bootstrap.css"/>
    <link rel="stylesheet" href="./CSS/customstyle.css"/>
    <link rel="icon" href="./Ressources/favicon.ico" />
    <meta charset="UTF-8">
    <script src="./JS/customscript.js"></script>
    <title>Wilfried DIAS - CV</title>
</head>
<body onLoad="checkPage();">
  <div class="head-footer-content">Curriculum Vitae</div>
  <div class="main-content">
      <div class="cv-content d-flex flex-row">
        <div class="cv-bar-left">
          <div class="grey-line">
            <div class="cv-profil">
              <img src="../Ressources/profil.jpg" alt="Wilfried DIAS">
            </div>
          </div>
          <div id="cvName" class="cv-name"></div>
          <ul id="personnalInfo" class="cv-personnal-info">
            <li>Adresse : <span id="adress1"></span></li>
            <li><span id="adress2"></span></li>
            <li>Mail : <span id="email"></span></li>
            <li>Age : <span id="age"></span> ans</li>
          </ul>
        </div>
        <div class="cv-body">
          <div id="cvTitle" class="cv-title grey-line"></div>
          <div id="cvParts" class="cv-parts"></div>
        </div>
      </div>
    </div>
</body>
<footer class="head-footer-content">
  @Wilfried DIAS
</footer>
</html>

<?php
