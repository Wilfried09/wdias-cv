function getJSON(path) {
    dispFunc("/getJSON");
    var xhr = new XMLHttpRequest();
    xhr.resquestType = 'json';
    xhr.open("GET", path, true);
    xhr.onload = function () {
        var result = JSON.parse(xhr.response);
        displayJson(path, result);
    }
    xhr.send(null);
}

function getElement(id) {
    dispFunc("/getElement : "+id);
    return document.getElementById(id);

}

function createStandardElement(tag, classe, texte, href, src, id, fn) {
    dispFunc("/createStandardElement");

    let element = document.createElement(tag);
    if (id != undefined && id != '') {
        element.id = id;
    }

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

    if (fn != undefined && fn != ''){
        element.addEventListener("click", fn);
    }

    if (texte != undefined && texte != '') {
        let content = document.createTextNode(texte);
        element.appendChild(content);
    }

    return element;
}

function createFormElement(classe, id, method, action) {
    dispFunc("/createFormElement");

    let element = document.createElement("form");
    if (id != undefined && id != '') {
        element.id = id;
    }

    if (classe != undefined && classe != '') {
        element.className = classe;
    }

    if (action != undefined && action != '') {
        element.method = method;
        element.action = action;
    }

    return element;
}

function createInputElement(id, classe, type, name, value, fn) {
    dispFunc("/createInputElement");
    let element = document.createElement("input");
    if (id != undefined && id != '') {
        element.id = id;
    }

    if (classe != undefined && classe != '') {
        element.className = classe;
    }

    if (type != undefined && type != '') {
        element.type = type;
    }

    if (name != undefined && name != '') {
        element.type = type;
    }

    if (value != undefined && value != ''){
        element.value=value;
    }

    if (name != undefined && name != ''){
        element.name=name;
    }

    if (fn != undefined && fn != ''){
        element.onmousedown=fn;
    }

    return element;
}

function bindElement(elementP, elementC) {
    dispFunc("/bindElement");
    dispFunc(elementC);
    elementP.appendChild(elementC);
    return elementP;
}

function editMode(id, e){
    dispFunc("/edit");
    let val = '';
    if(id.tagName == 'SPAN'){
        val = getElement(id.id+"_value").innerHTML;
        let form = createForm(id.id, e, val);
        getElement(id.id).replaceWith(form);
    }else{
        val = id.value;
        disp(val);
        getElement(id.id).replaceWith(createStandardElement("span", '', val, '','', id.id));
        getElement(e.target.id).replaceWith(createInputElement(e.target.id, 'btn btn-warning btn-modify', "button", e.target.id+"_name",'Edit', "edit(e.target.id, event)"));
    }
}

function createForm(id, e, val){
    dispFunc("/createForm");
    let form = createFormElement("d-flex flex-row justify-content-between", id, "control.php" );
    let input = createInputElement(id, '', "text", id+"_name", val);
    let btn = createInputElement(e.target.id, 'btn btn-success btn-modify', "submit", e.target.id+"_name",'Valider');
    form = bindElement(form, input);
    form = bindElement(form, btn);
    return form;
}

function disp(text){
    //console.log(text);
}
function dispFunc(text){
    //console.log(text);
}