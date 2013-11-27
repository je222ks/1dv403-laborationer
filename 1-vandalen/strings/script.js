"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
        // var answer;
		var i;
        var answer;
		
		str.split();
		
		for(i = 0; i < str.length; i += 1){
			console.log("Hej Hopp");
            
            if(str.charAt(i) === str.charAt(i).toLocaleLowerCase()){
                str += str.charAt(i).toLocaleUpperCase();
            }
            else{
                str += str.charAt(i).toLocaleLowerCase();
            }
			
			str = str.replace("A", "#");
			str = str.replace("a", "#");
		
            answer = str.concat();
        }
		
		// Returnera den konverterade strängen.
		return answer;
		
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
		try{
			if(str === null || str.length < 0){
				throw new Error("Du har inte angivit en giltig sats.");
			}
		}
		catch(Error){
			alert(Error.message);
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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};