function createContentRight(data) {
    console.log("/createCvContent");
    let body = getElement("cvBody");
    let title = createStandardElement("div", "cv-title grey-line", data.cv_title)
    let formation = createFormation(data.formation);
    let exp = createExperience(data.exppro);

    body = bindElement(body, title);
    body = bindElement(body, formation);
    body = bindElement(body, exp);
}

function createFormation(data) {
    console.log("/createFormation");
    let formation = createStandardElement("div", "cv-part d-flex flex-column");

    let title = createStandardElement("div", "cv-part-title", "FORMATION");

    let content = createStandardElement("div", "cv-part-content d-flex flex-column", '');

    for (i in data) {
        let line = createStandardElement("div", "cv-line d-flex flex-row", '');

        let date = createStandardElement("div", "cv-line-left", data[i].date);

        let year = createStandardElement("div", "cv-line-right d-flex flex-column", '');
        let link = createStandardElement("a", '', '', data[i].link);
        let diploma = createStandardElement("div", "cv-line-right-diploma", data[i].diploma);
        link = bindElement(link, diploma);
        let school = createStandardElement("div", "cv-line-right-school", data[i].school)
        year = bindElement(year, link);
        year = bindElement(year, school);

        line = bindElement(line, date);
        line = bindElement(line, year);
        content = bindElement(content, line);
    }
    formation = bindElement(formation, title);
    formation = bindElement(formation, content);

    return formation;
}

function createExperience(data) {
    console.log("/createExperience");
    let experience = createStandardElement("div", "cv-part d-flex flex-column");

    let title = createStandardElement("div", "cv-part-title", "EXPERIENCES PROFESSIONNELLES");

    let content = createStandardElement("div", "cv-part-content d-flex flex-column", '');

    for (i in data) {
        let line = createStandardElement("div", "cv-line d-flex flex-row", '');

        let date = createStandardElement("div", "cv-line-left", data[i].date);
        let year = createStandardElement("div", "cv-line-right d-flex flex-column justify-content-between", '');
        for(j in data[i].works){
            let work = createStandardElement("div", "cv-line-right-sublock d-flex flex-column", '');
            let link = createStandardElement("a", '', '', data[i].works[j].link)
            let company = createStandardElement("div", "cv-line-right-diploma", data[i].works[j].titre);
            link = bindElement(link, company);
            let detailList = createStandardElement("div", "d-flex flex-column", '');
            for(k in data[i].works[j].details){
                let detail = createStandardElement("div", "cv-line-right-school", "- "+data[i].works[j].details[k] )
                detailList = bindElement(detailList, detail);
            }
            work = bindElement(work, link);
            work = bindElement(work, detailList);
            year = bindElement(year, work);

        }
        line = bindElement(line, date);
        line = bindElement(line, year);
        content = bindElement(content, line);
    }
    experience = bindElement(experience, title);
    experience = bindElement(experience, content);

    return experience;
}