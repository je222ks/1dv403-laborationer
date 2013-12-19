"use strict";

var Validator = {

    // "Laddar in" formuläret
    form : document.getElementById("payform"),
    
    firstName : document.forms[0]["firstName"],
    lastName : document.forms[0]["lastName"],
    zipCode : document.forms[0]["zipCode"],
    eMail : document.forms[0]["eMail"],
    
    init : function () {
        // document.getElementById("submitbutton").disabled = true;
        
        // Förnamn
        Validator.firstName.onblur = function () {
            if (Validator.firstName.value === "") {
                var idComp = document.getElementById("msg1");
                if (!idComp){
                    errorHandler("Detta fält får inte lämnas tomt", "msg1", "fnCont");
                }
            } 
            else { // Tog en stund innan det slog mig att meddelandet även måste plockas bort då problemet är löst...
                errorDelete("msg1");
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
                // Tar bort om det finns ngt felmeddelande
                errorDelete("msg2");
            }
        };
        
        // Postkod
        Validator.zipCode.onblur = function () {
            // Lägger dess värde i en variabel för enklare justeringar senare för "glada användarvänlighet".
            var zip = Validator.zipCode.value;
            // var basic = /^\d{5}$/;                          // XXXXX
                         // Finns lr ej  // Finns lr ej
            var checkAll = /^(SE)?[\ ]?[\d]{3}(-\ )?[\d]{2}$/;
            
            // Matchar alla format
            if (zip.match(checkAll)) {
                // Tar bort om det finns ngt felmeddelande
                errorDelete("msg3");
                
                // Gör om allting till XXXXX. 
                zip = zip.replace(/(-|\ |SE)/g, "", "");
                alert(zip);
            }
            else {
                var idComp = document.getElementById("msg3");
                if (!idComp){
                    errorHandler("Postkoden är angiven på ett felaktigt sätt", "msg3", "zcCont");
                }
            }
        };
        
        // Mail
        Validator.eMail.onblur = function () {
          
            var tempMail = Validator.eMail.value;
            var comp = /^(?!\.)[\w\.-]{1,}(?!\.)@(?!\.)[a-z]+\.[a-z]{2,}$/i;
            
            if (tempMail.match(comp)) {
                // Tar bort om det finns ngt felmeddelande
                errorDelete("msg4");
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
            msg.setAttribute(id, msgID);
            msg.appendChild(errorMsg);
            var errorCont = document.getElementById(containerID);
            errorCont.appendChild(msg);
        }
        
        function errorDelete (messageID) {
            if (document.getElementById(messageID)){
                var dltMsg = document.getElementById(messageID);
                dltMsg.parentNode.removeChild(dltMsg);
            }
        }
        
        document.getElementById("submitbutton").onclick = Validator.renderPopUp;
    },
    
    
    
    renderPopUp : function (e) {
        e.preventDefault();
        
        var fadeBG = document.createElement("div");
        fadeBG.setAttribute(id, "fadeBg");
        fadeBG.className = "confirmButton";
        var popUp = document.createElement("div");
        popUp.setAttribute(id, "popup");
        popUp.className = "confirmButton";
        
        var acceptButton = document.createElement("button");
        acceptButton.setAttribute(type, "button");
        acceptButton.setAttribute(value, "Bekräfta");
    
        var cancelButton = document.createElement("button");
        cancelButton.setAttribute(type, "button");
        cancelButton.setAttribute(value, "Avbryt");
        
        popUp.appendChild(acceptButton);
        popUp.appendChild(cancelButton);
        
        document.body.appendChild(fadeBG);
        document.body.appendChild(popUp);
        
        acceptButton.onclick = function () {
            Validator.form.submit();
            Validator.form.reset();
        }
        
        cancelButton.onclick = function () {
            document.body.removeChild(fadeBG);
            document.body.removeChild(popUp);
        }
    }
};

window.onload = Validator.init;

