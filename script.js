const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const startScreen = document.querySelector('#startScreen');
const gameContainer = document.querySelector('#gameContainer');
const result = document.querySelector('#finalResult');
const playerSelect = document.querySelector('#playerSelection');
const compSelect = document.querySelector('#computerSelection');
const startButton = document.getElementById('startGame');
const playerRounds = document.querySelector('#round');
const roundSelection = document.getElementById('rounds')
const newGame = document.createElement('BUTTON');
const totalscore = document.querySelector('#score')
newGame.innerHTML = "Play Again?"
result.parentNode.appendChild(newGame)
//result.appendChild(newGame)
newGame.classList.add('noShow');





let roundCount = 0;
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors'

let round = 0;
let playerScore = 0;
let cpuScore = 0;
let tieGame = 0;

const reloadPage = () => window.location.reload()

const startGame = () => {
    roundCount = roundSelection.value;
    startScreen.classList.add('noShow');
    gameContainer.classList.remove('noShow');
    return roundCount;
    
}


const computerPlay = function () {
    let options = [ROCK, PAPER, SCISSORS];
    let roll = Math.floor(Math.random() * 3);
    
    compPic.src = `${options[roll]}.jpeg`
    return options[roll]
        }

const playRound = (playerChoice, cpuChoice) => {
    if (playerChoice === cpuChoice) {
        tieGame++;
        return "Tie!";
        
    } else {
        if (playerChoice === ROCK) {
            switch (cpuChoice) {
                case PAPER:
                    cpuScore++;
                    return "CPU Wins!";
                    
                case SCISSORS:
                    playerScore++;
                    return "Player Wins!"
            }
        }
        else if (playerChoice === SCISSORS) {
            switch (cpuChoice){
                case PAPER:
                    playerScore++;
                    return "Player Wins!";

                case ROCK:
                    cpuScore++;
                    return "CPU Wins!";
            }
        }
        else if (playerChoice === PAPER) {
            switch (cpuChoice) {
                case SCISSORS:
                    cpuScore++;
                    return "CPU Wins!";

                case ROCK:
                    playerScore++;
                    return "Player Wins!";
            }
        }
    }
}
const GamePlay = (e) => {
    round++;
    playerRounds.innerHTML = `Round: ${round}. Playing to: ${roundCount}`;
    playerPic.src = `${e.target.id}.jpeg`
    console.log(round, Number(roundCount))
    if (round <= Number(roundCount)){
        let cpuTurn = computerPlay() 
        console.log(e.target.id, cpuTurn)
        result.textContent = playRound(e.target.id, cpuTurn);
        totalscore.textContent = `Player: ${playerScore} | CPU: ${cpuScore} | Ties: ${tieGame}`;       
        if (round == Number(roundCount))
        {
            result.textContent = "Game Over. Play again?"
        buttons.forEach((button) => {
            button.removeEventListener('click', GamePlay)
        })
        newGame.classList.remove('noShow')
        newGame.addEventListener('click', reloadPage)
            
        }
    }
}


const buttons = document.querySelectorAll('.playerButton');
[...buttons].forEach((button) => {
    button.addEventListener('click', GamePlay);
});

startButton.addEventListener("click", () =>{
    roundCount = startGame();
    playerPic = document.createElement('img');
    compPic = document.createElement('img');
    playerSelect.appendChild(playerPic);
    compSelect.appendChild(compPic);
    

});

console.log(roundCount)
