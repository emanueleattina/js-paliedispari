// l'utente sceglie pari o dispari
// inserisce un numero da 1 a 5
// il computer genera un random da 1 a 5
// confrontare la somma e decretiamo chi ha vinto

var scelta = prompt("Pari o dispari?");

switch (scelta)
{
  case "pari":
    scelta = "pari";
    
    break;
  case "dispari":
    scelta = "dispari";

    break;

  default:
    break;
}


// richiamo funzione per generare un numero random
var computer = numeroRandom(1, 5);
console.log(computer);

// richiamo funzione per il numero dell'utente
var utente = numeroUtente();
console.log(utente);

// richiamo funzione per sommare i due numeri
var somma = sommaNumeri(utente, computer);
console.log(somma);


if (somma %2 == 0 && scelta == "pari")
{
  alert("Hai vinto con pari")
}
else if (somma %2 !== 0 && scelta == "dispari")
{
  alert("Hai vinto con dispari")
}
else if (somma %2 == 0 && scelta == "pari")
{
  alert("Ha vinto il computer con dispari")
}
else if (somma %2 !== 0 && scelta == "dispari")
{
  alert("Ha vinto il computer con pari")
}


// funzione per generare un numero random
function numeroRandom(min, max)
{
  var computer = Math.floor(Math.random() * max) + min;
  return computer;
}

// funzione per registrare il numero dell'utente
function numeroUtente()
{
  do
  {
    var utente = parseInt(prompt("Inserisci il tuo numero"));

    if (utente > 5 || utente < 1)
    {
      alert("Il numero inserito non è compreso fra 1 e 5");
    }
  } while(utente > 5 || utente < 1);
  return utente;
}

// funzione somma
function sommaNumeri(utente, computer)
{
  var somma = utente + computer;
  return somma;
}