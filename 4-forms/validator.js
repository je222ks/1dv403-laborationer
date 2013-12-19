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
        
        // Förnamn
        Validator.firstName.onblur = function () {
            if (Validator.firstName.value === "") {
                var idComp = document.getElementById("msg1");
                if (!idComp){
                    errorHandler("Detta fält får inte lämnas tomt", "msg1", "fnCont");
                }
            } 
            else { // Tog en stund innan det slog mig att meddelandet även måste plockas bort då problemet är löst...
                var dltMsg = document.getElementById("msg1");
                dltMsg.parentNode.removeChild(dltMsg);
            }
        };
        
        // Efternamn
        Validator.lastName.onblur = function () {
            if (Validator.lastName.value === "") {
                var idComp = document.getElementById("msg2");
                if (!idComp){
                    errorHandler("Detta fält får inte lämnas tomt", "msg2", "lnCont");
                }    
            }
            else {
                var dltMsg = document.getElementById("msg2");
                dltMsg.parentNode.removeChild(dltMsg);
            }
        };
        
        // Postkod
        Validator.zipCode.onblur = function () {
            // Lägger dess värde i en variabel för enklare justeringar senare för "glada användarvänlighet".
            var zip = Validator.zipCode.value;
            var basic = /^\d{5}$/;
            
            if (zip.match(basic)) {
                var dltMsg = document.getElementById("msg3");
                dltMsg.parentNode.removeChild(dltMsg);
                // Plats för senare förändring.
            }
            else {
                var idComp = document.getElementById("msg3");
                if (!idComp){
                    errorHandler("Postkoden är angiven på ett felaktigt sätt", "msg3", "zcCont");
                }
            }
        }
        
        // Mail
        Validator.eMail.onblur = function () {
          
            var tempMail = Validator.eMail.value;
            var comp = /^(?!\.)[\w\.-]{1,}(?!\.)@(?!\.)[a-z]*\.[a-z]{2,}$/i;
            
            if (tempMail.match(comp)) {
                var dltMsg = document.getElementById("msg4");
                dltMsg.parentNode.removeChild(dltMsg);
            }
            else {
                var idComp = document.getElementById("msg4");
                if (!idComp){
                    errorHandler("E-Postadressen är ej en giltig adress", "msg4", "emCont");
                }
            }
            
        };
        
        // Gemensam funktion för visning av felmeddelanden
        function errorHandler (errorTxt, msgID, containerID) {
            var errorMsg = document.createTextNode(errorTxt);
            // Skapar en p-tag eftersom jag inte kan styla (vad jag kom på) textnoden på samma sätt.
            var msg = document.createElement("p");
            // Klass för styling och ett id för att senare plocka bort meddelandet då inputen inte längre är tom.
            msg.className = "errorInfo";
            msg.id = msgID;
            msg.appendChild(errorMsg);
            var errorCont = document.getElementById(containerID);
            errorCont.appendChild(msg);
        }
    }
};

window.onload = Validator.init;

