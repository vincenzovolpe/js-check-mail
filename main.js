// Creazione di una lista email fittizia mediante array di stringhe
var listamail= ['pincopallina@gmail.com','tizioecaio@gmail.com','romeoegiulietta@gmail.it', 'cazzarola@gmail.it', 'topolino2010@yahoo.com'];

// Espressione regolare che controlla la validità sintattica dell'email inserita
var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// dichiaro una variabile con la risposta imposta a true per far partire il ciclo
var rispostautente = true;
while (rispostautente) {
    // Mostriamo titolo della ricerca
    document.getElementById("titolo").innerHTML = "DATABASE DELLE EMAIL";
    // Richiesta email all'utente
    var mailutente = prompt("Per favore digita l'email da cercare");
    // verifico se l'email è scritta correttamente altrimenti chiedo di riprovare a scriverla
    var v = reg.test(mailutente);
    while (!v) {
        // Chiedo all'utente se vuole riprovare a inserire  l'email
        rispostautente = confirm("Attenzione il formato dell'email che hai inserito non è valido. Vuoi riprovare a cercare?");
        if (rispostautente) {
            mailutente = prompt("Per favore digita di nuovo l'email da cercare");
            v = reg.test(mailutente);
        } else {
            alert('Hai scelto di smettere la ricerca, torna a trovarci in un altro momento');
            break; // Esco dal for in quanto l'utente non vuole più cercare
        }
    }

    /* Procedo nella ricerca solo se l'utente ha scritto correttamente l'email o ha deciso di continuare la ricerca e successivamente scrive correttamente l'email */
    if (v || rispostautente) {
        // Controllo esistenza email digitata dall'utente all'interno dell' array di email
        var trovata = false; // dichiaro una variabile di controllo impostata a false
        for (i = 0; i < listamail.length; i++) {
            //if (listamail[i].match(mailutente)) { ricerca con funzione match
            if (listamail[i] == mailutente) { // ricerca con operatore di uguaglianza
                var trovata = true; // imposto la variabile di controllo a true
                document.getElementById("risultato").innerHTML = "La tua email è presente nel nostro database.";
                document.getElementById("risultato").style.color = "green";
                break; // Esco dal for in quanto l'email è stata trovata
            }
        }
        // Stampo messaggio esito negativo della ricerca
        if (!trovata) {
            document.getElementById("risultato").innerHTML = "Siamo spiacenti ma la tua email non risulta presente nel nostro database";
            document.getElementById("risultato").style.color = "red";
        }
        rispostautente = confirm('Vuoi cercare un altra email?');
    }
}
