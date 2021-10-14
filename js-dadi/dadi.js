// ESERCIZIO DADI

// 2 Variabili per generare un numero random (1-6) sia per l'utente che per il pc

const dadoUtente = Math.ceil(Math.random() * 6);
const dadoPc = Math.ceil(Math.random() * 6);


// Mostro in console i risultati dei 2 dadi
console.log(dadoUtente, dadoPc);

// Creo le condizioni per vittoria/pareggio/sconfitta, con un output in console
if (dadoUtente > dadoPc) {
    console.log("Complimenti ! Hai vinto !");

} else if (dadoUtente === dadoPc) {
    console.log("E' un pareggio !");

} else {
    console.log("Peccato ! Il Pc ti ha battuto !");
}