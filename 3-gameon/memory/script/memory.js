"use strict";

var Memory = {
    rowInput : 4,
    colInput : 4,
    pairs : 0,
    tries : 0,
    
    playBoard : null, // array för den slumpade arrayen.
    
    init : function () {    
        Memory.playBoard = RandomGenerator.getPictureArray(Memory.rowInput, Memory.colInput);
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
        a.onclick = function (e) {
            var i = 0;
            if(Memory.pieceChecker.length < 2){
                // var picOne = document.getElementsByTagName("img")[piece].setAttribute("src", "pics/"+ Memory.playBoard[piece] +".png");
                var ruta = e.target;
                ruta.setAttribute("src", "pics/"+ Memory.playBoard[piece] +".png");
                console.log(ruta);
            }
                
            Memory.pieceChecker.push(ruta);
            
            if(Memory.pieceChecker.length === 2){
                setTimeout(function () {
                    // Skall anropa en ytterligare funktion för att jämföra bilderna.
                    Memory.compareImages(Memory.pieceChecker);
                }, 1000);
            }
            return false;
        }
    },
    
    compareImages : function (compArr) {
        // lika
        console.log(compArr);
        if (compArr[0].getAttribute("src") === compArr[1].getAttribute("src") && compArr[0] !== compArr[1]){
            Memory.pairs +=1;
            Memory.pieceChecker = []; // "nollställer" arrayen, bättre sätt att lösa?
            if(Memory.pairs === ((Memory.colInput * Memory.rowInput) / 2)){
                var infoText = document.createElement("h3");
                infoText.className = "infotext";
                infoText.innerHTML = "Ni har lyckats hitta alla par. Ni behövde " + Memory.tries + " försök för att klara det.";
                document.body.appendChild(infoText);
            }
        }
        else{
            // Återställer brickorna till ursprungsbilden
            compArr[0].setAttribute("src", "pics/0.png");
            compArr[1].setAttribute("src", "pics/0.png"); 
            // console.log(compArr);
            Memory.pieceChecker = []; // "nollställer" arrayen, bättre sätt att lösa?
        }
        Memory.tries += 1;
    }
    
};
              
window.onload = Memory.init;