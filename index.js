const spaces = document.querySelectorAll(".box");
const winner = document.getElementById("winner");
let P1 = window.prompt("Player 1 Enter your character");
let P2 = window.prompt("Player 2 Enter your character");
let currentPlayer = P1;

spaces.forEach((space) => {
    space.addEventListener("click", (event) => {
        if (!event.target.textContent){
            event.target.textContent = currentPlayer;
            if (checkWin(currentPlayer)) {
               
              winner.classList.add("winnerText");
              winner.textContent = `Winner Player:${currentPlayer}`;
                resetGame();
            } else if (isDraw()) {
                alert("It's a draw!");
                resetGame();
            } else {
                currentPlayer = (currentPlayer === P1) ? P2 : P1;
            }
        }
    });
});

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWin(player) {
    return winConditions.some(condition => {
        return condition.every(index => {
            return spaces[index].textContent === player;
        });
    });
}

function isDraw() {
    return Array.from(spaces).every(space => space.textContent);
}

function resetGame() {
    spaces.forEach(space => space.textContent = '');
    currentPlayer = P1;
}
