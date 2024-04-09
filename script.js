var turn = "X";

function changeTurn() {
    if (turn === "X") {
        turn = "O";
        document.getElementById("turn").innerHTML = "Two"
    }
    else {
        turn = "X"
        document.getElementById("turn").innerHTML = "One"
    }
}


var one = document.getElementById("1")
one.onclick = function () {
    if (!one.innerHTML) {
        one.innerHTML = turn;
        changeTurn();
    }
}
var two = document.getElementById("2")
two.onclick = function () {
    if (!two.innerHTML) {
        two.innerHTML = turn;
        changeTurn();
    }
}
var three = document.getElementById("3")
three.onclick = function () {
    if (!three.innerHTML) {
        three.innerHTML = turn;
        changeTurn();
    }
}
var four = document.getElementById("4")
four.onclick = function () {
    if (!four.innerHTML) {
        four.innerHTML = turn;
        changeTurn();
    }
}
var five = document.getElementById("5")
five.onclick = function () {
    if (!five.innerHTML) {
        five.innerHTML = turn;
        changeTurn();
    }
}
var six = document.getElementById("6")
six.onclick = function () {
    if (!six.innerHTML) {
        six.innerHTML = turn;
        changeTurn();
    }
}
var seven = document.getElementById("7")
seven.onclick = function () {
    if (!seven.innerHTML) {
        seven.innerHTML = turn;
        changeTurn();
    }
}
var eight = document.getElementById("8")
eight.onclick = function () {
    if (!eight.innerHTML) {
        eight.innerHTML = turn;
        changeTurn();
    }
}
var nine = document.getElementById("9")
nine.onclick = function () {
    if (!nine.innerHTML) {
        nine.innerHTML = turn;
        changeTurn();
    }
}