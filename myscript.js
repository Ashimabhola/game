console.log("Welcome to Tic Tac Toe");

let audioturn = { play: () => console.log("Audio played") };
let gameover = false;
let turn = "X";

// Function to change turn
const changeturn = () => {
    return turn === "X" ? "O" : "X";
};

// Function to check win
const checkwin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach(e => {
        if (
            boxtexts[e[0]].innerText !== "" &&
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[1]].innerText === boxtexts[e[2]].innerText
        ) {
            document.querySelector(".info").innerText = "Congratulations! " + boxtexts[e[0]].innerText + " Won!";
            gameover = true;

            // Optional: highlight winning boxes
            e.forEach(i => {
                boxtexts[i].parentElement.style.backgroundColor = " #26c6da"; // a vibrant mint cyan

            });
        }
    });
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element => {
    let boxtext = Element.querySelector(".boxtext");
    Element.addEventListener("click", () => {
        if (boxtext.innerText === "" && !gameover) {
            boxtext.innerText = turn;
            audioturn.play();
            checkwin();
            if (!gameover) {
                turn = changeturn();
                document.querySelector(".info").innerText = "Turn for " + turn;
            }
        }
    });
});

// Reset button functionality
document.getElementById("reset").addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    boxtexts.forEach(e => (e.innerText = ""));
    document.querySelector(".info").innerText = "Turn for X";
    turn = "X";
    gameover = false;

    Array.from(boxes).forEach(Element => {
        Element.style.backgroundColor = ""; // remove highlight
    });
});