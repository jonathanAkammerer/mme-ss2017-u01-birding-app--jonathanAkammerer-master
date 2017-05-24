BirdingApp.BirdCounterView = function (list) {
    var that = {},
        birdCounter,
        entryNode,
        createEntryTemplate,
        listContent;
        
    function init() {
        listContent = list.content;
        createEntryTemplate = _.template(listContent);
        birdCounter = list.birdCounter;
    
        return that;
    }

    function showSelectedBirds(birds) {
        birdCounter.innerHTML = "";
        entryNode = document.createElement("span"); 

        for (var i = 0; i < birds.length; i++) {
            bird = birds[i];
            entryNode.innerHTML = createEntryTemplate(bird);
            birdCounter.appendChild(entryNode.children[0]);
        }
    }

    that.init = init;
    that.showSelectedBirds = showSelectedBirds;
    return that;
};
