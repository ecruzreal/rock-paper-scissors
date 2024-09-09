
let humanScore = 0
let computerScore = 0

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
            console.log("You win! Rock beats scissors!")
            humanScore++
        } else if (computerChoice === "paper"){
            console.log("You lose! Paper beats rock!")
            computerScore++
        } else{
            console.log("Draw! No points awarded!")
        }
    } else if (humanChoice === "paper"){
        if(computerChoice === "scissors"){
            console.log("You lose! Scissors beats paper!")
            computerScore++
         } else if(computerChoice === "rock"){
            console.log("You win! Paper beats rock!")
            humanScore++
         } else{
            console.log("Draw! No points awarded!")
         }
    } else{
        if(computerChoice === "rock"){
            console.log("You lose! Rock beats scissors!")
            computerScore++
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beats paper!")
            humanScore++
        } else{
            console.log("Draw! No points awarded!")
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

