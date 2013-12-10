"use strict";
var init;
var messages;
var addMsg;
var renderMsg;
var renderMsges;
var deleteMsg;
var send;
var msg;
var newMsg;
var msgList;

var messageBoard = {
    
    messages : [],
    
    init : function () {
        send = document.getElementById("sendbutton");
        
        msgList = document.getElementById("msglist");
        send.onclick = messageBoard.addMsg;
    },
    
    addMsg : function () {
        msg = document.getElementById("textarea").value;
        newMsg = new Message(msg, new Date());
        messageBoard.messages.push(newMsg);
        messageBoard.renderMsges();
    },
    
    renderMsg : function (messageID) {
        var text = document.createElement("p");
        text.innerHTML = messageBoard.messages[messageID].getHTMLText();
        
        // Skapar en div-tag för meddelandet.
        var msgContainer = document.createElement("div");
        msgContainer.className = "newmessage";
        msgContainer.appendChild(text);
        
        msgList.appendChild(msgContainer);
        
        // Renderar räknaren.
        var counter = document.getElementById("counter");
        counter.innerHTML = "Antal meddelanden: " + messageBoard.messages.length;
    },
    
    renderMsges : function () {
        document.getElementById("msglist").innerHTML = "";
        for (var i = 0; i < messageBoard.messages.length; i += 1){
            messageBoard.renderMsg(i);
        }
    },
    
    deleteMsg : function () {
        // Skapar bilden
        var delButtton = document.createElement("img");
        delButtton.setAttribute("src", "delete.png");
        // Skapar dess länk
        var delLink = document.createElement("a");
        delLink.setAttribute("href", "#");
        delLink.className = "button";
        delLink.appendChild(delButtton);
    }
};

window.onload = messageBoard.init;