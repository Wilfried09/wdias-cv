function getJSON(path){
    console.log("/getJSON");
    var xhr = new XMLHttpRequest();
    xhr.resquestType ='json';
    xhr.open("GET", path, true);
    xhr.onload = function(){
        var result = JSON.parse(xhr.response);
        checkPage(result);
    }
    xhr.send(null);
}

function calculateAge(data){
  let birthdate = new Date(data.birthyear, data.birthmonth-1, data.birthday);
  let today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  if(today.getMonth() == birthdate.getMonth()){
    if(today.getDate() < birthdate.getDate()){
      age = age - 1;
    }
  }else{
    if(today.getMonth() < birthdate.getMonth()){
      age = age - 1;
    }
  }
  return age;
}

function getElement(id){
  return document.getElementById(id);
}

function createStandardElement(tag, classe, texte){
  let element = document.createElement(tag);
  if(classe != undefined && classe != ''){
    element.className = classe ;
  }
  if(texte != undefined && texte != ''){
    let content = document.createTextNode(texte);
    element.appendChild(content);
  }
  return element;
}

function bindElement(elementP, elementC){
  elementP.appendChild(elementC);
  return elementP;
}

function checkPage(data){
    console.log("/checkPage");
    if (typeof data == 'undefined') {
        getJSON('../JSON/cv.json');
    } else {
      createAboutme(data.aboutme);
      createCvParts(data.cv_elements);
    }
}

function createAboutme(data){
  console.log("/createAboutme");
  let barLeft = getElement("barLeft");
  let bloc = createStandardElement("div", "cv-aboutme-bloc", '')
  createPI(bloc, data.part1);
  createDev(bloc, data.part2);
  createLang(bloc, data.part3);
  createHobbies(bloc, data.part4);
  barLeft = bindElement(barLeft, bloc);
}

function createPI(element, data){
    console.log("/createPI");
    let title = createStandardElement("div", 'cv-left-title', data.profil);

    let liste = createStandardElement("ul", "cv-personnal-info", '');

    let name = createStandardElement("li", "cv-name", data.name);
    liste = bindElement(liste, name);

    let adress1 = createStandardElement("li", '', "Adresse : "+data.adress1);
    liste = bindElement(liste, adress1);

    let adress2 = createStandardElement("li", '', data.adress2);
    liste = bindElement(liste, adress2);

    let mail = createStandardElement("li", '', "Mail : "+data.email);
    liste = bindElement(liste, mail);

    let age = createStandardElement("li", '', "Age : "+calculateAge(data));
    liste = bindElement(liste, age);

    for(i in data.more_infos){
      let info = createStandardElement("li", '', data.more_infos[i]);
      liste = bindElement(liste, info);
    }

    let elementP = createStandardElement("div", '', '');
    elementP = bindElement(elementP, title);
    elementP = bindElement(elementP, liste);

    element = bindElement(element, elementP);
}

function createLang(element, data){
  console.log("/createLang");

  let title = createStandardElement("div", 'cv-left-title', data.langues);
  let liste = createStandardElement("ul", 'cv-personnal-info', '');
  for(i in data.liste){
    let competence = createStandardElement("li", '', data.liste[i][0]+" : "+ data.liste[i][1]);
    liste = bindElement(liste, competence);
  }

  let elementP = createStandardElement("div", '', '');
  elementP = bindElement(elementP, title);
  elementP = bindElement(elementP, liste);

  element = bindElement(element, elementP);
}

function createHobbies(element, data){
  console.log("/createHobbies");

  let title = createStandardElement("div", 'cv-left-title', data.hobbies);
  let liste = createStandardElement("ul", 'cv-personnal-info', '');
  for(i in data.liste){
    let hobbie = createStandardElement("li", '', data.liste[i]);
    liste = bindElement(liste, hobbie);
  }

  let elementP = createStandardElement("div", '', '');
  elementP = bindElement(elementP, title);
  elementP = bindElement(elementP, liste);

  element = bindElement(element, elementP);
}

function createDev(element, data){
  console.log("/createDev");

  let title = createStandardElement("div", 'cv-left-title', data.competences);
  let liste = createStandardElement("ul", 'cv-personnal-info', '');
  for(i in data.liste){
    let categorie = createStandardElement("li", '', i+" :");
    for(j in data.liste[i]){
      let competence = createStandardElement("li", "padding-standard-left", data.liste[i][j]);
      categorie = bindElement(categorie, competence);
    }
    liste = bindElement(liste, categorie);
  }

  let elementP = createStandardElement("div", '', '');
  elementP = bindElement(elementP, title);
  elementP = bindElement(elementP, liste);

  element = bindElement(element, elementP);
}

function createCvParts(data){
  console.log("/createCvParts");
  document.getElementById("cvTitle").innerHTML = data.cv_title;
  for(i in data.cv_parts){
    let title = createStandardElement("div", "cv-part-title", i);

    let part = createStandardElement("div", "cv-part", '');

    let content = createStandardElement("div", "cv-part-content d-flex flex-column", '');
    content = fillParts(data.cv_parts[i], content);

    part = bindElement(part, title);
    part = bindElement(part, content);

    let bloc = getElement("cvParts");
    bloc = bindElement(bloc, part);

  }
}

function fillParts(data, element){
  console.log("/fillParts");
  for(i in data){
    let left = createStandardElement("div", "cv-line-left", data[i][0]);

    let dBlock = createStandardElement("div", "cv-line-right-diploma", data[i][1]);

    let sBlock = createStandardElement("div", "cv-line-right-school", data[i][2]);

    let right = createStandardElement("div", "cv-line-right", '');
    right = bindElement(right, dBlock);
    right = bindElement(right, sBlock);

    let line = createStandardElement("div", "cv-line d-flex flex-row", '');
    line = bindElement(line, left);
    line = bindElement(line, right);

    element = bindElement(element, line);
  }
  return element;
}

function createArticle(data){
    console.log("/createArticle");
    let result = createPageTitle(data.title1);
    for(i in data.section){
        if(i != "summary"){
            result= ''+result+'<section>'+createParagraphe(data.section[i])+'</section>';
        }else{
            result= ''+result+'<section>'+createSummary(data.section[i])+'</section>';
        }
    }
    result= ''+result+'<section>'+createAdresse(data.carnetAdresse)+'</section>';
    document.getElementById("content").innerHTML = result;
}
