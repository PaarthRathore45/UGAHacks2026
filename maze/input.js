const keysPressed = [];

function tryMove() {
    if (keysPressed.length === 0) {
        return;
    }
    keysPressed.forEach((key) => {
        //console.log(keysPressed);
        switch (key) {
            case "LEFT": {
                if ((x - speed) > 0) {
                    x -= speed;
                } else {
                    x = 0;
                }

                break;
            }
            case "UP": {
                if ((y - speed) > 0) {
                    y -= speed;
                } else {
                    y = 0;
                }
                break;
            }
            case "RIGHT": {
                if ((x + speed + width) < canvas.width) {
                    x += speed;
                } else {
                    x = canvas.width - width;
                }
                break;
            }
            case "DOWN": {
                if ((y + speed + height) < canvas.height) {
                    y += speed;
                } else {
                    y = canvas.height - height;
                }
                break;
            }
        }


    })

}

function checkCollision() {
}
window.addEventListener("keydown", (e) => {
    if (e.key.startsWith("Arrow")) { // prevent scroll
        e.preventDefault();
    }
    if (e.key === "ArrowUp" || e.code === "KeyW") {
        pushKey("UP")
    }
    if (e.key === "ArrowDown" || e.code === "KeyS") {
        pushKey("DOWN")
    }
    if (e.key === "ArrowLeft" || e.code === "KeyA") {
        pushKey("LEFT")
    }
    if (e.key === "ArrowRight" || e.code === "KeyD") {
        pushKey("RIGHT")
    }
});


function pushKey(key) {
    if (!keysPressed.includes(key)) {
        keysPressed.push(key);
    }
}

window.addEventListener("keyup", (e) => {

    if (e.key === "ArrowUp" || e.code === "KeyW") {
        removeKey("UP")
    }
    if (e.key === "ArrowDown" || e.code === "KeyS") {
        removeKey("DOWN")
    }
    if (e.key === "ArrowLeft" || e.code === "KeyA") {
        removeKey("LEFT")
    }
    if (e.key === "ArrowRight" || e.code === "KeyD") {
        removeKey("RIGHT")
    }

});

function removeKey(key) {
    // if (keysPressed.filter(k => (k === key))) {
    //     return;
    // }
    keysPressed.splice(key, 1);

}
