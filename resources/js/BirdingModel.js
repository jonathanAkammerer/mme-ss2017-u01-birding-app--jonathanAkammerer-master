BirdingApp.BirdingModel = function (list) {
    var that = {},
        bird,
        // die übergebene geparste Vogelliste
        birdSpecies,
        //zuständig für die Listenanzeige
        filteredBirds = [],
        //zuständig für die Selectedanzeige
        selectedBirds = [];

    function init() {
        birdSpecies = list.birdSpecies;
        return that;
    }

    function countUp(birdName) {
        _.findWhere(selectedBirds, {
            latinName: birdName
        }).count++;
    }

    function countDown(birdName) {
        if (bird.count > 1) {
            _.findWhere(selectedBirds, {
                latinName: birdName
            }).count--;
        }
    }

    function addBirdToDashboard(birdName) {
        bird = _.findWhere(birdSpecies, {
            name: birdName
        });
        //Prüfung, ob vogel bereits im Dashboard
        if (selectedBirds.includes(bird)) {
            return;
        }
        //Vogel wird zum Dashboard hinzugefügt wenn nicht vorhanden
        bird.count = 1;
        selectedBirds.push(bird);
        return birdName;
    }

    function searchBirds(letters) {
        // filteredBirds wird mit jedem event wieder neu erzeugt
        filteredBirds = [];
        for (var i = 0; i < birdSpecies.length; i++) {
            var name = birdSpecies[i].name;
            if (name.toLowerCase().includes(letters.toLowerCase())) {

                filteredBirds.push(birdSpecies[i]);
            }
        }
        return filteredBirds;
    }

    function getSpecies() {
        return birdSpecies;
    }

    that.init = init;
    that.filteredBirds = filteredBirds;
    that.selectedBirds = selectedBirds;
    that.countUp = countUp;
    that.countDown = countDown;
    that.addBirdToDashboard = addBirdToDashboard;
    that.searchBirds = searchBirds;
    that.getSpecies = getSpecies;
    return that;
};
