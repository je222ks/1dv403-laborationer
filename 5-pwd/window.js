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
            topBar.setAttribute("class", "topbar");
            
            // Upper thumbnail img
            var upperThumb = document.createElement("img");
            upperThumb.setAttribute("src", "pics/imgthumb.png");
            upperThumb.setAttribute("class", "upperthumb");
            
            // Tooltip
            var toolTip = document.createElement("p");
            toolTip.innerHTML = "Image Viewer";
            toolTip.setAttribute("class", "tooltip");
            
            // Closebutton
            var closeWin = document.createElement("a");
            closeWin.setAttribute("href", "#");
            closeWin.setAttribute("id", "shutwin");
            closeWin.onclick = function (e) {
                imageWindow.closeWindow();
                return false;
            }
            
            var dltButton = document.createElement("img");
            dltButton.setAttribute("src", "pics/closebutton.png");
            dltButton.setAttribute("class", "closewin");
            
            closeWin.appendChild(dltButton);
            
            topBar.appendChild(upperThumb);
            topBar.appendChild(toolTip);
            topBar.appendChild(closeWin);
            
            // Status field
            var statusField = document.createElement("div");
            statusField.setAttribute("class", "statusfield");
            
            windowDiv.appendChild(topBar);
            windowDiv.appendChild(statusField);
            
            document.getElementById("mainBG").appendChild(windowDiv);
        }
    },
    
    closeWindow : function () {
        console.log("asd"); 
        var shutWindow = document.getElementById("windowdiv");
        shutWindow.parentNode.removeChild(shutWindow);
    }
    
};