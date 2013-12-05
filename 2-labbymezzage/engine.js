"use strict";
var init;

var messageBoard = {
    init : function(){
        var mess = new Message("Test", new Date());
        alert(mess);
        alert(mess.getText());
        mess.setText("En annan text");
        alert(mess);
    }
    
}
window.onload = messageBoard.init;

