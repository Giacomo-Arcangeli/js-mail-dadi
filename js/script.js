// faccio una lista di mail
const mailList = ['giacomo@live.it', 'matteo@live.it', 'luca@live.it'];
console.table (mailList);

// chiedo all'utente di inserire una mail
 const userMail = prompt('Inserisci una mail');

// controllo che la mail dell'utente sia nella lista

for ( let i=0; i < mailList.length; i++){
   const mail = mailList[''];
    // SE la mail dell'utente è presente in lista
    if(userMail === mail){
        console.log('Benvenuto');
    } else{
        console.log('Mail non trovata');
    }
}