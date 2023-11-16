//kontakt med alla knappar + listan
const underTitle = document.getElementById('under-title');

//const startBtn = document.getElementById('start-game');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissors');
const resultList = document.getElementById('results-list');

const winScore = document.getElementById('won');
const looseScore = document.getElementById('lost');
const tieScore = document.getElementById('tie');
const messageDiv = document.getElementById('message-div')

const resultMessage = document.createElement('h3');

const restartBtn = document.createElement('button');
restartBtn.classList.add('restart-btn');
restartBtn.textContent = 'Restart Game?';

let computerFighter;
let computerNumber;
let userFighter;

let wins = 0;
let losts = 0;
let ties = 0;

//ANROPAS FRÅN START
computerChooses();

//****FUNCTIONS**** */

//väljer en siffra 1-3 --> tilldelas ett värde
function computerChooses(){
    computerNumber = Math.floor(Math.random() * 3) + 1;
    underTitle.textContent = 'Computer has chosen a fighter!';
    switch (computerNumber){
        case 1:
            computerFighter = 'Rock';
            console.log(computerFighter);
            break;
        case 2:
            computerFighter = 'Paper';
            console.log(computerFighter);
            break;
        case 3:
            computerFighter = 'Scissors';
            console.log(computerFighter);
            break;
        
    }
}

//lägger till vinst-resultat
function winResults(){
    wins ++;
    winScore.textContent = `Won: ${wins}`;
    console.log(`user : ${userFighter}`);
    const listElement = document.createElement('li');
    listElement.textContent = `You won! ${userFighter} beats ${computerFighter}! `;
    resultList.appendChild(listElement);
}

//lägger till förlust-resultat
function looseResults(){
    losts ++;
    looseScore.textContent = `Lost: ${losts}`;
    console.log(`user : ${userFighter}`);
    const listElement = document.createElement('li');
    listElement.textContent = `You lost! ${computerFighter} beats ${userFighter}! `;
    resultList.appendChild(listElement);
}
//lägger till oavgjort-resultat
function tieResults(){
    ties ++;
    tieScore.textContent = `Ties: ${ties}`;
    console.log(`user : ${userFighter}`);
    const listElement = document.createElement('li');
    listElement.textContent = `It's a tie! You both chose ${userFighter}.`;
    resultList.appendChild(listElement);
}

//kollar resultatet för vinst/förlust
function checkResults(){
    if(wins == 5){
        resultMessage.textContent = 'YOU WIN!'
        messageDiv.appendChild(resultMessage);
        messageDiv.appendChild(restartBtn);
        //disabled alla knappar
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }

    if(losts == 5){
        resultMessage.textContent = 'YOU LOOSE!'
        messageDiv.appendChild(resultMessage);
        messageDiv.appendChild(restartBtn);
        //disabled alla knappar
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }
}

//****BUTTONS**** */

//varje knapp jämför spelarens och datorns val --> uppdaterar resultatet av varje runda
rockBtn.addEventListener('click', function(){
    userFighter = 'Rock';

    if (computerFighter == 'Scissors'){
        winResults();

    } else if (userFighter == computerFighter){
        tieResults();
    }
    else {
        looseResults();
    }

    checkResults();
    computerChooses();
})

paperBtn.addEventListener('click', function(){
    userFighter = 'Paper';

    if (computerFighter == 'Rock'){
        winResults();
    } else if (userFighter == computerFighter){
        tieResults();
    }
    else {
        looseResults();
    }

    checkResults();
    computerChooses();
})

scissorBtn.addEventListener('click', function(){
    userFighter = 'Scissors';

    if (computerFighter == 'Paper'){
        winResults();
    } else if (userFighter == computerFighter){
        tieResults();
    }
    else {
        looseResults();
    }

    checkResults();
    computerChooses();
})


//laddar om sidan --> startar om spelet
restartBtn.addEventListener('click', function(){
    location.reload();
})