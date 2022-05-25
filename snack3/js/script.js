// Snack3
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Creo la variabile i
let i = 0;

// Creo la variabile somma
let somma = 0;

// faccio un ciclo while per chiedere all'utente 5 volte di inserire il numero e poi faccio la somma
while( i < 5 ) {

    const numeroDaInserire = parseInt(prompt("Inserisci un numero"));

    somma += numeroDaInserire;

    i++;
}
console.log(somma);
