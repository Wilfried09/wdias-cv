function checkPage(data){
    dispFunc("/checkPage");
    headerBand(data.header);
    disp(data);
    if(data != undefined && data.recipe != undefined && data.recipe != ''){
        displayShot(data.recipe.Recipe_shot);
        displayJson(data.recipe.Recipe_json);
    }else{
        homeList(data.list);
    }
}

function headerBand(data){
    dispFunc("/headerBand");
    disp(data);
    let types = getTypes(data);
    let header = getElement("headBand");
    let form = createFormElement("", "recipeSelectionForm", "POST", "index.php");
    let input= createInputElement("recipeSelection", "","text", "recipe_id");
    let request= createInputElement("requestSelection", "","text", "request_type");
    let goHome = createStandardElement("div", "clickableMenu", "Tout", "", "","", function(){goToAllTypeList()});
    bindElement(form, input);
    bindElement(form, request);
    bindElement(header, form);
    bindElement(header, goHome);
    for(let i in types){
        let elem = createStandardElement("div", "clickableMenu", types[i].name, "", "","", function(){goToOneTypeList(types[i].id)});
        bindElement(header, elem);
    }
}

function getTypes(data){
    dispFunc("/getTypes");
    let isAlreadyGet = false;
    let save = 0;
    let types = [];
    for(let i in data){
        for(let j in types){
            if(data[i].Type_id == types[j].id){
               isAlreadyGet = true;
            }
        }
        if(!isAlreadyGet){
            let tmp = {}
            tmp['id']=data[i].Type_id;
            tmp['name']=data[i].Type_name;
            if(data[i].Type_id>save){
                types.push(tmp);
            }else{
                types.unshift(tmp);
            }
            save=data[i].Type_id;
        }
    }
    return types;
}

function goToAllTypeList(){
    dispFunc("/goToAllTypeList : ");
    let request = getElement("requestSelection");
    let formSelection = getElement("recipeSelectionForm");
    request.value="listAll";
    formSelection.submit();
}

function goToOneTypeList(id){
    dispFunc("/goToOneTypeList : ");
    let recipe = getElement("recipeSelection");
    let request = getElement("requestSelection");
    let formSelection = getElement("recipeSelectionForm");
    request.value="listId";
    recipe.value=id;
    formSelection.submit();
}

function goToRecipe(id){
    dispFunc("/goToRecipe : ");
    let recipe = getElement("recipeSelection");
    let request = getElement("requestSelection");
    let formSelection = getElement("recipeSelectionForm");
    request.value="recipe";
    recipe.value=id;
    formSelection.submit();
}