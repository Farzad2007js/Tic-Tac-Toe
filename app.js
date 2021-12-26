let turn = Math.round(Math.random());
const moods = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let board = ["", "", "", "", "", "", "", "", ""];
// function for start the Game
function setstatus() {
    if (turn == 0) {
        document.getElementById('lbl').innerHTML = "o";
    }
    else if (turn == 1) {
        document.getElementById('lbl').innerHTML = "x";
    }

}
setstatus();


// event for buttons
var x = document.querySelectorAll('.btn');
x.forEach(element => {
    element.addEventListener("click", set)
});
function set(e) {
    var l = document.getElementById('lbl').innerHTML;
    if (l == "x") {
        e.target.textContent = "x";
        e.target.style.color = "red";
        document.getElementById('lbl').innerHTML = "o";
        board[Number(e.target.getAttribute("data-Number"))] = "x";
    }
    else {
        e.target.textContent = "o";
        e.target.style.color = "blue";
        document.getElementById('lbl').innerHTML = "x";
        board[Number(e.target.getAttribute("data-Number"))] = "o";
    }
    check();
    e.target.removeEventListener("click", set);
}

//check btn s For identify the winner
function check() {
    if (!board.includes("")) {
        alert("The Game Is Draw");
    }

    for (let i = 0; i < moods.length; i++) {
        const [v1, v2, v3] = moods[i];
        if (board[v1] != "" && board[v2] != "" && board[v3] != "") {
            if (board[v1] == board[v2] && board[v2] == board[v3]) {
                alert(board[v1] + "Is" + "Won");

            }
        }
    }
}
// event for restart
document.getElementById('res').addEventListener("click", restart);
// function for restart the Game
function restart() {
    board.fill("");
    document.querySelectorAll('.btn').forEach(a => {
        a.textContent = "";
    });
    document.querySelectorAll('.btn').forEach(a => {
        a.addEventListener("click", set);
    });
    turn = Math.round(Math.random());
    setstatus();
}