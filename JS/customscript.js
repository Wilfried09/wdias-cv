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

function createDev(element, data){
  console.log("/createDev");

}

function createCvParts(data){
  console.log("/createCvParts");
  document.getElementById("cvTitle").innerHTML = data.cv_title;
  for(i in data.cv_parts){
    let text = document.createTextNode(i);

    let title = document.createElement("div");
    title.className = 'cv-part-title';
    title.appendChild(text);

    let part = document.createElement("div");
    part.className = 'cv-part';
    let content = document.createElement("div");
    content.className = 'cv-part-content d-flex flex-column';
    content = fillParts(data.cv_parts[i], content)
    part.appendChild(title);
    part.appendChild(content);


    let bloc = document.getElementById("cvParts");
    bloc.appendChild(part);
  }
}

function fillParts(data, element){
  console.log("/fillParts");
  for(i in data){
    let date = document.createTextNode(data[i][0]);
    let left = document.createElement("div");
    left.className = 'cv-line-left';
    left.appendChild(date);

    let diploma = document.createTextNode(data[i][1]);
    let dBlock = document.createElement("div");
    dBlock.className = 'cv-line-right-diploma';
    dBlock.appendChild(diploma);

    let school = document.createTextNode(data[i][2]);
    let sBlock = document.createElement("div");
    sBlock.className = 'cv-line-right-school';
    sBlock.appendChild(school);

    let right = document.createElement("div");
    right.className = 'cv-line-right';
    right.appendChild(dBlock);
    right.appendChild(sBlock);

    let line = document.createElement("div");
    line.className = 'cv-line d-flex flex-row';
    line.appendChild(left);
    line.appendChild(right);

    element.appendChild(line);
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
