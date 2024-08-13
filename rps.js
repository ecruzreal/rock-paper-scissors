
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
