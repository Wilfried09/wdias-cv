function displayJson(data, json=false) {
    dispFunc("/displayJson");
    if(!data){
        return false;
    }
    if (!json) {
        getJSON(data);
    } else {
        disp(json);
        let content = getElement("contentHook");
        let ingredientTitle = createStandardElement("h4","","Ingrédients :");
        let list = createStandardElement("ul");
        for(let i in json.ingredients){
            let list_elem = createStandardElement("li","ingredient-list-item", "- "+json.ingredients[i]);
            bindElement(list,list_elem);
        }
        bindElement(content,ingredientTitle);
        bindElement(content,list);

        let stepTitle = createStandardElement("h4","","Recette :");
        let listStep = createStandardElement("div");
        for(let i in json.steps){
            let list_steps = createStandardElement("div","step-list-item", "- "+json.steps[i]);
            bindElement(listStep,list_steps);
        }
        let bonapetit = createStandardElement("h3", 'centered-text font-bold', "Et bon appétit !");
        bindElement(listStep, bonapetit);
        bindElement(content,stepTitle);
        bindElement(content,listStep);

    }
}

function displayShot(data){
    dispFunc("/displayShot");
    disp(data);
    let content = getElement("contentHook");
    let container = createStandardElement("div", "recipeShot")
    let shot = createStandardElement("img","","","", data);
    bindElement(container, shot);
    bindElement(content, container);
}