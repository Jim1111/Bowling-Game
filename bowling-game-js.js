
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// center text
var w = canvas.width / 2;

var splashSc = true;
var insSc = false;
var gameSc = false;

////////////////////////////////
/////Translation Menu //////////
var En = true;
var Ger = false;
var Rom = false;
var Bul = false;
var Grk = false;
var Tuk = false;
/////////////////////////////////

   
const splEnd = new Image();
splEnd.src = "images/splEnd.png";

const insEnd = new Image();
insEnd.src = "images/splEnd.png";

const bowlLane = new Image();
bowlLane.src = "images/bowling-lane.png";

const ball = new Image();
ball.src = "images/ball.png";

const pin1 = new Image();
pin1.src = "images/pin.png";

const pin2 = new Image();
pin2.src = "images/pin.png";

const pin3 = new Image();
pin3.src = "images/pin.png";

const pin4 = new Image();
pin4.src = "images/pin.png";

const pin5 = new Image();
pin5.src = "images/pin.png";

const pin6 = new Image();
pin6.src = "images/pin.png";

const pin7 = new Image();
pin7.src = "images/pin.png";

const pin8 = new Image();
pin8.src = "images/pin.png";

const pin9 = new Image();
pin9.src = "images/pin.png";

const pin10 = new Image();
pin10.src = "images/pin.png";



function SplashEnd(e) {
       if (ctx.isPointInPath(splEnd.path, e.offsetX, e.offsetY)) {
           splashSc = false;
           insSc = true;
           canvas.removeEventListener("click", SplashEnd);
        }
    } 

function Splash() {
    ctx.textAlign = "center";
    ctx.font='900 150px Arial';
    ctx.fillStyle = "purple";
    ctx.fillText("Bowling", w, 220);
    ctx.font='500 90px Comic Sans MS';
    ctx.fillStyle = "silver";
    ctx.fillText("Game", w, 300);
    ctx.fillRect(0, 450, 715, 235); 
    ctx.drawImage(splEnd, w/2-40, 465, 450, 200);
    ctx.font='900 40px Comic Sans MS';
    ctx.fillStyle = "black";
    ctx.fillText("Start Game!", w, 575);
    splEnd.path = new Path2D();
    splEnd.path.rect(w/2-40, 465, 450, 200);
    canvas.addEventListener("click", SplashEnd);
}

function InsEnd(e) {
    if (ctx.isPointInPath(insEnd.path, e.offsetX, e.offsetY)) {
        insSc = false;
        gameSc = true;
        canvas.removeEventListener("click", InsEnd);
     }
 } 

function Ins() {
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillRect(50, 80, 616, 550);  
    ctx.fillStyle = "purple";
    ctx.font='900 90px Comic Sans MS';
    ctx.fillText("Bowling Game", w, 180);
    ctx.font='500 30px Comic Sans MS';
    ctx.fillText("The game starts with 12 skittles", w, 260);
    ctx.fillText("You can throw the ball three times", w, 310);
    ctx.fillText("See how many you can knock down!", w, 360);
    ctx.drawImage(insEnd, w/2-40, 400, 450, 200);
    ctx.font='900 50px Comic Sans MS';
    ctx.fillStyle = "black";
    ctx.fillText("Go!", w, 520);
    insEnd.path = new Path2D();
    insEnd.path.rect(w/2-40, 465, 450, 200);
    canvas.addEventListener("click", InsEnd);
}

function Game() {
    ctx.drawImage(bowlLane, 0, 0, 715, 750);

    ctx.drawImage(ball, 330, 640, 85, 85);

    ctx.drawImage(pin1, 290, 120, 40, 120);
    ctx.drawImage(pin2, 330, 120, 40, 120);
    ctx.drawImage(pin3, 370, 120, 40, 120);
    ctx.drawImage(pin4, 410, 120, 40, 120);

    ctx.drawImage(pin5, 310, 140, 40, 120);
    ctx.drawImage(pin6, 350, 140, 40, 120);
    ctx.drawImage(pin7, 390, 140, 40, 120);

    ctx.drawImage(pin8, 330, 160, 40, 120);
    ctx.drawImage(pin9, 370, 160, 40, 120);

    ctx.drawImage(pin10, 350, 180, 40, 120);

}


function playGame() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (splashSc) {
        Splash();
    }
    
    if (insSc) {
        Ins();
    }  
    
    if (gameSc) {
        Game();
    }   

}


function animate() {  
    
    playGame();

    requestAnimationFrame(animate);
    
}

requestAnimationFrame(animate);
