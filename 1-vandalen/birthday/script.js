"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
        console.log(date);
        
        // Googlade fram denna lösning då jag ej lyckades lösa det på något bra sätt.
        // http://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript
        if(!/^\d{4}\-\d{2}\-\d{2}/.test(date)){  
            throw new Error("Vad du angivit är ej ett giltigt formaterat födelsedatum.");
        }
        
        var userDate = new Date(date);
        var currentDate = new Date();
        var currentYear = new Date().getFullYear();
        var daysToGo = (userDate.setFullYear(currentYear) - currentDate) / 86400000; // Milliseconds to days
        
        if(daysToGo < 0){
            var nextYear = (userDate.setFullYear(currentYear += 1) - currentDate) / 86400000;
            return Math.round(nextYear);
        }
        else{
            return Math.round(daysToGo);
        }

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};