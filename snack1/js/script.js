// Snack1
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// Creo array vuoto per inserire i numeri
const boxNumero = [];

// creo variabile per poter poi sommare i numeri che ha inserito l'utente
let sommaNumeri = 0;

// Faccio un ciclio while per chiedere all'utente di inserire un numero fino quando la somma dei numeri sia minore 50
while ( sommaNumeri < 50 ) {

    let numeroUtente = parseInt(prompt("Inserisci un numero"));

    sommaNumeri += numeroUtente;

    // pusho nell'array vuoto
    boxNumero.push(numeroUtente);

    // faccio il controllo che la somma dei numeri non superi 50 e che il l'utente inserisca un numero
    if(sommaNumeri > 50) {
        alert("Riprova!! Somma dei numeri superata!!")
    }else if (isNaN(numeroUtente)) {
        alert("Si inseriscono solo numeri!!");
    }

}
console.log(boxNumero);
console.log(sommaNumeri);
