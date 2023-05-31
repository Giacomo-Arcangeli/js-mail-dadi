// recupero gli elementi in pagina
const nameElement = document.getElementById('name');
const playButton = document.getElementById('play');
const playerResult = document.getElementById('player-result');
const cpuResult = document.getElementById('cpu-result');
const finalResult = document.getElementById('result');

// chiedo il nome al giocatore
const playerName = prompt('Nome del giocatore' , 'Giacomo');

// lo inserisco nell'elemento
nameElement.innerText = playerName;

// funzioni button
playButton.addEventListener('click' , function(){

// numero giocatore
let playerNumber = Math.floor(Math.random() * 6) + 1;
playerResult.innerText = 'Hai realizzato: ' + playerNumber;
console.log(playerResult);

// numero cpu
let cpuNumber = Math.floor(Math.random() * 6) + 1;
cpuResult.innerText = 'La CPU ha realizzato: ' + cpuNumber;
console.log(cpuResult);

// scrivo i risultati
    if(playerNumber > cpuNumber){
        finalResult.innerText = 'Hai vinto!'
    } else if(playerNumber < cpuNumber){
        finalResult.innerText = 'Hai perso...riprova!'
    } else{
        finalResult.innerText = 'Pareggio!'
    }
        console.log(finalResult);
})
    
