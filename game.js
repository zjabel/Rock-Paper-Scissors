document.addEventListener('DOMContentLoaded', () => {
    let humanScore = 0;
    let computerScore = 0;

    let btnRock = document.querySelector("#rock");
    let btnPaper = document.querySelector("#paper");
    let btnScissors = document.querySelector("#scissors");
    let result = document.querySelector("#result");

    function getComputerChoice() {
        const choices = ["piedra", "papel", "tijera"];
        const randomNumber = Math.floor(Math.random() * choices.length);
        return choices[randomNumber];
    }

    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
        console.log(`Humano -> ${humanChoice} | Ordenador -> ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("Vaya es un empate.");
        } else if (
            (humanChoice === "piedra" && computerChoice === "papel") ||
            (humanChoice === "papel" && computerChoice === "tijera") ||
            (humanChoice === "tijera" && computerChoice === "piedra")
        ) {
            computerScore += 1;
            console.log("Ordenador gana 1 punto.");
        } else {
            humanScore += 1;
            console.log("Humano gana 1 punto.");
        }

        result.textContent = `Marcador actual: Humano -> ${humanScore} | Ordenador -> ${computerScore}`;

        if (humanScore === 5 || computerScore === 5) {
            if (humanScore > computerScore) {
                result.textContent="El ganador es el HUMANO";
                console.log();
            } else {
                result.textContent="El ganador es el ORDENADOR";
            }
            humanScore = 0;
            computerScore = 0;
        }
    }

    btnRock.addEventListener("click", () => playRound("piedra"));
    btnPaper.addEventListener("click", () => playRound("papel"));
    btnScissors.addEventListener("click", () => playRound("tijera"));
});
