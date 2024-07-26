let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const choices = ["piedra", "papel", "tijera"];
    return choices[randomNumber];
}

function getHumanChoice() {
    let humanChoice = "";
    while (humanChoice.toLowerCase() !== "piedra" && humanChoice.toLowerCase() !== "papel" && humanChoice.toLowerCase() !== "tijera") {
        humanChoice = prompt("¿Piedra, papel o tijera?: ");
    }
    return humanChoice.toLowerCase();
}
function playRound() {
    let countRounds = 1;
    while (countRounds <= 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Ronda ${countRounds}: Humano -> ${humanChoice} | Ordenador -> ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("Vaya es un empate. Marcador actual: " + "Humano -> " + humanScore + " Ordenador -> " + computerScore);
        } else if ((humanChoice === "piedra" && computerChoice === "papel") ||
            (humanChoice === "papel" && computerChoice === "tijera") ||
            (humanChoice === "tijera" && computerChoice === "piedra")) {
            computerScore += 1;
            console.log("Ordenador gana 1 punto. Marcador actual: " + "Humano -> " + humanScore + " Ordenador -> " + computerScore);
        } else {
            humanScore += 1;
            console.log("Humano gana 1 punto. Marcador actual: " + "Humano -> " + humanScore + " Ordenador -> " + computerScore);
        }
        countRounds += 1;
    }

    if (humanScore > computerScore) {
        console.log("El ganador es el HUMANO");
    } else if (computerScore > humanScore) {
        console.log("El ganador es el ORDENADOR");
    } else {
        console.log("Es un empate total");
    }
}

playRound();