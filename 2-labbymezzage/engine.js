"use strict";
var init;
var messages;
var addMsg;
var renderMsg;
var send;
var msg;
var newMsg;

var messageBoard = {
    
    messages : [],
    
    init : function () {
        send = document.getElementById("sendbutton");
        msg = document.getElementById("textarea");
        send.onclick = messageBoard.addMsg;
    },
    
    addMsg : function () {
        newMsg = new Message(msg.nodeValue, new Date());
        messageBoard.messages.push(newMsg);
    },
    
    renderMsg : function () {
        
    }
};

window.onload = messageBoard.init;