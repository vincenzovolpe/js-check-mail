// Creazione di una lista email fittizia

var listamail= ['pincopallina@gmail.com','tizioecaio@gmail.com','romeoegiulietta@gmail.it', 'cazzarola@gmail.it', 'topolino2010@yahoo.com'];
console.log(listamail);

// Richiesta email all'utente
var mailutente = prompt('Per favore digitala tua email');
console.log("Questa è l'email inserita dall'utente: " + mailutente);


// Controllo esistenza email digitata dall'utente all'interno del nostro array di email
var trovata = false; // dichiaro una variabile di controllo impostata a false
for (i = 0;  i < listamail.length; i++)
{
    //if (listamail[i].match(mailutente)) { ricerca con funzione match
    if (listamail[i] == mailutente) { // ricerca con operatore di uguaglianza
        var trovata = true; // imposto la variabile di controllo a true
        console.log("La tua email è presente nel nostro database");
        console.log('Posso uscire dal ciclo di ricerca for');
        break;
    }
    console.log("Nella posizione: " + i + " ho trovato l'email " + listamail[i]);
}
// Stampo messaggio esito negativo della ricerca
if (!trovata) {
    console.log('Siamo spiacenti ma la tua email non risulta presente nel nostro database');
}
