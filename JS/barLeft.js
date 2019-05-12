function createBarLeft(data) {
    disp("/createBarLeft");
    let barLeft = getElement("barLeft");
    let bloc = createStandardElement("div", "cv-aboutme-bloc", '')

    let pi = createPI(data.part1);
    bloc = bindElement(bloc, pi);

    let dev = createDev(data.part2);
    bloc = bindElement(bloc, dev);

    let lang = createLang(data.part3);
    bloc = bindElement(bloc, lang);

    let hobbies = createHobbies(data.part4);
    bloc = bindElement(bloc, hobbies);

    barLeft = bindElement(barLeft, bloc);
}

function createPI(data) {
    disp("/createPI");
    let title = createStandardElement("div", 'cv-left-title', data.profil);

    let liste = createStandardElement("ul", "cv-personnal-info", '');

    let name = createStandardElement("li", "cv-name", data.name);
    liste = bindElement(liste, name);

    let adress1 = createStandardElement("li", '', "Adresse : " + data.adress1);
    liste = bindElement(liste, adress1);

    let adress2 = createStandardElement("li", '', data.adress2);
    liste = bindElement(liste, adress2);

    let linkMail = createStandardElement("a", 'not-a-link', '', "mailto:wilfried.dias@hotmail.com");
    let mail = createStandardElement("li", '', "Mail : " + data.email);
    linkMail = bindElement(linkMail, mail);
    liste = bindElement(liste, linkMail);

    let age = createStandardElement("li", '', "Age : " + calculateAge(data));
    liste = bindElement(liste, age);

    for (i in data.more_infos) {
        let info = createStandardElement("li", '', data.more_infos[i]);
        liste = bindElement(liste, info);
    }

    let pi = createStandardElement("div", '', '');
    pi = bindElement(pi, title);
    pi = bindElement(pi, liste);

    return pi;
}

function createDev(data) {
    disp("/createDev");
    let title = createStandardElement("div", 'cv-left-title', data.competences);

    let liste = createStandardElement("ul", 'cv-personnal-info', '');
    for (i in data.liste) {
        let categorie = createStandardElement("li", '', i + " :");
        for (j in data.liste[i]) {
            let competence = createStandardElement("li", "padding-standard-left", data.liste[i][j]);
            categorie = bindElement(categorie, competence);
        }
        liste = bindElement(liste, categorie);
    }

    let dev = createStandardElement("div", '', '');
    dev = bindElement(dev, title);
    dev = bindElement(dev, liste);

    return dev;
}

function createLang(data) {
    disp("/createLang");
    let linkTitle = createStandardElement("a", 'not-a-link', '', "https://www.france-langue.fr/niveaux-de-francais/")
    let title = createStandardElement("div", 'cv-left-title', data.langues);
    linkTitle = bindElement(linkTitle, title);

    let liste = createStandardElement("ul", 'cv-personnal-info', '');
    for (i in data.liste) {
        let competence = createStandardElement("li", '', data.liste[i][0] + " : " + data.liste[i][1]);
        liste = bindElement(liste, competence);
    }

    let lang = createStandardElement("div", '', '');
    lang = bindElement(lang, linkTitle);
    lang = bindElement(lang, liste);

    return lang;
}

function createHobbies(data) {
    disp("/createHobbies");
    let title = createStandardElement("div", 'cv-left-title', data.hobbies);

    let liste = createStandardElement("ul", 'cv-personnal-info', '');
    for (i in data.liste) {
        let hobbie = createStandardElement("li", '', data.liste[i]);
        liste = bindElement(liste, hobbie);
    }

    let hobbies = createStandardElement("div", '', '');
    hobbies = bindElement(hobbies, title);
    hobbies = bindElement(hobbies, liste);

    return hobbies;
}