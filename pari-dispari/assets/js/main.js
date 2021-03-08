// l'utente sceglie pari o dispari
// inserisce un numero da 1 a 5
// il computer genera un random da 1 a 5
// confrontare la somma e decretiamo chi ha vinto

var numeroComputer;

numeroComputer = numeroRandom();
console.log(numeroRandom);

function numeroRandom(min, max)
{
  var min = 1;
  var max = 5
  numeroComputer = Math.floor(Math.random() * max) + min;
  return numeroComputer;
}
