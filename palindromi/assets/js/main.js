// chiedere all'utente una parola
// creare una funzione per verificare se la parola è palindroma

var parola = prompt("Scrivi una parola:")
console.log(parola);

function palindromo(parola)
{
  var parolaReverse = parola.split("").reverse().join("");
  return parolaReverse;
}

var parolaReverse = palindromo(parola);

if(parola == parolaReverse)
{
  alert("Palindroma");
}
else
{
  alert("Non palindroma");
}