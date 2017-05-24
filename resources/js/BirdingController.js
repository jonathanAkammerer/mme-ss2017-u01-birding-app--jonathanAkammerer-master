BirdingApp.BirdingController = function (info) {
    "use strict";

    var that = {},
        addBirdCallback,
        countUpCallback,
        countDownCallback,
        searchBirdCallback,
        searchInputField,
        list,
        dashboardEntries;

    function init() {
        searchInputField = info.inputField;
        dashboardEntries = info.dashboard;
        list = info.searchList;

        searchInputField.addEventListener("input", onSearchInputFieldTyped);
        list.addEventListener("click", onAddButtonClicked);
        dashboardEntries.addEventListener("click",onCountButtonClicked);

        return that;
    }

    function onAddButtonClicked(event) {
        let birdie = event.target.parentNode.previousSibling.previousSibling.childNodes[1].innerHTML;
        addBirdCallback(birdie);
    }

    function onCountButtonClicked(event) {
        var checker;
        if (event.target.classList.contains("increase")) {
           checker = countUpCallback(event.target.parentNode.parentNode.previousSibling.previousSibling.innerHTML);
            countUpCallback(checker);
        } else {
            checker =countDownCallback(event.target.parentNode.parentNode.previousSibling.previousSibling.innerHTML);
            countDownCallback(checker);
        }
 }

    function onSearchInputFieldTyped(event) {
        searchBirdCallback(event.target.value);
    }

    function setSearchBirdListCallback(callback) {
        searchBirdCallback = callback;
    }

    function setAddBirdCallback(callback) {
        addBirdCallback = callback;
    }
    
    function setCountUpCallback(callback) {
        countUpCallback = callback;
    }

    function setCountDownCallback(callback) {
        countDownCallback = callback;
    }

    that.init = init;
    that.setAddBirdCallback = setAddBirdCallback;
    that.setCountUpCallback = setCountUpCallback;
    that.setCountDownCallback = setCountDownCallback;
    that.setSearchBirdListCallback = setSearchBirdListCallback;
    return that;
};