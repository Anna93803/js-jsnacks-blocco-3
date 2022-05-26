// Snack4 (Bonus)
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
//  Interrompi il ciclo appena il nome è stato trovato.

let nomiInvitati = ["Anna", "Giuseppe", "Massimiliano", "Maria"];

let nomeUtente = prompt("Scrivi il tuo nome");

// let i = 0;

for( let i = 0; i < nomiInvitati.length; i ++ ) {

    if( nomiInvitati[i] === nomeUtente ) {
        alert("Benvenuto!!");
    }else {
        alert("Mi dispiace, non sei sulla lista!");
    }
}

// while (nomeUtente === undefined && i < nomiInvitati.length) { 

//     // for( let i = 0; i < nomiInvitati.lenght; i++ ) {

//         if(nomiInvitati[i] === nomeUtente  ) {

//             alert("Benvenuto alla Festa!!");
//         }else {
//             alert("Mi Dispiace non sei sulla lista!!");
//         }

//         i++;
// }
//     console.log(nomeUtente);

//     // if (nomiInvitati[i] === nomeUtente) {

//     //     alert(`Benvenuto alla Festa ${nomeUtente}`);
//     // }
    
//     // i++;
