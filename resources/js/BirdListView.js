BirdingApp.BirdListView = function (list) {
    var that = {},
        entryTemplateContent,
        entryNode,
        createEntryTemplate,
        birdList;

    // content wies aussieht & counter die liste
    function init() {
        // Generieren  leeres Template zum befüllen
        createEntryTemplate = _.template(list.content);
        birdList = list.birdCounter;
        return that;
    }

    function showListView(species) {
        /* Erzeugen des neu hinzuzufügenden Elements */
        entryNode = document.createElement("span");
        birdList.innerHTML = "";

        for (var i = 0; i < species.length; i++) {
            bird = species[i];
            entryNode.innerHTML = createEntryTemplate(bird);
            birdList.appendChild(entryNode.children[0]);
        }
    }
    
    // additionale idee wäre vogel aus listview zu löschen wenn er in counterview angezeigt wird
    /*
    function closeListView(){
        
        birdList.innerHTML = "";
    }
    */
    that.init = init;
    that.showListView = showListView;
    //that.closeListView = closeListView;
    return that;
};