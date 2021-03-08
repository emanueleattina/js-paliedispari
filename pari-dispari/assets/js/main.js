// l'utente sceglie pari o dispari
// inserisce un numero da 1 a 5
// il computer genera un random da 1 a 5
// confrontare la somma e decretiamo chi ha vinto

var computer = numeroRandom(1, 5);
console.log(computer);

var utente = numeroUtente();
console.log(utente);

var somma = sommaNumeri(utente, computer);
console.log(somma);



function numeroRandom(min, max)
{
  var computer = Math.floor(Math.random() * max) + min;
  return computer;
}

function numeroUtente()
{
  do
  {
    var utente = parseInt(prompt("Inserisci il tuo numero"));

    if (utente < 5 || utente > 1)
    {
      alert("Il numero inserito non è compreso fra 1 e 5")
    }
  } while(utente > 5 || utente < 1);
  return utente;
}

function sommaNumeri(utente, computer)
{
  var somma = utente + computer;
  return somma;
}

