function checkPage(data) {
    console.log("/checkPage");
    if (typeof data == 'undefined') {
        getJSON('../JSON/cv.json');
    } else {
        let h = getElement("headBand");
        let f = getElement("footBand");
        if(data.working_site){
            workingSite(h,f);
        }else{
            notWorkingSite(h,f);
        }
        createBarLeft(data.bar_left);
        createContentRight(data.content_right);
    }
}

function workingSite(h,f){
    h.className = "head-footer-content working-site";
    f.className = "head-footer-content working-site";
    let warningSign1 = createStandardElement("img", "alert-picto", '', '', "../Ressources/warning.png");
    let warningSign2 = createStandardElement("img", "alert-picto", '', '', "../Ressources/warning.png");
    let warningMessage = createStandardElement("span", '', "Site en construction", '', '');
    h = bindElement(h, warningSign1);
    h = bindElement(h, warningMessage);
    h = bindElement(h, warningSign2);
}

function notWorkingSite(h,f){
    h.className = "head-footer-content";
    f.className = "head-footer-content";
    let message = createStandardElement("span", '', 'Curriculum Vitae');
    h = bindElement(h, message);
}
