"use strict";

var Application = {
    
    init : function () {
        var renderDesk = Desktop.renderDesktop();
        Application.openImageViewer();
    },
    
    openImageViewer : function () {
        console.log("as");
        var imgView = document.getElementById("imgview");
        imgView.onclick = function (e) {        
            var win = imageWindow.renderWindow();
            return false;
        };
    }
    
};

window.onload = Application.init;


