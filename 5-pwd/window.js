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
            windowDiv.onload = Application.fetchData("http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", imageWindow.addContent);
            
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
            };
            
            var dltButton = document.createElement("img");
            dltButton.setAttribute("src", "pics/closebutton.png");
            dltButton.setAttribute("class", "closewin");
            
            closeWin.appendChild(dltButton);
            
            topBar.appendChild(upperThumb);
            topBar.appendChild(toolTip);
            topBar.appendChild(closeWin);
            
            // Contentfield
            var content = document.createElement("div");
            content.setAttribute("id", "wincont");
            
            // Status field
            var statusField = document.createElement("div");
            statusField.setAttribute("class", "statusfield");
            
            windowDiv.appendChild(topBar);
            windowDiv.appendChild(content);
            windowDiv.appendChild(statusField);
            
            document.getElementById("mainBG").appendChild(windowDiv);
        }
    },
    
    closeWindow : function () {
        console.log("asd"); 
        var shutWindow = document.getElementById("windowdiv");
        shutWindow.parentNode.removeChild(shutWindow);
    },
    
    addContent : function (response) {
        var imgCollection = JSON.parse(response);
        console.log(imgCollection);
        
        var sortedImgsWidth = [];
        var sortedImgsHeight = [];
        
        for (var i = 0; i < imgCollection.length; i += 1) {
            sortedImgsWidth[i] = imgCollection[i].thumbWidth;
            sortedImgsHeight[i] = imgCollection[i].thumbHeight;
        }
        
        function sortDescending (a, b) {
            return b - a;
        }
        
        sortedImgsWidth.sort(sortDescending);
        
        sortedImgsHeight.sort(sortDescending);
        
        console.log(sortedImgsWidth);
        console.log(sortedImgsWidth[0]);
        
        for (var i = 0; i < imgCollection.length; i += 1){  
            var div = document.createElement("div");
            div.setAttribute("style", "width:" + sortedImgsWidth[0] + "px");
            div.setAttribute("style", "height" + sortedImgsHeight[0] + "px");
            div.setAttribute("class", "imgcont");
            
            var a = document.createElement("a");
            a.setAttribute("href", "#");       
            a.onclick = function(e) {
                return false;
            }
            
            var img = document.createElement("img");
            img.setAttribute("src", imgCollection[i].thumbURL);
            //img.setAttribute("style", "width:" + sortedImgsWidth[0] + "px");
            //img.setAttribute("style", "height" + sortedImgsHeight[0] + "px");
            //img.setAttribute("class", "imgcont");
            
            a.appendChild(img);
            div.appendChild(a);
            document.getElementById("wincont").appendChild(div);
        }
        
    }
    
};