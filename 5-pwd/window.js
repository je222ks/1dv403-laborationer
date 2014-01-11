"use strict";

var imageWindow = {
    
    renderWindow : function () {
        if(document.getElementById("windowdiv")){
            return false;
        }
        else {
        // Whole window
        var windowDiv = document.createElement("div");
        windowDiv.setAttribute("id", "windowdiv");
        
        // Top bar
        var topBar = document.createElement("div");
        topBar.setAttribute("id", "topbar");
        
        // Status field
        var statusField = document.createElement("div");
        statusField.setAttribute("id", "statusfield");
        
        windowDiv.appendChild(topBar);
        windowDiv.appendChild(statusField);
        
        document.getElementById("mainBG").appendChild(windowDiv);
        } 
    }
    
};