"use strict";


var Validator = {

    // "Laddar in" formuläret
    form : document.getElementById("payform"),
    
    firstName : document.forms[0]["firstName"],
    lastName : document.forms[0]["lastName"],
    zipCode : document.forms[0]["zipCode"],
    eMail : document.forms[0]["eMail"],
    
    init : function () {
        document.getElementById("submitbutton").disabled = true;
        
        Validator.firstName.onblur = function () {
            if (Validator.firstName.value === "") {
                var errorMsg = document.createTextNode("Detta fält får inte lämnas tomt");
                // Skapar en p-tag eftersom jag inte kan styla (vad jag kom på) textnoden på samma sätt.
                var msg = document.createElement("p");
                // Klass för styling och ett id för att senare plocka bort meddelandet då inputen inte längre är tom.
                msg.className = "errorInfo";
                msg.id = "msg1";
                msg.appendChild(errorMsg);
                var errorCont = document.getElementById("fnCont");
                errorCont.appendChild(msg);
            }
            else{ // Tog en stund innan det slog mig att meddelandet även måste plockas bort då problemet är löst...
                var dltMsg = document.getElementById("msg1");
                dltMsg.parentNode.removeChild(dltMsg);
            }
        }
        
        Validator.lastName.onblur = function () {
            if (Validator.lastName.value === "") {
                var errorMsg = document.createTextNode("Detta fält får inte lämnas tomt");
                // Skapar en p-tag eftersom jag inte kan styla (vad jag kom på) textnoden på samma sätt.
                var msg = document.createElement("p");
                // Klass för styling och ett id för att senare plocka bort meddelandet då inputen inte längre är tom.
                msg.className = "errorInfo";
                msg.id = "msg2";
                msg.appendChild(errorMsg);
                var errorCont = document.getElementById("lnCont");
                errorCont.appendChild(msg);
            }
            else{
                var dltMsg = document.getElementById("msg2");
                dltMsg.parentNode.removeChild(dltMsg);
            }
        }
    }
};

window.onload = Validator.init;

