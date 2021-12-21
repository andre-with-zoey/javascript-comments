// An object to store all the data
const context = {};

// dit is de code van een vriend van me die ik heb gekregen

window.onload = function() {

    var func = function properties() {

      console.log("ready");

      var controller = document.querySelectorAll('[bit-data]');
      console.log(controller);

      var tags = document.querySelectorAll('[bit-data-bind]');
      console.log(tags);

      // snap niet precies hoe de foreach hier werkt en waar hij al die informatie vandaan haalt.
      // als het goed is var bind een array door = [], maar weet niet precies wat node.attributes is en als het goed is node.attributes de waarde var bind en bit-data-bind vanuit de html bestand komt.
      var bind = [];
      tags.forEach((node) => {
        bind[node.attributes["bit-data-bind"].value] = node;
      });

      // weet niet precies wat al deze variabele zijn en wat ze doen in de code.
      var jokespot = bind["grap"];
      var timma = bind["timer"];
      var grap = bind["grap"];
      var tijd = 0;

      // deze function is voor de secondes die om op de webpagina te zien krijg
      var intervalID = setInterval(function() {
        tijd++;
        timma.innerText = tijd + " seconden";
      }, 1000, tijd);
      
      // snap niet precies hoe de foreach hier werkt en waar hij al die informatie vandaan haalt.
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