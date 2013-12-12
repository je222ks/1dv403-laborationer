"use strict";

var Memory = {
    
    playBoard : null, 

    init : function () {    
        var rowInput = 4;
        var colInput = 4;
        
        Memory.playBoard = RandomGenerator.getPictureArray(rowInput, colInput);
        Memory.renderBoard();
    },
    
    renderBoard : function () {
        var i;
        var memoryContainer = document.createElement("div");
        memoryContainer.className = "gamecontainer";
        var memoryImg;
        var imgLink;
        var gamePiece = 0;
        
        for (i = 0; i < Memory.playBoard.length; i +=1 ){
            memoryImg = document.createElement("img");
            memoryImg.setAttribute("src", "pics/0.png");   
            
            imgLink = document.createElement("a");
            imgLink.setAttribute("href", "#");
        
            imgLink.appendChild(memoryImg);
        
            memoryContainer.appendChild(imgLink);
            
            gamePiece += 1;
            
            Memory.flipImage(gamePiece, imgLink);
        }
        
        document.body.appendChild(memoryContainer);
    },
    
    flipImage : function (piece, link) {
        
    }
    
};
              
window.onload = Memory.init;