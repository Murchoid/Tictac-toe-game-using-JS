let grid = Array.from(document.getElementsByClassName("grid"));
let player = "X";
let isWinner = document.getElementById("isWinner");
let winner = document.getElementById("winner");
let reset = document.getElementById("reset");
let j = 1;



//fucntion to change player

function changePlayer() {
    if (player == "X") {
        player = "O";
    }
    else {
        player = "X";
    }
}


grid.map(game => {

    game.addEventListener("click", (e) => {
        console.log(`${e.target.innerText}tapped`);
        switch (e.target.innerText) {
            case "1":
                e.target.innerText = player;
                if (checkWinner() == "X") {
                    isWinner.innerText = "X";
                    winner.style.visibility = "visible";
                }
                else if (checkWinner() == "O") {
                    isWinner.innerText = "O";
                    winner.style.visibility = "visible";
                };

                changePlayer();
                break;
            case "2":
                e.target.innerText = player;
                if (checkWinner() == "X") {
                    isWinner.innerText = "X";
                    winner.style.visibility = "visible";
                }
                else if (checkWinner() == "O") {
                    isWinner.innerText = "O";
                    winner.style.visibility = "visible";
                };

                changePlayer();
                break;
            case "3":
                e.target.innerText = player;
                if (checkWinner() == "X") {
                    isWinner.innerText = "X";
                    winner.style.visibility = "visible";
                    
                }
                else if (checkWinner() == "O") {
                    isWinner.innerText = "O";
                    winner.style.visibility = "visible";
                };

                changePlayer();
                break;
            case "4":
                e.target.innerText = player;
                if (checkWinner() == "X") {
                    isWinner.innerText = "X";
                    winner.style.visibility = "visible";
                }
                else if (checkWinner() == "O") {
                    isWinner.innerText = "O";
                    winner.style.visibility = "visible";
                };

                changePlayer();
                break;
            case "5":
                e.target.innerText = player;
                if (checkWinner() == "X") {
                    isWinner.innerText = "X";
                    winner.style.visibility = "visible";
                }
                else if (checkWinner() == "O") {
                    isWinner.innerText = "O";
                    winner.style.visibility = "visible";
                };

                changePlayer();
                break;
            case "6":
                e.target.innerText = player;
                if (checkWinner() == "X") {
                    isWinner.innerText = "X";
                    winner.style.visibility = "visible";
                }
                else if (checkWinner() == "O") {
                    isWinner.innerText = "O";
                    winner.style.visibility = "visible";
                };

                changePlayer();
                break;
            case "7":
                e.target.innerText = player;
                if (checkWinner() == "X") {
                    isWinner.innerText = "X";
                    winner.style.visibility = "visible";
                }
                else if (checkWinner() == "O") {
                    isWinner.innerText = "O";
                    winner.style.visibility = "visible";
                };

                changePlayer();
                break;
            case "8":
                e.target.innerText = player;
                if (checkWinner() == "X") {
                    isWinner.innerText = "X";
                    winner.style.visibility = "visible";
                }
                else if (checkWinner() == "O") {
                    isWinner.innerText = "O";
                    winner.style.visibility = "visible";
                };

                changePlayer();
                break;
            case "9":
                e.target.innerText = player;
                if (checkWinner() == "X") {
                    isWinner.innerText = "X";
                    winner.style.visibility = "visible";
                }
                else if (checkWinner() == "O") {
                    isWinner.innerText = "O";
                    winner.style.visibility = "visible";
                }
                changePlayer();
                break;
            default:
                alert("Field occupied by another player!!");
                break;
        }

    });
});


//checking for winner
function checkWinner() {
    //checking X player in vertical axes
    if (grid[0].innerText == "X" && grid[1].innerText == "X" && grid[2].innerText == "X")
        return "X";
    else if (grid[3].innerText == "X" && grid[4].innerText == "X" && grid[5].innerText == "X")
        return "X";
    else if (grid[6].innerText == "X" && grid[7].innerText == "X" && grid[8].innerText == "X")
        return "X";

    //checking X in horizontal axes
    else if (grid[0].innerText == "X" && grid[3].innerText == "X" && grid[6].innerText == "X")

        return "X";
    else if (grid[1].innerText == "X" && grid[4].innerText == "X" && grid[7].innerText == "X")
        return "X";
    else if (grid[2].innerText == "X" && grid[5].innerText == "X" && grid[8].innerText == "X")
        return "X";

    //checking for X player cross axes
    else if (grid[0].innerText == "X" && grid[4].innerText == "X" && grid[8].innerText == "X")
        return "X";
    else if (grid[2].innerText == "X" && grid[4].innerText == "X" && grid[6].innerText == "X")
        return "X";


    //checking for player O
    //checking O player in vertical axes
    else if (grid[0].innerText == "O" && grid[1].innerText == "O" && grid[2].innerText == "O")
        return "O";
    else if (grid[3].innerText == "O" && grid[4].innerText == "O" && grid[5].innerText == "O")
        return "O";
    else if (grid[6].innerText == "O" && grid[7].innerText == "O" && grid[8].innerText == "O")
        return "O";

    //checking O in horizontal axes
    else if (grid[0].innerText == "O" && grid[3].innerText == "O" && grid[6].innerText == "O")
        return "O";
    else if (grid[1].innerText == "O" && grid[4].innerText == "O" && grid[7].innerText == "O")
        return "O";
    else if (grid[2].innerText == "O" && grid[5].innerText == "O" && grid[8].innerText == "O")
        return "O";

    //checking for O player cross axes
    else if (grid[0].innerText == "O" && grid[4].innerText == "O" && grid[8].innerText == "O")
        return "O";
    else if (grid[2].innerText == "O" && grid[4].innerText == "O" && grid[6].innerText == "O")
        return "O";

}


//reset
function resetGame() {
    for (var i = 0; i < grid.length; ++i) {
        grid[i].innerHTML = j;
        j++;
    }
    i = 0;
    j = 1;
    player = "X";
    winner.style.visibility = "hidden";
}
//reset game
reset.addEventListener("click", resetGame);
