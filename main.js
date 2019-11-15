// Creazione di una lista email fittizia
var listamail= ['pincopallina@gmail.com','tizioecaio@gmail.com','romeoegiulietta@gmail.it', 'cazzarola@gmail.it', 'topolino2010@yahoo.com'];
console.log(listamail);

// Espressione regolare che controlla la validitàdell'email inserita
var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Richiesta email all'utente
var mailutente = prompt('Per favore digita la tua email');
console.log("Questa è l'email inserita dall'utente: " + mailutente);

for (v = reg.test(mailutente); v == 0; v = reg.test(mailutente)){
    console.log("Il formato dell'email inserita non è valido");
    mailutente = prompt('Per favore digita di nuovo la tua email');
}

// Controllo esistenza email digitata dall'utente all'interno del nostro array di email
var trovata = false; // dichiaro una variabile di controllo impostata a false
for (i = 0; i < listamail.length; i++) {
    //if (listamail[i].match(mailutente)) { ricerca con funzione match
    if (listamail[i] == mailutente) { // ricerca con operatore di uguaglianza
        var trovata = true; // imposto la variabile di controllo a true
        console.log("La tua email è presente nel nostro database");
        console.log('Posso uscire dal ciclo di ricerca for');
        break; // Esco dal for in quanto l'elemento è stato trovato
    }
    console.log("Nella posizione: " + i + " ho trovato l'email " + listamail[i]);
}
// Stampo messaggio esito negativo della ricerca
if (!trovata) {
    console.log('Siamo spiacenti ma la tua email non risulta presente nel nostro database');
}
