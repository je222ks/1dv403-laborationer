"use strict";

var Memory = {
    
    playBoard : null, 

    init : function () {    
        var rowInput = 4;
        var colInput = 3;
        
        Memory.playBoard = RandomGenerator.getPictureArray(rowInput, colInput);
        Memory.renderBoard();
    },
    
    renderBoard : function () {
        var memoryContainer = document.createElement("div");
        var memoryImg;
        var imgSrc;
        
        for (var i = 0; i < Memory.playBoard.length; i +=1 ){
            imgSrc = "pics/" + Memory.playBoard[i] + ".png";
            memoryImg = document.createElement("img");
            memoryImg.setAttribute("src", imgSrc);   
                
            memoryContainer.appendChild(memoryImg);
        }
        
        document.body.appendChild(memoryContainer);
    }
};
              
window.onload = Memory.init;