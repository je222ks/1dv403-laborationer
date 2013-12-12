"use strict";

var Memory = {
    
    playBoard : null, // array för den slumpade arrayen.
    
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
        var gamePiece = 0; // används för att hålla koll på brickorna.
        
        for (i = 0; i < Memory.playBoard.length; i +=1 ){
            memoryImg = document.createElement("img");
            memoryImg.setAttribute("src", "pics/0.png");   
            
            imgLink = document.createElement("a");
            imgLink.setAttribute("href", "#");
        
            imgLink.appendChild(memoryImg);
        
            memoryContainer.appendChild(imgLink);
            
            Memory.flipImage(gamePiece, imgLink);
            
            gamePiece += 1;
        }
        
        document.body.appendChild(memoryContainer);
    },
    
     pieceChecker : [], // för senare jämförelse av brickor.

    flipImage : function (piece, a) {
        a.onclick = function () {
            document.getElementsByTagName("img")[piece].setAttribute("src", "pics/"+ Memory.playBoard[piece] +".png");
            
            Memory.pieceChecker.push(a);
            
            if(Memory.pieceChecker.length === 2){
                setTimeout(function () {
                    // Skall anropa en ytterligare funktion för att jämföra bilderna.
                }, 1000);
            }
        }
        
        
    }
    
};
              
window.onload = Memory.init;