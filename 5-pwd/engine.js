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
    
    changeBackground : function (url) {
        var desk = document.getElementById("mainBG");
        //desk.setAttribute("style", "background: url(" + url + ")");
        console.log(url);
    }
    
};

window.onload = Application.init;


