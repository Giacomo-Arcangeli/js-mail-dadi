// prendo gli elementi dal dom
const emailElement = document.getElementById('email');
const buttonElement = document.querySelector('button');
const messageElement = document.getElementById('message');

// preparo una lista di email autorizzate
const allowedEmails = ['giacomo@live.it' , 'matteo@live.it' , 'luca@live.it'];

// al click del bottone...
buttonElement.addEventListener('click' , function(){

    // preparo un messaggio
    let isAllowed = false;

    // raccolgo il valore dell'input
    const userEmail = emailElement.value.trim();

    // controllo le mail dentro la lista
    for(let i = 0; i < allowedEmails.length && isAllowed === false; i++){
        const email = allowedEmails[i];
        console.log('mail del giro corrente: ' , email);
        console.log('mail inserita dall\'utente: ' , userEmail);
        if(email === userEmail){
            isAllowed = true;
        }
    }

    // stampo il messaggio
    const result = isAllowed ? 'Sei autorizzato' : 'Non sei autorizzato';
    messageElement.innerText = result;

})