let humanScore = 0
let computerScore = 0

const humanChoice = getHumanChoice()
const computerChoise = getComputerChoice()

function playRound(humanChoice, computerChoise) {
    if(humanChoice === computerChoise){
        console.log("Vaya es un empate. Marcador actual: "+ "Humano ->"+humanScore+" Ordenador->"+computerScore)
    }else if(humanChoice==="piedra" && computerChoise ==="papel"){
        computerScore+=1
        console.log("Ordenador gana 1 punto. Marcador actual: "+ "Humano ->"+humanScore+" Ordenador->"+computerScore)
    }else if(humanChoice==="papel" && computerChoise ==="piedra"){
        humanScore+=1
        console.log("Humano gana 1 punto. Marcador actual: "+ "Humano ->"+humanScore+" Ordenador->"+computerScore)
    }else if(humanChoice==="papel" && computerChoise ==="tijera"){
        computerScore+=1
        console.log("Ordenador gana 1 punto. Marcador actual: "+ "Humano ->"+humanScore+" Ordenador->"+computerScore)
    }else if(humanChoice==="tijera" && computerChoise ==="papel"){
        humanScore+=1
        console.log("Humano gana 1 punto. Marcador actual: "+ "Humano ->"+humanScore+" Ordenador->"+computerScore)
    }
    //Falta seguir añadiendo posibilidades 
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1)
    let translateNumberToWord
    if (randomNumber === 1) {
        translateNumberToWord = "piedra"
    } else if (randomNumber === 2) {
        translateNumberToWord = "papel"
    } else {
        translateNumberToWord = "tijeras"
    }
    return translateNumberToWord;
}
function getHumanChoice() {
    let humanChoice = "";
    while (humanChoice.toLowerCase() != "piedra" && humanChoice.toLowerCase() != "papel" && humanChoice.toLowerCase() != "tijeras") {
        humanChoice = prompt("¿Piedra, papel o tijeras?: ");
    }

    return humanChoice.toLowerCase();
}
