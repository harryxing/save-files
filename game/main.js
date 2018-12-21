// Flappy bird
//1600
// img 275 x 177
// Variables
let cnv = document.getElementById("can");
let flapyBird = document.getElementById("bird");
let ctx = cnv.getContext("2d");
let count = 0;
let scorecount = 1;
let x = 80;
let y = 300;
let xspeed = 10;
let gamex = 600;
let gamexSpeed = 2;
let gameh = Math.random() * 110 + 130
let gameh2 = Math.random() * 200 + 90
let gamey = 600 - gameh2;
let backgroundimg = document.getElementById("back");
let rightPressed = false;
let backgroundx = 0;
let backgroundx2 = 600;
let gravitySpeed = 0.1;
let gravity = 0;
let lvlnumber = 1
cnv.width = 600;
cnv.height = 600;

// Event listeners
document.addEventListener("keydown", control);
document.getElementById("plus3").addEventListener("click", add3);
document.getElementById("sub3").addEventListener("click", subtract3);
document.getElementById("gamereset").addEventListener("click", gamespeedreset);
document.addEventListener("keydown", keydownhandler);
document.addEventListener("keyup", keyuphandler);
document.addEventListener("ontouchstart", touchup);
document.addEventListener("ontouchend", touchdown);

console.log(lvlnumber)
// Main function
requestAnimationFrame(game);
function game() {


    console.log(lvlnumber)
    gravity += -gravitySpeed
    backgroundx--;
    backgroundx2--;
    gravitySpeed
    if (rightPressed) {
        y -= 7
        gravity = 3.5
    }
    if (!rightPressed) {

        y += -gravity

    }
    if (backgroundx + 600 < 0) {
        backgroundx = 0;
        backgroundx2 = 600;
    }




    count += scorecount;
    document.getElementById("score").innerHTML = count;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.drawImage(backgroundimg, backgroundx, 0);
    ctx.drawImage(backgroundimg, backgroundx2, 0);        



    ctx.drawImage(bird, x, y);
    ctx.fillStyle = "green";
    ctx.fillRect(gamex, 0, 20, gameh);
    ctx.fillRect(gamex, gamey, 20, gameh2);
    gamex -= gamexSpeed;
    if (count % 1600 == 0) {
        lvlnumber += 1
        document.getElementById("lvlnumberhtml").innerHTML = lvlnumber;
    }
    if (gamex < -30) {
        gameh = Math.random() * 110 + 130
        gameh2 = Math.random() * 200 + 90
        gamey = 600 - gameh2;
        gamex = 600;

    }
    if (x + 30 > gamex && y < gameh && x - 30 < gamex) {
        gamexSpeed = 0;
        scorecount = 0;
        xspeed = 0;
        yspeed = 0;
        ctx.clearRect(0, 0, cnv.width, cnv.height)
        ctx.fillStyle = "black";
        ctx.font = "20px Georgia";
        ctx.fillStyle = "black";
        ctx.fillText("Game Over!", 250, 300);
        gravitySpeed = 0;

    } else if (x + 30 > gamex && y + 30 > gamey && x < gamex) {
        gamexSpeed = 0;
        scorecount = 0;
        xspeed = 0;
        yspeed = 0;

        ctx.clearRect(0, 0, cnv.width, cnv.height);
        ctx.font = "20px Georgia";
        ctx.fillStyle = "black";
        ctx.fillText("Game Over!", 250, 300);
        gravitySpeed = 0;
    }

    if (x > 600) {
        x = 600;
    } else if (x < 0) {
        x = 0;
    } else if (y < 0) {
        y = 0;
    } else if (y > 570) {
        y = 570
        gravity = 0
    }


    if (gamexSpeed < 0) {
        gamexSpeed = 2;
        scorecount = 1;
    }

    requestAnimationFrame(game);
}


// Other functions

function control(event) {
    console.log(event);

    if (event.code == "KeyP") {
        gamexSpeed = 0;
        scorecount = 0;
    } else if (event.code == "KeyO") {
        gamexSpeed = 2;
        scorecount = 1;
    } else if (event.code == "KeyR") {
        location.reload();
    }
}


function add3() {
    gamexSpeed += 3;
    scorecount += 3;
}

function subtract3() {
    gamexSpeed -= 3;
    scorecount -= 3;
}

function gamespeedreset() {
    gamexSpeed = 2;
    scorecount = 1;
}

function keydownhandler(event) {
    if (event.code == "Space") {
        rightPressed = true; ``
    }
}

function keyuphandler(event) {
    if (event.code == "Space") {
        rightPressed = false;
    }
}
function touchdown() {

    rightPressed = true;
}

function touchup() {
    rightPressed = false;
}
