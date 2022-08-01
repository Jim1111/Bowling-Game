
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// center text
var w = canvas.width / 2;

var splashSc = true;

////////////////////////////////
/////Translation Menu //////////
var En = true;
var Ger = false;
var Rom = false;
var Bul = false;
var Grk = false;
var Tuk = false;
/////////////////////////////////

   
const title = new Image();
title.src = "images/bowlingTitle.png";

function Splash() {
    //ctx.drawImage(title, 0, 0, canvas.width, canvas.height);
    ctx.textAlign = "center";
    ctx.font='900 150px Arial';
    ctx.fillStyle = "purple";
    ctx.fillText("Bowling", w, 220);
    ctx.font='900 90px Arial';
    ctx.fillStyle = "silver";
    ctx.fillText("Game", w, 300);
    ctx.fillStyle = "silver";
    ctx.globalAlpha = 1.0;
    ctx.fillRect(0, 450, 715, 235);
    ctx.textAlign = "center"; 
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "navy";
}


function playGame() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (splashSc) {
        Splash();
    }    

}


function animate() {  
    
    playGame();

    requestAnimationFrame(animate);
    
}

requestAnimationFrame(animate);
