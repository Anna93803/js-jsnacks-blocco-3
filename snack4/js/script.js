// Snack4 (Bonus)
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
//  Interrompi il ciclo appena il nome è stato trovato.

let nomiInvitati = ["Anna", "Giuseppe", "Massimiliano", "Maria"];

let nomeUtente = prompt("Scrivi il tuo nome");


for( let i = 0; i < nomiInvitati.length; i ++ ) {

    if( nomiInvitati[i] === nomeUtente ) {
        alert("Benvenuto!!");
    }else {
        alert("Mi dispiace, non sei sulla lista!");
    }
}

console.log(nomeUtente)
