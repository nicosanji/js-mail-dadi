// ESERCIZIO MAIL

// Array = lista email nel sistema
const listaMail = ["mario.rossi@gmail.com", "giuseppe.verdi@gmail,com", "valeria.bianchi@gmail.com"];

// Variabile dichiarata false (valore booleano)
let mailEsiste = false;

// Chiedi all’utente la sua email
const mailUtente = prompt("Inserisci la tua e-mail");

// Ciclo delle mail, controlla tutte le mail 

for (let i = 0; i < listaMail.length; i++) {
    const emailCorrente = listaMail[i];
    if (emailCorrente === mailUtente) {
        mailEsiste = true;
    }
}

// Messaggio sull'esito del controllo (alert)

if (mailEsiste) {
    alert("Mail trovata. Utente già registrato !");
} else {
    alert("Mail non trovata. Registrati !");
}