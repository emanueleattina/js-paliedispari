// chiedere all'utente una parola
// creare una funzione per verificare se la parola è palindroma

var parola;
var arrayParola = [];
var arrayReverse = [];
var i;
var check = false;

parola = prompt("Scrivi una parola:")
console.log(parola);

arrayParola = parola.split("");

for(i = 0; i < arrayParola.length; i++)
{
  arrayParola[i] = arrayParola[i].split("");
  // arrayReverse[i] = arrayParola[i];
}

console.log(arrayParola);
// console.log(arrayReverse.reverse());

for(i = 0; i < arrayParola.length; i++)
{
  if(arrayParola[i] !== arrayParola[i].reverse())
  {
    check = false;
  }
  else
  {
    check = true;
  }
}

if (check == false)
{
  alert("La parola non è palindroma");
}
else
{
  alert("La parola è palindroma");
}