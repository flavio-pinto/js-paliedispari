console.log('**********INIZIO PRIMO ESERCIZIO**********');

/**
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
 */

var parolaUtente = prompt('Inserisci una parola').trim();
parolaUtente = parolaUtente.toLowerCase();
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


console.log('**********INIZIO SECONDO ESERCIZIO**********');

/**
 * L’utente sceglie pari o dispari e un numero da 1 a 5
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto.
 */

// Scelta pari o dispari
var sceltaUtente = prompt('Pari o dispari?').toLowerCase();
console.log('Hai scelto ' + sceltaUtente);

// VALIDAZIONE: Forza l'utente a scrivere nient'altro che "pari" o "dispari"
while (sceltaUtente !== 'pari' && sceltaUtente !== 'dispari') {
    sceltaUtente = prompt('Per favore, scegli tra pari e dispari!').toLowerCase();
}

// Inserimento numero da 1 a 5
var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('Il tuo numero è ' + numeroUtente);

// VALIDAZIONE: impedisci all'utente di scrivere numeri fuori dal range 1-5 o di inserire dati non numerici
while ((numeroUtente < 1 || numeroUtente > 5) || isNaN(numeroUtente)) {
    numeroUtente = parseInt(prompt('Per favore, inserisci solo un numero da 1 a 5!'))
}

// Generazione numero random da 1 a 5 grazie alla funzione
var numeroCpu = numeroRandom(1, 5);
console.log('Il numero della cpu è ' + numeroCpu);

// Ottenere il totale
var totale = numeroUtente + numeroCpu;
console.log('La somma dei due numeri è ' + totale);

// Ottenere il risultato
var risultato = controlloPariDispari(totale);
console.log(risultato);

// Stabilire il vincitore
if (sceltaUtente == risultato) {
    console.log('Complimenti, hai vinto!');
} else {
    console.log('Mi spiace, hai perso!');
}

// Funzione per ottenere numero random
function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

// Funzione controllo pari o dispari
function controlloPariDispari(numero) {
    if(numero % 2 == 0) {
        return 'pari';
    }

    return 'dispari'
}