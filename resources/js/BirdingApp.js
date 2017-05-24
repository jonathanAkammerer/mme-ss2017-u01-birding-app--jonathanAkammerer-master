var BirdingApp = (function () {
    //"use strict";   -> nicht mehr richtig ausführbar
    var that = {},
        controller,
        model,
        birdListView,
        birdCounterView,
        filteredBirdList = [];

    //Callbacks

    function onBirdAdded(birdName) {
        model.addBirdToDashboard(birdName);
        birdCounterView.showSelectedBirds(model.selectedBirds);
    }

    function onListFiltered(letters) {
        birdListView.showListView(model.searchBirds(letters));
        // birdListView.closeListView();
    }

    function onCountUp(birdName) {
        model.countUp(birdName);
        birdCounterView.showSelectedBirds(model.selectedBirds);
    }

    function onCountDown(birdName) {
        model.countDown(birdName);
        birdCounterView.showSelectedBirds(model.selectedBirds);
    }

    // wird im html code aufgerufen, die einzelnen "Klassen" werden initiiert
    function init() {
        initModel();
        initListView();
        initController();
        initBirdCounterView();
    }

    // birdCounter ist am anfang eine leere liste, diese wird mit content "befüllt"
    function initBirdCounterView() {
        birdCounterView = new BirdingApp.BirdCounterView({
            content: document.querySelector("#bird-counter-entry").innerHTML,
            birdCounter: document.querySelector(".bird-counter .bird-list")
        });
        birdCounterView.init();
    }

    // das Model "verwaltet" alle Vögel
    function initModel() {
        //json wird eingelesen
        jsonString = document.querySelector("#bird-list").innerHTML;
        model = new BirdingApp.BirdingModel({
            // json wird zu verarbeitbaren array geparsed und der modelklasse übergeben
            birdSpecies: JSON.parse(jsonString)
        });
        model.init();
    }

    // analog zur counterView
    function initListView() {

        birdListView = new BirdingApp.BirdListView({
            content: document.querySelector("#bird-list-entry").innerHTML,
            birdCounter: document.querySelector(".bird-gallery .bird-list")
        });
        birdListView.init();
    }

    function initController() {
        // dem Kontroller werden die 3 notwendigen Felder: Eingabefeld,Liste und Dashboard übergeben
        controller = new BirdingApp.BirdingController({
            inputField: document.querySelector(".bird-search"),
            searchList: document.querySelector(".bird-gallery .bird-list"),
            dashboard: document.querySelector(".bird-counter .bird-list")
        });
        controller.init();
        //callbacks werden aufgerufen
        controller.setAddBirdCallback(onBirdAdded);
        controller.setSearchBirdListCallback(onListFiltered);
        controller.setCountUpCallback(onCountUp);
        controller.setCountDownCallback(onCountDown);
    }

    that.init = init;
    return that;
}());