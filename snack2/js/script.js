// Snack2
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

// L'utente inserisce un numero
let numeroDaInserire = parseInt(prompt("Inserisci un numero"));

let i = 0;

// vado a fare un ciclo while finchè l'indice è minore del numeroDaInserire
while( i < numeroDaInserire ) {

    let arrayNumeri = [];

    // faccio un ciclo for per generare 10 numeri e tramite una variabile vado a generare i numero random
    for (let i = 0; i < 10; i++ ) {
    
        let numeriCasuali = Math.floor(Math.random() * 100 + 1);
    
        // poi li pusho nell array vuota
        arrayNumeri.push(numeriCasuali);
    
    }

    i++;
    console.log(arrayNumeri);
}


