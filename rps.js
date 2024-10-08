
let humanScore = 0
let computerScore = 0
const results = document.querySelector('.results')
const human_score = document.querySelector('#human-score')
const computer_score = document.querySelector('#computer-score')


function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)

    switch(num){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }

}


function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock"){
        if (computerChoice === "scissors"){
            results.textContent = "You win! Rock beats scissors!"
            humanScore++
        } else if (computerChoice === "paper"){
            results.textContent = "You lose! Paper beats rock!"
            computerScore++
        } else{
            results.textContent = "Draw! No points awarded!"
        }
    } else if (humanChoice === "paper"){
        if(computerChoice === "scissors"){
            results.textContent = "You lose! Scissors beats paper!"
            computerScore++
         } else if(computerChoice === "rock"){
            results.textContent = "You win! Paper beats rock!"
            humanScore++
         } else{
            results.textContent = "Draw! No points awarded!"
         }
    } else{
        if(computerChoice === "rock"){
            results.textContent = "You lose! Rock beats scissors!"
            computerScore++
        } else if (computerChoice === "paper") {
            results.textContent = "You win! Scissors beats paper!"
            humanScore++
        } else{
            results.textContent = "Draw! No points awarded!"
        }
    }

    human_score.textContent = "You: " + humanScore;
    computer_score.textContent = "Computer: " + computerScore;

    if (humanScore >= 5){
        results.textContent = "You win!"
        humanScore = 0
        computerScore = 0
    } else if (computerScore >= 5){
        results.textContent = "Computer wins!"
        humanScore = 0
        computerScore = 0
    }

}

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice())
    })
})
