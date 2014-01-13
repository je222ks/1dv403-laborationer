"use strict";

var Application = {
    
    init : function () {
        var renderDesk = Desktop.renderDesktop();
    },
    
    fetchData : function (url, callback) {
        var incData = new XMLHttpRequest();
        
        incData.onreadystatechange = function () {
            if (incData.readyState === 4) {
                if (incData.status >= 200 && incData.status < 300 || incData.status === 304) {
                    callback(incData.responseText);
                    imageWindow.clearLoading();
                } else {
                    console.log("Läsfel, status: " + incData.status);
                }
            }
        }
        
        incData.open("get", url, true);
        
        incData.send(null);
        setTimeout(function () {
            if(incData.responseText){
                return false;
            }
            else {
                imageWindow.renderLoading();
            }
        }, 300);
    },
    
    changeBackground : function (url, coll) {
        // Möjligen väldigt dumt sätt att lösa det? Känndes väldigt omständigt...
        var desk = document.getElementById("mainBG");
        for(var i = 0; i < coll.length; i += 1){
            if(coll[i]["thumbURL"] === url){
                var bg = coll[i]["URL"];
            }
        }
        desk.setAttribute("style", "background: url(" + bg + ")");
        
    }
    
};

window.onload = Application.init;


