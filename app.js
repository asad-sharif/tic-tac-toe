let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let newGameBtn = document.querySelector('#new-game-btn');


let turnO = true;

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // horizontal
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // vertical
    [0, 4, 8], // diagonal
    [2, 4, 6] // diagonal
];

const resetGame = () => {
    for (const box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    msgContainer.classList.add('hide');
    turnO = true;
}

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X'
            turnO = true
        }
        box.disabled = true;

        checkWinner();
    })
})



const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {

                showWinner(pos1)
            }
        }
    }
}

function showWinner(winner) {
    msg.innerText = `Great, ${winner} Won the Game!`;
    msg.style.fontSize = '5rem';
    msgContainer.classList.remove('hide');

    for (const box of boxes) {
        box.disabled = true;
    }
}

resetBtn.addEventListener('click', resetGame);
newGameBtn.addEventListener('click', resetGame);