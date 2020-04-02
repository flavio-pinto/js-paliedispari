/**
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
 */

var parolaUtente = prompt('Inserisci una parola');
var parolaAlContrario = invertiParola(parolaUtente);

console.log(parolaUtente);
console.log(parolaAlContrario);

if (parolaUtente.toLowerCase == parolaAlContrario.toLowerCase) {
    console.log('La parola è un palindromo');
} else {
    console.log('La parola non è un palindromo');
}

function invertiParola(parola) {
    var capovolgi = '';

    for (var i = parola.length -1; i >= 0; i--) {
        capovolgi += parola[i];
    }

    return capovolgi;
}








/**
 * L’utente sceglie pari o dispari e un numero da 1 a 5
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto.
 */