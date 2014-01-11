"use strict";

var Desktop = {
    
    renderDesktop : function () {
        var mainBG = document.createElement("div");
        mainBG.setAttribute("id", "mainBG");
        
        var menuField = document.createElement("div");
        menuField.setAttribute("id", "menufield");
        
        var menuChoice = document.createElement("a");
        menuChoice.setAttribute("href", "#");
        menuChoice.setAttribute("id", "imgview");
        
        var menuThumb = document.createElement("img");
        menuThumb.setAttribute("src", "imgthumb.png");
        menuThumb.setAttribute("id", "menuthumb");
        menuChoice.appendChild(menuThumb);
        
        menuField.appendChild(menuChoice);
        mainBG.appendChild(menuField);
        document.body.appendChild(mainBG);
    }
    
};