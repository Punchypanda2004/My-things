// The main file, controls Death and calls fuctions
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Gobal Variables
let dudeLocax = 400;
let dudeLocay = 300;

//  Move left, right and jump

drawDude(dudeLocax, dudeLocay)
requestAnimationFrame(animateDude);

function animateDude() {
    background("orange");

    drawDude(dudeLocax, dudeLocay);

    requestAnimationFrame(animateDude);
}

document.addEventListener("keydown", movement)

function movement(event) {
    if (event.code == "ArrowLeft") {
        leftMove();
        console.log(dudeLocax);
    } else if (event.code == "ArrowRight") {
        rightMove();
        console.log(dudeLocax);
    } else if (event.code == "Space") {
        jumpMove();
        console.log(dudeLocay);
    }
}

function leftMove() {
    dudeLocax -= 2;
}

function rightMove() {
    dudeLocax += 2;
}

function jumpMove() {
    dudeLocay -= 5;
}
