// An object to store all the data
const context = {};

// dit is de code van een vriend van me die ik heb gekregen

window.onload = function() {

    var func = function properties() {

      console.log("ready");
        
        /**
         * querySelectorAll zoekt binnen je html document naar ALLE elementen die de attribuut bevat genaamd bit-data. Bijvoorbeeld <input bit-data="firstname">
         * omdat hij er meerdere kan vinden is de output van de functie querySelectorAll een array
         */
      var controller = document.querySelectorAll('[bit-data]');
      console.log(controller);

        /** 
         * zelfde als hierboven. de variabele tags is dus een array van alle elementen die de attribuut bit-data-bind bevat.
         */
      var tags = document.querySelectorAll('[bit-data-bind]');
      console.log(tags);

      // snap niet precies hoe de foreach hier werkt en waar hij al die informatie vandaan haalt.
      // als het goed is var bind een array door = [], maar weet niet precies wat node.attributes is en als het goed is node.attributes de waarde var bind en bit-data-bind vanuit de html bestand komt.
      var bind = [];
        
        /**
         * omdat de variabele tags een array is, kunnen we met forEach er doorheen loopen. 
         * hier loopen we door elk element van de array heen en bouwen eigelijk een nieuwe array op: "bind"
         * we vullen de array met de "tags" uit onze html. Dit doen we zodat we in een later proces makkelijker naar een element kunnen zoeken. Bijvoorbeeld "firstname"
         * elk nieuwe element in de nieuwe array "bind" geven we een index naam. Index naam zorgt ervoor dat we makkelijk kunnen zoeken en selecteren. 
         */ 
      tags.forEach((node) => {
        bind[node.attributes["bit-data-bind"].value] = node;
      });

      // weet niet precies wat al deze variabele zijn en wat ze doen in de code.
      var jokespot = bind["grap"]; //deze variabele doet verder niks. de key "grap" komt ook niet voor in je html. je kan deze regel dus in zn geheel verwijderen
      var timma = bind["timer"]; //
      var grap = bind["grap"]; //deze variabele doet verder niks. de key "grap" komt ook niet voor in je html
      var tijd = 0;

      // deze function is voor de secondes die om op de webpagina te zien krijg
      var intervalID = setInterval(function() {
        tijd++;
        timma.innerText = tijd + " seconden";
      }, 1000, tijd);
      
      // snap niet precies hoe de foreach hier werkt en waar hij al die informatie vandaan haalt.
        /** 
         * deze foreach loopt door de gevonden input elementen. 
         * een input element of een input field is dus en text box waar je wat in kan tikken. 
         * in dit geval gaat het dus om firstname en lastname
         * aan elk van de input fields wordt een eventlistener gekoppeld. 
         * Een event listener zorgt ervoor dat je naar een event kan luisteren. Een event is een gebeurtenis zoals het klikken met je muis op een afbeelding
         * of het typen van een tekst. In de code hieronder hang je dus een event aan het intypen van tekst. Keyup wilt zeggen; zodra ik een toets indruk en loslaat. 
         * In de event listener geven we dan aan wat we willen doen zodra iemand een toets heeft ingedrukt en losgelaten; de ingedrukte toets voegen we toe aan het element van bijv <div bit-data-bind="firstname"></div>
         * en elke letter die wij in het veld van Firstname intikken willen we hier dan laten zien. bindElem.innerText += event.key zorgt ervoor dat de letters achter de bestaande tekst wordt geplakt
         */
      controller.forEach((inputElem) => {
        const key = inputElem.attributes["bit-data"].value;
        const bindElem = bind[key];
          // snap niet wat addeventlistender is.
          inputElem.addEventListener('keyup', (event) => {
            console.log(event);
            bindElem.innerText += event.key;
        });
      });
    }
    func();
  }
