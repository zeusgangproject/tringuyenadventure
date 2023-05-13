// get references to the elements we need
const player = document.getElementById("player");
const msg = document.getElementById("msg");
const popup = document.getElementById("popup");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const mp4 = document.getElementById("mp4");
const ending = document.getElementById("ending");
const address = document.getElementById("address");

// initialize the player position and start the game loop
player.style.left = "50%";
player.style.top = "50%";
let playerX = player.offsetLeft;
let playerY = player.offsetTop;
const gameLoop = () => {
    update();
    draw();
    if (playerY > window.innerHeight) {
        showMsg();
    } else if (playerX > window.innerWidth - player.offsetWidth) {
        showMp4();
    } else {
        requestAnimationFrame(gameLoop);
    }
};
gameLoop();

// define the update and draw functions for the game
const update = () => {
    playerX += 5;
    playerY += 2;
};

const draw = () => {
    player.style.left = ${playerX}px;
    player.style.top = ${playerY}px;
};

// define functions for showing messages and videos
const showMsg = () => {
    popup.style.display = "none";
    msg.style.display = "block";
};
const showPopup = (text) => {
    msg.style.display = "none";
    popup.style.display = "block";
    popup.innerText = text;
};
const showMp4 = () => {
    msg.style.display = "none";
    popup.style.display = "none";
    mp4.style.display = "block";
    setTimeout(() => {
        showEnding();
    }, mp4.duration * 1000);
};

// define the event listeners for the option buttons
option1.addEventListener("click", () => {
    showPopup("Suc vat");
});
option2.addEventListener("click", () => {
    showPopup("Cam on ban da cuu tri");
    setTimeout(() => {
        playerX = 0;
        playerY = 0;
        mp4.style.display = "none";
        requestAnimationFrame(gameLoop);
    }, 2000);
});

// define the function for showing the ending message
const showEnding = () => {
    mp4.style.display = "none";
    ending.style.display = "block";
    const randomAddress = Math.floor(Math.random() * 1000000000);
    address.innerText = Dia chi PC cua ban: ${randomAddress};
};
