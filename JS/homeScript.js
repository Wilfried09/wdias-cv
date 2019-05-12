function homeList(data){
    dispFunc("/homeList");
    let content = getElement("contentHook");
    let container=createStandardElement("div", "d-flex flex-row flex-wrap");
    disp(data);
    for(let i in data){
        disp(data[i].Recipe_id);
        disp(data);
        let block=createStandardElement("div", "recipe-block clickableBlock", '', "", "", "", function(){goToRecipe(data[(i)].Recipe_id)});
        let image=createStandardElement("img", "recipe-block-shot", "", "", data[i].Recipe_shot, "");
        let title=createStandardElement("div", "recipe-block-title", data[i].Recipe_name, "", "", "");
        bindElement(block, image);
        bindElement(block, title);
        bindElement(container, block);
    }
    bindElement(content, container);
}