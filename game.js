var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

var x = 50;
var y = 50;
var velY = 0;
var canJump = true;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, y, 50, 50);
}

function loop() {
    velY++;
    y += velY;
    if (y > canvas.height - 50) {
        clearInterval(intervalId);
        $('#options').fadeIn();
    }
    draw();
}

var intervalId = setInterval(loop, 30);

function optionOne() {
    alert("Suc vat");
    $('#options').fadeOut();
    $('#inputBox').fadeIn();
}

function optionTwo() {
    velY = -20;
    $('#options').fadeOut();
}

function submitInput(event) {
    event.preventDefault();
    var wish = $('#wishInput').val();
    window.location.href = "http://other-website.com/?wish=" + encodeURIComponent(wish);
}