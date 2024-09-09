
let humanScore = 0
let computerScore = 0
const results = document.querySelector('.results')

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

function getHumanChoice(choice){
    if (choice === "rock"){
        return "rock"
    } else if (choice === "paper"){
        return "paper"
    } else if (choice === "scissors"){
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
}

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice())
    })
})

/*
function playGame(){

    for (let i = 1; i <=5; i++){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        playRound(humanSelection, computerSelection)
    }

    if (humanScore > computerScore){
        console.log("You win!")
    } else if (computerScore > humanScore){
        console.log("Computer wins!")
    } else{
        console.log("Draw!")
    }

}

playGame()
*/

