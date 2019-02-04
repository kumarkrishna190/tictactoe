var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('tic');

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
var win = 0;
var active = 0;
var s1 = 0; s2 = 0;
var a1, a2, a3, a4, a5, a6, a7, a8, a9;
    a1 = document.querySelector('.xo1').textContent;
    a2 = document.querySelector('.xo2').textContent;
    a3 = document.querySelector('.xo3').textContent;
    a4 = document.querySelector('.xo4').textContent;
    a5 = document.querySelector('.xo5').textContent;
    a6 = document.querySelector('.xo6').textContent;
    a7 = document.querySelector('.xo7').textContent;
    a8 = document.querySelector('.xo8').textContent;
    a9 = document.querySelector('.xo9').textContent;

function init() {
    document.querySelector('.xo1').textContent = "";
    document.querySelector('.xo2').textContent = "";
    document.querySelector('.xo3').textContent = "";
    document.querySelector('.xo4').textContent = "";
    document.querySelector('.xo5').textContent = "";
    document.querySelector('.xo6').textContent = "";
    document.querySelector('.xo7').textContent = "";
    document.querySelector('.xo8').textContent = "";
    document.querySelector('.xo9').textContent = "";
    document.querySelector('.block1').style.backgroundColor = 'rgba(20,20,20,0.9)';
    document.querySelector('.block1').style.backgroundColor = 'rgba(20,20,20,0.9)';
    document.querySelector('.block2').style.backgroundColor = 'rgba(20,20,20,0.9)';
    document.querySelector('.block3').style.backgroundColor = 'rgba(20,20,20,0.9)';
    document.querySelector('.block4').style.backgroundColor = 'rgba(20,20,20,0.9)';
    document.querySelector('.block5').style.backgroundColor = 'rgba(20,20,20,0.9)';
    document.querySelector('.block6').style.backgroundColor = 'rgba(20,20,20,0.9)';
    document.querySelector('.block7').style.backgroundColor = 'rgba(20,20,20,0.9)';
    document.querySelector('.block8').style.backgroundColor = 'rgba(20,20,20,0.9)';
    document.querySelector('.block9').style.backgroundColor = 'rgba(20,20,20,0.9)';
    document.querySelector('.winner').textContent = "Lets Go!!";
    win = 0;
}

function winner() {
    a1 = document.querySelector('.xo1').textContent;
    a2 = document.querySelector('.xo2').textContent;
    a3 = document.querySelector('.xo3').textContent;
    a4 = document.querySelector('.xo4').textContent;
    a5 = document.querySelector('.xo5').textContent;
    a6 = document.querySelector('.xo6').textContent;
    a7 = document.querySelector('.xo7').textContent;
    a8 = document.querySelector('.xo8').textContent;
    a9 = document.querySelector('.xo9').textContent;

        if (a1 == "x" && a2 == "x" && a3 == "x"){
            s2++;
            document.querySelector('.player2').textContent = s2;
            document.querySelector('.winner').textContent = "x wins!!";
            document.querySelector('.winner').style.backgroundColor = 'black';
            document.querySelector('.block1').style.backgroundColor = 'red';
            document.querySelector('.block2').style.backgroundColor = 'red';
            document.querySelector('.block3').style.backgroundColor = 'red';
            win = 1;
        }
        else if (a4 == "x" && a5 == "x" && a6 == "x") {
            s2++;
            document.querySelector('.player2').textContent = s2;
                document.querySelector('.winner').textContent = "x wins!!";
            document.querySelector('.winner').style.backgroundColor = 'black';
            document.querySelector('.block4').style.backgroundColor = 'red';
            document.querySelector('.block5').style.backgroundColor = 'red';
            document.querySelector('.block6').style.backgroundColor = 'red';
            win = 1;
        }
        else if (a7 == "x" && a8 == "x" && a9 == "x") {
            s2++;
            document.querySelector('.player2').textContent = s2;
                 document.querySelector('.winner').textContent = "x wins!!";
            document.querySelector('.winner').style.backgroundColor = 'black';
            document.querySelector('.block7').style.backgroundColor = 'red';
            document.querySelector('.block8').style.backgroundColor = 'red';
            document.querySelector('.block9').style.backgroundColor = 'red';
            win = 1;
        }
        else if (a1 == "x" && a4 == "x" && a7 == "x") {
            s2++;
            document.querySelector('.player2').textContent = s2;
                document.querySelector('.winner').textContent = "x wins!!";
            document.querySelector('.winner').style.backgroundColor = 'black';
            document.querySelector('.block1').style.backgroundColor = 'red';
            document.querySelector('.block4').style.backgroundColor = 'red';
            document.querySelector('.block7').style.backgroundColor = 'red';
            win = 1;
        }
        else if (a2 == "x" && a5 == "x"  && a8 == "x") {
            s2++;
            document.querySelector('.player2').textContent = s2;
                document.querySelector('.winner').textContent = "x wins!!";
            document.querySelector('.winner').style.backgroundColor = 'black';
            document.querySelector('.block2').style.backgroundColor = 'red';
            document.querySelector('.block5').style.backgroundColor = 'red';
            document.querySelector('.block8').style.backgroundColor = 'red';
            win = 1;
        }
        else if (a3 == "x" && a6 == "x" && a9 == "x") {
            s2++;
            document.querySelector('.player2').textContent = s2;
                document.querySelector('.winner').textContent = "x wins!!";
            document.querySelector('.winner').style.backgroundColor = 'black';
            document.querySelector('.block3').style.backgroundColor = 'red';
            document.querySelector('.block6').style.backgroundColor = 'red';
            document.querySelector('.block9').style.backgroundColor = 'red';
            win = 1;
        }
        else if (a1 == "x" && a5 == "x" && a9 == "x") {
            s2++;
            document.querySelector('.player2').textContent = s2;
                document.querySelector('.winner').textContent = "x wins!!";
            document.querySelector('.winner').style.backgroundColor = 'black';
            document.querySelector('.block1').style.backgroundColor = 'red';
            document.querySelector('.block5').style.backgroundColor = 'red';
            document.querySelector('.block9').style.backgroundColor = 'red';
            win = 1;
        }
        else if (a3 == "x" && a5 == "x" && a7 == "x") {
            s2++;
            document.querySelector('.player2').textContent = s2;
                document.querySelector('.winner').textContent = "x wins!!";
            document.querySelector('.winner').style.backgroundColor = 'black';
            document.querySelector('.block3').style.backgroundColor = 'red';
            document.querySelector('.block5').style.backgroundColor = 'red';
            document.querySelector('.block7').style.backgroundColor = 'red';
            win = 1;
        
        } else if (a1 == "o" && a2 == "o" && a3 == "o") {
            s1++;
            document.querySelector('.player1').textContent = s1;
                document.querySelector('.winner').textContent = "o wins!!";           document.querySelector('.winner').style.backgroundColor = 'red';
            document.querySelector('.block1').style.backgroundColor = 'red';
            document.querySelector('.block2').style.backgroundColor = 'red';
            document.querySelector('.block3').style.backgroundColor = 'red';
            win = 1;
        } 
        else if (a4 == "o" && a5 == "o" && a6 == "o") {
            s1++;
            document.querySelector('.player1').textContent = s1;
                document.querySelector('.winner').textContent = "o wins!!";
            document.querySelector('.winner').style.backgroundColor = 'red';
            document.querySelector('.block4').style.backgroundColor = 'red';
            document.querySelector('.block5').style.backgroundColor = 'red';
            document.querySelector('.block6').style.backgroundColor = 'red';
            win = 1;
        }
        else if (a7 == "o" && a8 == "o" && a9 == "o") {
            s1++;
            document.querySelector('.player1').textContent = s1;
                document.querySelector('.winner').textContent = "o wins!!";
            document.querySelector('.winner').style.backgroundColor = 'red';
            document.querySelector('.block7').style.backgroundColor = 'red';
            document.querySelector('.block8').style.backgroundColor = 'red';
            document.querySelector('.block9').style.backgroundColor = 'red';
            win = 1;
        }
        else if (a1 == "o" && a4 == "o" && a7 == "o") {
            s1++;
            document.querySelector('.player1').textContent = s1;
                document.querySelector('.winner').textContent = "o wins!!";
            document.querySelector('.winner').style.backgroundColor = 'red';
            document.querySelector('.block1').style.backgroundColor = 'red';
            document.querySelector('.block4').style.backgroundColor = 'red';
            document.querySelector('.block7').style.backgroundColor = 'red';
            win = 1;
        } 
        else if (a2 == "o" && a5 == "o"  && a8 == "o") {
            s1++;
            document.querySelector('.player1').textContent = s1;
                document.querySelector('.winner').textContent = "o wins!!";
            document.querySelector('.winner').style.backgroundColor = 'red';
            document.querySelector('.block2').style.backgroundColor = 'red';
            document.querySelector('.block5').style.backgroundColor = 'red';
            document.querySelector('.block8').style.backgroundColor = 'red';
            win = 1;
        }
        else if (a3 == "o" && a6 == "o" && a9 == "o") {
            s1++;
            document.querySelector('.player1').textContent = s1;
                document.querySelector('.winner').textContent = "o wins!!";
            document.querySelector('.winner').style.backgroundColor = 'red';
            document.querySelector('.block3').style.backgroundColor = 'red';
            document.querySelector('.block6').style.backgroundColor = 'red';
            document.querySelector('.block9').style.backgroundColor = 'red';
            win = 1;
        }
        else if (a1 == "o" && a5 == "o" && a9 == "o") {
            s1++;
            document.querySelector('.player1').textContent = s1;
                document.querySelector('.winner').textContent = "o wins!!";
            document.querySelector('.winner').style.backgroundColor = 'red';
            document.querySelector('.block1').style.backgroundColor = 'red';
            document.querySelector('.block5').style.backgroundColor = 'red';
            document.querySelector('.block9').style.backgroundColor = 'red';
            win = 1;
        }
        else if (a3 == "o" && a5 == "o" && a7 == "o") {
            s1++;
            document.querySelector('.player1').textContent = s1;
                document.querySelector('.winner').textContent = "o wins!!";
            document.querySelector('.winner').style.backgroundColor = 'red';
            document.querySelector('.block3').style.backgroundColor = 'red';
            document.querySelector('.block5').style.backgroundColor = 'red';
            win = 1;
            document.querySelector('.block7').style.backgroundColor = 'red';
        }else if (a1 !== '' && a2 !== '' && a3 !== '' && a4 !== '' && a5 !== '' && a6 !== '' && a7 !== '' && a8 !== '' && a9 !== '') {
                document.querySelector('.winner').textContent = "its a draw!!";
            win = 1;
        }
}

document.querySelector('.block1').addEventListener('click', function() {
    if (win === 0) {
        if (active == 0) {
        if (a1 == 'x') {
            active = 0;
            document.querySelector('.xo1').textContent = 'x';
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        } else {
            active = 1;
            document.querySelector('.xo1').textContent = "o";
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        }
    } else {
        if (a1 == 'o') {
            active = 1;
            document.querySelector('.xo1').textContent = 'o';
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        } else {
            active = 0;
            document.querySelector('.xo1').textContent = "x";
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        }
    }
    winner();
    }

});

document.querySelector('.block2').addEventListener('click', function() {
    if (win === 0) {
       if (active == 0) {
        if (a2 == 'x') {
            active = 0;
            document.querySelector('.xo2').textContent = 'x';
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        } else {
            active = 1;
            document.querySelector('.xo2').textContent = "o";
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        }
    } else {
        if (a2 == 'o') {
            active = 1;
            document.querySelector('.xo2').textContent = 'o';
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        } else {
            active = 0;
            document.querySelector('.xo2').textContent = "x";
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        }
    }
    winner();
    }
});

document.querySelector('.block3').addEventListener('click', function() {
    if (win === 0) {
        if (active == 0) {
        if (a3 == 'x') {
            active = 0;
            document.querySelector('.xo3').textContent = 'x';
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        } else {
            active = 1;
            document.querySelector('.xo3').textContent = "o";
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        }
    } else {
        if (a3 == 'o') {
            active = 1;
            document.querySelector('.xo3').textContent = 'o';
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        } else {
            active = 0;
            document.querySelector('.xo3').textContent = "x";
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        }
    }
    winner();
    }
});

document.querySelector('.block4').addEventListener('click', function() {
    if (win === 0) {
       if (active == 0) {
        if (a4 == 'x') {
            active = 0;
            document.querySelector('.xo4').textContent = 'x';
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        } else {
            active = 1;
            document.querySelector('.xo4').textContent = "o";
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        }
    } else {
        if (a4 == 'o') {
            active = 1;
            document.querySelector('.xo4').textContent = 'o';
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        } else {
            active = 0;
            document.querySelector('.xo4').textContent = "x";
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        }
    }
    winner();
    }
});

document.querySelector('.block5').addEventListener('click', function() {
    if (win === 0) {
        if (active == 0) {
        if (a5 == 'x') {
            active = 0;
            document.querySelector('.xo5').textContent = 'x';
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        } else {
            active = 1;
            document.querySelector('.xo5').textContent = "o";
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        }
    } else {
        if (a5 == 'o') {
            active = 1;
            document.querySelector('.xo5').textContent = 'o';
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        } else {
            active = 0;
            document.querySelector('.xo5').textContent = "x";
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        }
    }
    winner();
    }
});
document.querySelector('.block6').addEventListener('click', function() {
    if (win === 0) {
        if (active == 0) {
        if (a6 == 'x') {
            active = 0;
            document.querySelector('.xo6').textContent = 'x';
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        } else {
            active = 1;
            document.querySelector('.xo6').textContent = "o";
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        }
    } else {
        if (a6 == 'o') {
            active = 1;
            document.querySelector('.xo6').textContent = 'o';
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        } else {
            active = 0;
            document.querySelector('.xo6').textContent = "x";
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        }
    }
    winner();
    }
});

document.querySelector('.block7').addEventListener('click', function() {
    if (win === 0) {
        if (active == 0) {
        if (a7 == 'x') {
            active = 0;
            document.querySelector('.xo7').textContent = 'x';
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        } else {
            active = 1;
            document.querySelector('.xo7').textContent = "o";
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        }
    } else {
        if (a7 == 'o') {
            active = 1;
            document.querySelector('.xo7').textContent = 'o';
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        } else {
            active = 0;
            document.querySelector('.xo7').textContent = "x";
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        }
    }
    winner();
    }
});

document.querySelector('.block8').addEventListener('click', function() {
    if (win === 0) {
       if (active == 0) {
        if (a8 == 'x') {
            active = 0;
            document.querySelector('.xo8').textContent = 'x';
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        } else {
            active = 1;
            document.querySelector('.xo8').textContent = "o";
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        }
    } else {
        if (a8 == 'o') {
            active = 1;
            document.querySelector('.xo8').textContent = 'o';
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        } else {
            active = 0;
            document.querySelector('.xo8').textContent = "x";
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        }
    }
    winner();
    }
});

document.querySelector('.block9').addEventListener('click', function() {
    if (win === 0) {
        if (active == 0) {
        if (a9 == 'x') {
            active = 0;
            document.querySelector('.xo9').textContent = 'x';
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        } else {
            active = 1;
            document.querySelector('.xo9').textContent = "o";
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        }
    } else {
        if (a9 == 'o') {
            active = 1;
            document.querySelector('.xo9').textContent = 'o';
            document.querySelector('.winner').textContent = 'player 2';           document.querySelector('.winner').style.backgroundColor = 'black';
        } else {
            active = 0;
            document.querySelector('.xo9').textContent = "x";
            document.querySelector('.winner').textContent = 'player 1';           document.querySelector('.winner').style.backgroundColor = 'red';
        }
    }
    winner();
    }
});

document.querySelector('.new').addEventListener('click', function() {
    init();
});
