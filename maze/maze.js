const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// tile size: 600 / 60 = 30
// row size: 20 tiles.
let x = 300;
let y = 300;
let width = 10;
let height = 10;
let speed = 3;

console.log("map: ", map1);

function drawActor() {
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, width, height);
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMap();
    tryMove();
    drawActor();
    //console.log(keysPressed);
    requestAnimationFrame(draw);
}
draw();

