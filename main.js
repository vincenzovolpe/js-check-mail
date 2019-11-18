// Creazione di una lista email fittizia mediante array di stringhe
var listamail= ['pincopallina@gmail.com','tizioecaio@gmail.com','romeoegiulietta@gmail.it', 'cazzarola@gmail.it', 'topolino2010@yahoo.com'];

// Espressione regolare che controlla la validità sintattica dell'email inserita
var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// dichiaro una variabile con la risposta imposta a true per far partire il ciclo
var rispostautente = true;
while (rispostautente) {
    document.getElementById('risultato').setAttribute("class", "notvisible");
    // Mostriamo titolo della ricerca
    document.getElementById("titolo").innerHTML = "DATABASE DELLE EMAIL";
    // Richiesta email all'utente
    var mailutente = prompt("Per favore digita l'email da cercare");
    // verifico se l'email è scritta correttamente altrimenti chiedo di riprovare a scriverla
    var v = reg.test(mailutente);
    while (!v && rispostautente) {
        // Chiedo all'utente se vuole riprovare a inserire  l'email
        document.getElementById('messaggio').setAttribute("class", "visible");
        document.getElementById("messaggio").innerHTML = "Attenzione il formato dell'email che hai inserito non è valido";
        document.getElementById("messaggio").style.color = "purple";
        rispostautente = confirm("Vuoi riprovare a cercare?");
        if (rispostautente) {
            document.getElementById('messaggio').setAttribute("class", "notvisible");
            mailutente = prompt("Per favore digita di nuovo l'email da cercare");
            v = reg.test(mailutente);
        } else {
            rispostautente = false;
        }
    }

    /* Procedo nella ricerca solo se l'utente ha scritto correttamente l'email o ha deciso di continuare la ricerca e successivamente scrive correttamente l'email */
    if (v || rispostautente) {
        // Controllo esistenza email digitata dall'utente all'interno dell' array di email
        var trovata = false; // dichiaro una variabile di controllo impostata a false
        for (i = 0; (i < listamail.length) && (trovata = false); i++) {
            //if (listamail[i].match(mailutente)) { ricerca con funzione match
            if (listamail[i] == mailutente) { // ricerca con operatore di uguaglianza
                var trovata = true; // imposto la variabile di controllo a true
                document.getElementById('risultato').setAttribute("class", "visible");
                document.getElementById("risultato").innerHTML = "La tua email è presente nel nostro database.";
                document.getElementById("risultato").style.color = "green";
            }
        }
        // Stampo messaggio esito negativo della ricerca
        if (!trovata) {
            document.getElementById('risultato').setAttribute("class", "visible");
            document.getElementById("risultato").innerHTML = "Siamo spiacenti ma la tua email non risulta presente nel nostro database";
            document.getElementById("risultato").style.color = "red";
        }
        rispostautente = confirm('Vuoi cercare un altra email?');
    }
}
document.getElementById('risultato').setAttribute("class", "notvisible");
document.getElementById('messaggio').innerHTML = "Hai scelto di smettere la ricerca, torna a trovarci in un altro momento";
document.getElementById("messaggio").style.color = "purple";
