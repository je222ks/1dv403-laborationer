"use strict";
var messageBoard = {
    
    messages : [],
    
    init : function () {
        var send = document.getElementById("sendbutton");
        var msgList = document.getElementById("msglist");
        send.onclick = messageBoard.addMsg;
        
        // Funktionaliteten för enter-tangenten.
        document.getElementById("textarea").onkeydown = function (e) {
            if (!e) {
                var e = window.event;
            }
            
            if (e.keyCode === 13 && e.shiftKey === false) {
                messageBoard.addMsg();
                return false;
            }
        };
    },
    
    addMsg : function () {
        var msg = document.getElementById("textarea").value;
        var newMsg = new Message(msg, new Date());
        messageBoard.messages.push(newMsg);
        messageBoard.renderMsges();
    },
    
    renderMsg : function (messageID) {
        var text = document.createElement("p");
        text.innerHTML = messageBoard.messages[messageID].getHTMLText();
        
        // Skapar en div-tag för "meddelandetexten"
        var textContainer = document.createElement("div");
        textContainer.className = "textcontainer";
        textContainer.appendChild(text);
        
        // Skapar en div-tag för meddelandet.
        var msgContainer = document.createElement("div");
        msgContainer.className = "newmessage";
        msgContainer.appendChild(textContainer);
        
        var buttonContainer = document.createElement("div");
        buttonContainer.className = "buttoncontainer";
        
        // Skapar bilden
        var delButtton = document.createElement("img");
        delButtton.setAttribute("src", "delete.png");
        // Skapar dess länk
        var delLink = document.createElement("a");
        delLink.setAttribute("href", "#");
        delLink.className = "button";
        delLink.appendChild(delButtton);
        
        // Skapar bilden
        var clockButton = document.createElement("img");
        clockButton.setAttribute("src", "clock.png");
        // Skapar dess länk
        var clockLink = document.createElement("a");
        clockLink.setAttribute("href", "#");
        clockLink.className = "button";
        clockLink.appendChild(clockButton);
        
        // Tidsstämpel
        var timeOfCreation = document.createElement("p");
        timeOfCreation.className = "time";
        timeOfCreation.appendChild(document.createTextNode(messageBoard.messages[messageID].getDate().toLocaleTimeString()));
        
        // "Lägger in" knapparna i dess element.
        buttonContainer.appendChild(delLink);
        buttonContainer.appendChild(clockLink);
        // Lägger in tidsstämpeln i samma div som knapparna för att underlätta senare formatering.
        buttonContainer.appendChild(timeOfCreation);
        msgContainer.appendChild(buttonContainer);
        
        (document.getElementById("msglist")).appendChild(msgContainer);
        
        // Alt-text till knapparna och dess event.
        delButtton.setAttribute("alt", "Radera");
        delButtton.onclick = function () {
            messageBoard.deleteMsg(messageID);
        };
        
        clockButton.setAttribute("alt", "Tiden för skapande");
        clockButton.onclick = function () {
            messageBoard.showTime(messageID);
        };
        
        // Renderar räknaren.
        var counter = document.getElementById("counter");
        counter.innerHTML = "Antal meddelanden: " + messageBoard.messages.length;
    },
    
    renderMsges : function () {
        document.getElementById("msglist").innerHTML = "";
        document.getElementById("textarea").value = "";
        for (var i = 0; i < messageBoard.messages.length; i += 1){
            messageBoard.renderMsg(i);
        }
    },
    
    deleteMsg : function (messageID) {
        var confirmation = confirm("Är Ni säker på att Ni vill ta bort detta meddelande?")
        if(confirmation){
            messageBoard.messages.splice(messageID, 1);
        }
        else{
            alert("Meddelandet har ej tagits bort.");
        }
        messageBoard.renderMsges();
    },
    
    showTime : function (messageID) {
        alert("Inlägget skapades " + messageBoard.messages[messageID].getDate().toLocaleDateString() + " klockan " +                messageBoard.messages[messageID].getDate().toLocaleTimeString());
    }
};

window.onload = messageBoard.init;