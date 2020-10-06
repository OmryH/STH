let htmlInteraction =
{
    getElement: function (id) {
        return document.getElementById(id);
    },

    setInnerHtml: function (id, value) {
        // id = '#' + id;
        $(id).html(value);
    },

    setInnerText: function(id, value){
        // id = '#' + id;
        $(id).text(value);
    },

    setButtonText: function(){

    },

    enableButton: function (id) {
        this.getElement(id).disabled = "";
    },

    disableButton: function (id) {
        this.getElement(id).disabled = "disabled";
    },

    setElementVisibility: function (id, visible) {
        if (visible) {
            this.getElement(id).style.visibility = "visible";
        } else {
            this.getElement(id).style.visibility = "hidden";
        }
    },

    getClass: function(id){
        return document.querySelector(id);
    },

    enableButtonClass: function (id) {
        let elements = document.getElementsByClassName(id);
        for (let i = 0; i < elements.length; i++) {
            elements[i].disabled = "";
        }
    }
};