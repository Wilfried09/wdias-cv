function getJSON(path) {
    console.log("/getJSON");
    var xhr = new XMLHttpRequest();
    xhr.resquestType = 'json';
    xhr.open("GET", path, true);
    xhr.onload = function () {
        var result = JSON.parse(xhr.response);
        checkPage(result);
    }
    xhr.send(null);
}

function calculateAge(data) {
    let birthdate = new Date(data.birthyear, data.birthmonth - 1, data.birthday);
    let today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    if (today.getMonth() == birthdate.getMonth()) {
        if (today.getDate() < birthdate.getDate()) {
            age = age - 1;
        }
    } else {
        if (today.getMonth() < birthdate.getMonth()) {
            age = age - 1;
        }
    }
    return age;
}

function getElement(id) {
    return document.getElementById(id);
}

function createStandardElement(tag, classe, texte, href, src) {
    let element = document.createElement(tag);
    if (classe != undefined && classe != '') {
        element.className = classe;
    }

    if (href != undefined && href != ''){
        element.href = href;
        element.target="_blank";
    }

    if (src != undefined && src != ''){
        element.src = src;
    }

    if (texte != undefined && texte != '') {
        let content = document.createTextNode(texte);
        element.appendChild(content);
    }

    return element;
}

function bindElement(elementP, elementC) {
    elementP.appendChild(elementC);
    return elementP;
}