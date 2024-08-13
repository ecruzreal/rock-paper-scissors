
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

function getHumanChoice(){
    let choice
    let options = ["rock", "paper", "scissors"]
    
    while(!options.includes(choice)){
        choice = prompt("What will you choose? (rock, paper, or scissors): ")
        choice = choice.toLowerCase()
        if (choice === "rock"){
            return "rock"
        } else if (choice === "paper"){
            return "paper"
        } else if (choice === "scissors"){
            return "scissors"
        }
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

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)

