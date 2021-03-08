// l'utente sceglie pari o dispari
// inserisce un numero da 1 a 5
// il computer genera un random da 1 a 5
// confrontare la somma e decretiamo chi ha vinto

// var scelta = prompt("Pari o dispari")

function numeroRandom(min, max)
{
  var numeroComputer = Math.floor(Math.random() * max) + min;
  return numeroComputer;
}

var numeroCpu = numeroRandom(1, 5);
console.log(numeroCpu);


// ------------------------- //


function sommaNumeri(n1, n2)
{
  var risultato = n1 + n2;
  return risultato;
}

var somma = sommaNumeri(10, 20);
console.log(somma);