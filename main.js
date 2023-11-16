//kontakt med alla knappar + listan
const underTitle = document.getElementById('under-title');

const startBtn = document.getElementById('start-game');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissors');
const resultList = document.getElementById('results-list');

const winScore = document.getElementById('won');
const looseScore = document.getElementById('lost');
const tieScore = document.getElementById('tie');
const scoreBoard = document.getElementById('score-message');
const messageDiv = document.getElementById('message-div')

const winMessage = document.createElement('h3');
winMessage.textContent = 'YOU WIN!'
const looseMessage = document.createElement('h3');
looseMessage.textContent = 'YOU LOOSE!'

const restartBtn = document.createElement('button');
restartBtn.classList.add('restart-btn');
restartBtn.textContent = 'Restart Game?';

let computerFighter;
let computerNumber;
let userFighter;

let wins = 0;
let losts = 0;
let ties = 0;

function computerChooses(){
    computerNumber = Math.floor(Math.random() * 3) + 1;
    console.log(computerNumber);
    underTitle.textContent = 'Computer has chosen a fighter!';
    if(computerNumber == 1){
        computerFighter = 'rock';
        console.log(computerFighter);
    }
    if(computerNumber == 2){
        computerFighter = 'paper';
        console.log(computerFighter);
    }
    if(computerNumber == 3){
        computerFighter = 'scissors';
        console.log(computerFighter);
    }
    
}


//start --> generera ett nummer 1-3 --> 1 = sten osv...
// startBtn.addEventListener('click', computerChooses());
computerChooses();


rockBtn.addEventListener('click', function(){
    userFighter = 'rock';
    console.log(`user : ${userFighter}`);
    if (computerFighter == 'scissors'){
        const listElement = document.createElement('li');
        listElement.textContent = `You chose ${userFighter} against ${computerFighter}. You won!`;
        resultList.appendChild(listElement);
        underTitle.textContent = 'Press the Start Button:';

        wins ++;
        winScore.textContent = `Won: ${wins}`;

    } else if (userFighter == computerFighter){
        const listElement = document.createElement('li');
        listElement.textContent = `You chose ${userFighter} against ${computerFighter}. It's a tie!`;
        resultList.appendChild(listElement);
        underTitle.textContent = 'Press the Start Button:';

        ties ++;
        tieScore.textContent = `Ties: ${ties}`;
    }
    else {
        const listElement = document.createElement('li');
        listElement.textContent = `You chose ${userFighter} against ${computerFighter}. You lost!`;
        resultList.appendChild(listElement);
        underTitle.textContent = 'Press the Start Button:';

        losts ++;
        looseScore.textContent = `Lost: ${losts}`;
    }
    if(wins == 5){
        console.log('you win');
        messageDiv.appendChild(winMessage);
        messageDiv.appendChild(restartBtn);
        //disabled alla knappar
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }
    
    if(losts == 5){
        messageDiv.appendChild(looseMessage);
        messageDiv.appendChild(restartBtn);
        //disabled alla knappar
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }
    computerChooses();
})

paperBtn.addEventListener('click', function(){
    userFighter = 'paper';
    console.log(`user : ${userFighter}`);
    if (computerFighter == 'rock'){
        const listElement = document.createElement('li');
        listElement.textContent = `You chose ${userFighter} against ${computerFighter}. You won!`;
        resultList.appendChild(listElement);
        underTitle.textContent = 'Press the Start Button:';

        wins ++;
        winScore.textContent = `Won: ${wins}`;
    } else if (userFighter == computerFighter){
        const listElement = document.createElement('li');
        listElement.textContent = `You chose ${userFighter} against ${computerFighter}. It's a tie!`;
        resultList.appendChild(listElement);
        underTitle.textContent = 'Press the Start Button:';

        ties ++;
        tieScore.textContent = `Ties: ${ties}`;
    }
    else {
        const listElement = document.createElement('li');
        listElement.textContent = `You chose ${userFighter} against ${computerFighter}. You lost!`;
        resultList.appendChild(listElement);
        underTitle.textContent = 'Press the Start Button:';

        losts ++;
        looseScore.textContent = `Lost: ${losts}`;
    }
    if(wins == 5){
        console.log('you win');
        messageDiv.appendChild(winMessage);
        messageDiv.appendChild(restartBtn);
        //disabled alla knappar
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }
    
    if(losts == 5){
        messageDiv.appendChild(looseMessage);
        messageDiv.appendChild(restartBtn);
        //disabled alla knappar
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }
    computerChooses();
})

scissorBtn.addEventListener('click', function(){
    userFighter = 'scissors';
    console.log(`user : ${userFighter}`);
    if (computerFighter == 'paper'){
        const listElement = document.createElement('li');
        listElement.textContent = `You chose ${userFighter} against ${computerFighter}. You won!`;
        resultList.appendChild(listElement);
        underTitle.textContent = 'Press the Start Button:';

        wins ++;
        winScore.textContent = `Won: ${wins}`;
    } else if (userFighter == computerFighter){
        const listElement = document.createElement('li');
        listElement.textContent = `You chose ${userFighter} against ${computerFighter}. It's a tie!`;
        resultList.appendChild(listElement);
        underTitle.textContent = 'Press the Start Button:';

        ties ++;
        tieScore.textContent = `Ties: ${ties}`;
    }
    else {
        const listElement = document.createElement('li');
        listElement.textContent = `You chose ${userFighter} against ${computerFighter}. You lost!`;
        resultList.appendChild(listElement);
        underTitle.textContent = 'Press the Start Button:';

        losts ++;
        looseScore.textContent = `Lost: ${losts}`;
    }
    if(wins == 5){
        console.log('you win');
        messageDiv.appendChild(winMessage);
        messageDiv.appendChild(restartBtn);
        //disabled alla knappar
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }
    
    if(losts == 5){
        messageDiv.appendChild(looseMessage);
        messageDiv.appendChild(restartBtn);
        //disabled alla knappar
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }
    computerChooses();
})

restartBtn.addEventListener('click', function(){
    resultList.textContent = '';
    messageDiv.textContent = '';
    wins = 0;
    ties = 0;
    losts = 0;
    winScore.textContent = 'Won: ';
    tieScore.textContent = 'Ties: ';
    looseScore.textContent = 'Lost: ';
    //gör knapparna online igen
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorBtn.disabled = false;
})
