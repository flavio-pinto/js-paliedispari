console.log('INIZIO PRIMO ESERCIZIO');

/**
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
 */

var parolaUtente = prompt('Inserisci una parola');
parolaUtente = parolaUtente.charAt(0).toLocaleLowerCase() + parolaUtente.slice(1);
var parolaAlContrario = invertiParola(parolaUtente);

console.log(parolaUtente);
console.log(parolaAlContrario);

if (parolaUtente == parolaAlContrario) {
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


console.log('INIZIO SECONDO ESERCIZIO');



/**
 * L’utente sceglie pari o dispari e un numero da 1 a 5
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto.


var sceltaUtente = prompt('Pari o dispari?');
console.log('Hai scelto ' + sceltaUtente);

var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
var numeroCpu = giocataCpu();
var risultato = '';

console.log('Tu hai puntato ' + numeroUtente);
console.log('La cpu ha puntato ' + numeroCpu);

var totale = numeroUtente + numeroCpu;

console.log('Il totale è ' + totale);


if (totale % 2 == 0) {
    risultato = 'Pari';
} else {
    risultato = 'Dispari';
}

console.log(risultato);

if (sceltaUtente == risultato) {
    console.log('Complimenti, hai vinto!');
} else {
    console.log('Mi spiace, hai perso!');
}

function giocataCpu() {
    var numeroCpu = Math.floor(Math.random() * (5 - 1)) + 1;

    return numeroCpu;
}
 */