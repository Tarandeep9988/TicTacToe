var turn = "X";

function changeTurn() {
    if (turn === "X") {
        turn = "O";
        document.getElementById("turn").innerHTML = "Two (O)"
    }
    else {
        turn = "X"
        document.getElementById("turn").innerHTML = "One (X)"
    }
}


var one = document.getElementById("1")
one.onclick = function () {
    if (!one.innerHTML) {
        one.innerHTML = turn;
        checkWon(turn);
        changeTurn();
    }
}
var two = document.getElementById("2")
two.onclick = function () {
    if (!two.innerHTML) {
        two.innerHTML = turn;
        checkWon(turn);
        changeTurn();
    }
}
var three = document.getElementById("3")
three.onclick = function () {
    if (!three.innerHTML) {
        three.innerHTML = turn;
        checkWon(turn);
        changeTurn();
    }
}
var four = document.getElementById("4")
four.onclick = function () {
    if (!four.innerHTML) {
        four.innerHTML = turn;
        checkWon(turn);
        changeTurn();
    }
}
var five = document.getElementById("5")
five.onclick = function () {
    if (!five.innerHTML) {
        five.innerHTML = turn;
        checkWon(turn);
        changeTurn();
    }
}
var six = document.getElementById("6")
six.onclick = function () {
    if (!six.innerHTML) {
        six.innerHTML = turn;
        checkWon(turn);
        changeTurn();
    }
}
var seven = document.getElementById("7")
seven.onclick = function () {
    if (!seven.innerHTML) {
        seven.innerHTML = turn;
        checkWon(turn);
        changeTurn();
    }
}
var eight = document.getElementById("8")
eight.onclick = function () {
    if (!eight.innerHTML) {
        eight.innerHTML = turn;
        checkWon(turn);
        changeTurn();
    }
}
var nine = document.getElementById("9")
nine.onclick = function () {
    if (!nine.innerHTML) {
        nine.innerHTML = turn;
        checkWon(turn);
        changeTurn();
    }
}

function showWinner(turn) {
    let resultBox = document.getElementById("result")
    resultBox.style.display = "flex"
    resultBox.innerHTML = `${turn} Won!`
}

function checkWon(Localturn) {
    isWon = (one.innerHTML === two.innerHTML && two.innerHTML === three.innerHTML && three.innerHTML === Localturn) ||
    (three.innerHTML === six.innerHTML && six.innerHTML === nine.innerHTML && nine.innerHTML === Localturn) ||
    (seven.innerHTML === eight.innerHTML && eight.innerHTML === nine.innerHTML && nine.innerHTML === Localturn) ||
    (one.innerHTML === four.innerHTML && four.innerHTML === seven.innerHTML && seven.innerHTML === Localturn) ||
    (one.innerHTML === five.innerHTML && five.innerHTML === nine.innerHTML && nine.innerHTML === Localturn) ||
    (seven.innerHTML === five.innerHTML && five.innerHTML === three.innerHTML && three.innerHTML === Localturn)
    if (isWon) {
        console.log(Localturn, "won!")
        showWinner(turn)
    }
    return;
}

function restart() {
    
}