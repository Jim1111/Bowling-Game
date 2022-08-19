
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// center text
var w = canvas.width / 2;

var splashSc = true;
var insSc = false;
var gameSc = false;
var SetBalltrue = true;
var sec = true;
var lastScreen = false;
var end = false;
var score = 0;
var Rolling = false;
var introSp = true;
var wellDone = true;

/////
var clickLeft = true;
/////

var round1 = true;
var round2 = false;
var round3 = false;

var bowlRse = false;
var x = 150;
var y = 660;
var dx = 1;
var dy = -2;

// pins

var pinLeft = true;
var pinRight = true;
var strikeTar = false;




// Settings Menu //

var setMenu = false;
var bkMus = true;
var colod = true;
var white = false;

const rTick1 = new Image();
rTick1.src = "images/menuAssets/rTick.png";

const mBack = new Image();
mBack.src = "images/menuAssets/menuBackGr.png";

const menuHead = new Image();
menuHead.src = "images/menuAssets/header.png";

const BoxMus1 = new Image();
BoxMus1.src = "images/menuAssets/Box.png";

const BoxMus2 = new Image();
BoxMus2.src = "images/menuAssets/Box.png";

const BoxBack1 = new Image();
BoxBack1.src = "images/menuAssets/Box.png";

const BoxBack2 = new Image();
BoxBack2.src = "images/menuAssets/Box.png";



const cross= new Image();
cross.src = "images/menuAssets/cross.png";

const settings = new Image();
settings.src = "images/settings.png";

////////////////////////////////
/////Translation Menu //////////
var En = true;
var Ger = false;
var Rom = false;
var Bul = false;
var Grk = false;
var Tuk = false;
/////////////////////////////////

// End of Settings //


// sound effects
var ballAud = new Audio("audio/bowling-ball.mp3");
var strikeAud = new Audio("audio/strike.mp3");
var music = new Audio("audio/music.mp3");
var introSpAud = new Audio("audio/introSpAud.mp3");
var letsGoAud = new Audio("audio/letsGoAud.mp3");
var cheeringAud = new Audio("audio/cheering.mp3");
var stikeVceAud = new Audio("audio/strikeVoice.mp3");
var wellDoneAud = new Audio("audio/wellDone.mp3");

var score3Aud = new Audio("audio/score3.mp3");
var score7Aud = new Audio("audio/score7.mp3");
var score10Aud = new Audio("audio/score10.mp3");
var score13Aud = new Audio("audio/score13.mp3");
var score17Aud = new Audio("audio/score17.mp3");

var score3 = true;
var score7 = true;
var score10 = true;
var score13 = true;
var score17 = true;

const r2 = new Image();
r2.src = "images/splEnd.png";

const r3 = new Image();
r3.src = "images/splEnd.png";
   
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

const setBowl = new Image();
setBowl.src = "images/splEnd.png";

////// music change ///////////////////
///////////////////////////////////////

function MustickT(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxMus1.path, e.offsetX, e.offsetY)) {
            bkMus=true;
            canvas.removeEventListener("click", MustickT);
        }
    } // setMenu
}

function MustickF(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxMus2.path, e.offsetX, e.offsetY)) {
            bkMus=false;
            canvas.removeEventListener("click", MustickF);
        }
    } // setMenu
}

/////End of Mouse music Change///////////////////
/////////////////////////////////////////////////


// End Mouse Menu and return to game //
function endMenu(e) {
    if (setMenu) {
        if (ctx.isPointInPath(cross.path, e.offsetX, e.offsetY)) {

            setMenu=false;
            insSc=false;
            splashSc=true;

            canvas.removeEventListener("click", endMenu);
        }
    }
}


function showMenu() {
    if (setMenu) {

      ctx.fillStyle = "black";
  
      ctx.drawImage(mBack, 0, 0, canvas.width, canvas.height);
  
      ctx.globalAlpha = 1.0; 
      ctx.textAlign = "center"; 
      ctx.font = "100 80px Impact, fantasy";

      if (En) {
        ctx.fillText("Settings", w, 100);
      }
      if (Ger) {
        ctx.fillText("Einstellungen", w, 100);
      }
      if (Rom) {
        ctx.fillText("Setări", w, 100);
      }
      if (Bul) {
        ctx.fillText("Настройки", w, 100);
      }
      if (Grk) {
        ctx.fillText("Ρυθμίσεις", w, 100);
      }
      if (Tuk) {
        ctx.fillText("Ayarlar", w, 100);
      }

      

      ctx.textAlign = "left";

      ctx.fillStyle = "white";

      ctx.drawImage(menuHead, 62, 130, 250, 50);

      ctx.font = "900 25px Arial"; 
    
    if (En) {
        ctx.fillText("Music", 149, 164);
    }

    if (Ger) {
        ctx.fillText("Musik", 149, 164);
    }

    if (Rom) {
        ctx.fillText("Muzică", 149, 164);
    }

    if (Bul) {
        ctx.fillText("Музика", 149, 164);
    }

    if (Grk) {
        ctx.fillText("ΜΟΥΣΙΚΗ", 149, 164);
    }

    if (Tuk) {
        ctx.fillText("Müzik", 149, 164);
    }
    
    ctx.font = "700 30px Arial";

    ctx.drawImage(BoxMus1, 62, 190, 50, 50);
    BoxMus1.path = new Path2D();
    BoxMus1.path.rect(62, 190, 50, 50);

    ctx.fillStyle = "black";
    ctx.globalAlpha = 1.0;

    if (bkMus) {
        ctx.drawImage(rTick1, 67, 192, 50, 40);
    }

    
    if (En) {
        ctx.fillText("On", 120, 230);
    }
    if (Ger) {
        ctx.fillText("An", 120, 230);
    }
    if (Rom) {
        ctx.fillText("Pe", 120, 230);
    }
    if (Bul) {
        ctx.fillText("Ha", 120, 230);
    }
    if (Grk) {
        ctx.fillText("Επί", 120, 230);
    }
    if (Tuk) {
        ctx.fillText("Açık", 120, 230);
    }

    ctx.drawImage(BoxMus2, 62, 245, 50, 50);
    BoxMus2.path = new Path2D();
    BoxMus2.path.rect(62, 245, 50, 50);

    if (!bkMus) {
        ctx.drawImage(rTick1, 67, 247, 50, 40);
    }

    

    if (En) {
        ctx.fillText("Off", 120, 282);
    }
    if (Ger) {
        ctx.fillText("Aus", 120, 282);
    }
    if (Rom) {
        ctx.fillText("Oprit", 120, 282);
    }
    if (Bul) {
        ctx.fillText("Изключено", 120, 282);
    }
    if (Grk) {
        ctx.fillText("Μακριά από", 120, 282);
    }
    if (Tuk) {
        ctx.fillText("Kapalı", 120, 282);
    }


    canvas.addEventListener("click", MustickT);
    canvas.addEventListener("click", MustickF);
    // End of Music


    // Speech
  
    ctx.drawImage(menuHead, 410, 130, 250, 50);

    ctx.fillStyle = "white";

    ctx.font = "900 25px Arial"; 

    if (En) {
        ctx.fillText("Speech", 480, 164);
    }

    if (Ger) {
        ctx.fillText("Rede", 480, 164);
    }

    if (Rom) {
        ctx.fillText("Vorbire", 480, 164);
    }

    if (Bul) {
        ctx.fillText("Реч", 480, 164);
    }

    if (Grk) {
        ctx.fillText("Ομιλία", 480, 164);
    }
    if (Tuk) {
        ctx.fillText("Konuşma", 480, 164);
    }


    ctx.fillStyle = "black";
    ctx.font = "700 30px Arial";

    ctx.drawImage(BoxBack1, 410, 190, 50, 50);
    BoxBack1.path = new Path2D();
    BoxBack1.path.rect(410, 190, 50, 50);

    if (colod) {  
        ctx.drawImage(rTick1, 417, 192, 50, 40);
    }



    if (En) {
        ctx.fillText("On", 470, 230);
    }
    if (Ger) {
        ctx.fillText("An", 470, 230);
    }
    if (Rom) {
        ctx.fillText("Pe", 470, 230);
    }
    if (Bul) {
        ctx.fillText("Ha", 470, 230);
    }
    if (Grk) {
        ctx.fillText("Επί", 470, 230);
    }
    if (Tuk) {
        ctx.fillText("Açık", 470, 230);
    }

    ctx.drawImage(BoxBack2, 410, 245, 50, 50);
    BoxBack2.path = new Path2D();
    BoxBack2.path.rect(410, 245, 50, 50);

    

    if (white) {
        ctx.drawImage(rTick1, 417, 247, 50, 40);
    }
    
    if (En) {
        ctx.fillText("Off", 470, 282);
    }
    if (Ger) {
        ctx.fillText("Aus", 470, 282);
    }
    if (Rom) {
        ctx.fillText("Oprit", 470, 282);
    }
    if (Bul) {
        ctx.fillText("Изключено", 470, 282);
    }
    if (Grk) {
        ctx.fillText("Μακριά από", 470, 282);
    }
    if (Tuk) {
        ctx.fillText("Kapalı", 470, 282);
    }

    //canvas.addEventListener("click", speechtickT);
    //canvas.addEventListener("click", speechtickF);

    // End of Speech


    ctx.textAlign = "center"; 

    ctx.drawImage(cross, w-30, 645, 50, 50);

    cross.path = new Path2D();
    cross.path.rect(w-30, 645, 50, 50);

    canvas.addEventListener("click", endMenu);

  
  } // setMenu = true
} // end of showMenu



function SplashEnd(e) {
       if (ctx.isPointInPath(splEnd.path, e.offsetX, e.offsetY)) {
           splashSc = false;
           insSc = true;
           canvas.removeEventListener("click", SplashEnd);
        }
    }

function settingsOpen(e) {
    if (ctx.isPointInPath(settings.path, e.offsetX, e.offsetY)) {
        setMenu=true;
        canvas.removeEventListener("click", settingsOpen);
        }
    }

function Splash() {
    ctx.drawImage(settings, 600, 0, 80, 80);
    settings.path = new Path2D();
    settings.path.rect(600, 0, 100, 100);

    ctx.textAlign = "center";
    ctx.font='400 17px Arial';
    ctx.fillStyle = "white";
    ctx.fillText("Settings", 640, 85);

    ctx.font='900 150px Arial';
    ctx.fillStyle = "purple";
    ctx.fillText("Bowling", w, 245);
    ctx.font='500 90px Comic Sans MS';
    ctx.fillStyle = "silver";
    ctx.fillText("Game", w, 325);
    ctx.fillRect(0, 450, 715, 235); 
    ctx.drawImage(splEnd, w/2-40, 465, 450, 200);
    ctx.font='900 40px Comic Sans MS';
    ctx.fillStyle = "black";
    ctx.fillText("Start Game!", w, 575);
    splEnd.path = new Path2D();
    splEnd.path.rect(w/2-40, 465, 450, 200);

    canvas.addEventListener("click", settingsOpen);
    canvas.addEventListener("click", SplashEnd);
}

function InsEnd(e) {
    if (ctx.isPointInPath(insEnd.path, e.offsetX, e.offsetY)) {
        letsGoAud.play();
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
    ctx.fillText("The game starts with 10 skittles", w, 260);
    ctx.fillText("You can throw the ball twice", w, 310);
    ctx.fillText("See how many you can knock down!", w, 360);

    if (introSp) {
        introSpAud.play();
        introSp = false;
    }

    ctx.drawImage(insEnd, w/2-40, 400, 450, 200);
    ctx.font='900 50px Comic Sans MS';
    ctx.fillStyle = "black";
    ctx.fillText("Let's Go!", w, 520);

    insEnd.path = new Path2D();
    insEnd.path.rect(w/2-40, 465, 450, 200);
    canvas.addEventListener("click", InsEnd);
}

// Set up Bowling Ball //

function SetBall(e) {
    if (clickLeft && ctx.isPointInPath(setBowl.path, e.offsetX, e.offsetY)) {
        x = x+20;
        if (x >= 500) {
            x=-dx+150;
        }
        Rolling = true;
    }
}

function setBall() {
    ctx.drawImage(setBowl, w/2-40, 445, 450, 200);
    setBowl.path = new Path2D();
    setBowl.path.rect(w/2-40, 445, 600, 400);
    ctx.font='900 19px Comic Sans MS';
    ctx.fillText("Move the position of the bowling ball", w+10, 520);
    ctx.fillText("By Left Clicking on this label", w, 550);
    ctx.fillText("Then Right Clicking to release the ball!", w+5, 580);
    canvas.addEventListener("click", SetBall);
}

// Right mouse button release ball //

    window.addEventListener('contextmenu', (e) => {
        clickLeft = false;
        SetBalltrue = false;
        bowlRse = true;
        e.preventDefault();
    });

    // 10 skittles //

    function pins() {

    if (pinLeft) {
    ctx.drawImage(pin1, 290, 120, 40, 120);
    }

    if (pinRight) {
    ctx.drawImage(pin2, 330, 120, 40, 120);
    ctx.drawImage(pin3, 370, 120, 40, 120);
    }

    if (pinRight) {
    ctx.drawImage(pin4, 410, 120, 40, 120);
    }

    if (pinLeft) {
    ctx.drawImage(pin5, 310, 140, 40, 120);
    }

    if (pinRight) {
    ctx.drawImage(pin6, 350, 140, 40, 120);
    ctx.drawImage(pin7, 390, 140, 40, 120);
    }

    if (pinLeft) {
    ctx.drawImage(pin8, 330, 160, 40, 120);
    }

    if (pinRight) {
    ctx.drawImage(pin9, 370, 160, 40, 120);
    }

    if (pinRight) {
    ctx.drawImage(pin10, 350, 180, 40, 120);
    }

    

    }

    function Round2(e) {
        if (ctx.isPointInPath(r2.path, e.offsetX, e.offsetY)) {
            clickLeft = true;
            x = 150;
            y = 660;
            bowlRse = false;
            round2 = false;
            lastScreen = true;
            SetBalltrue = true;

            if (strikeTar) {
                pinLeft = true;
                pinRight = true;
            }

            canvas.removeEventListener("click", Round2);
         }
     } 

     function End(e) {
        if (ctx.isPointInPath(r3.path, e.offsetX, e.offsetY)) {
            clickLeft = true;
            x = 150;
            y = 660;
            sec = true;
            bowlRse = false;
            pinLeft = true;
            pinRight = true;
            gameSc = false;
            round1 = true;
            end = false;
            lastScreen = false;
            SetBalltrue = true;
            splashSc = true;
            score=0;
            wellDone = true;
            score3 = true;
            score7 = true;
            score10 = true;
            score13 = true;
            score17 = true;
            canvas.removeEventListener("click", End);
         }
     } 

     

    function rounds() {

        if (round2) {
            ctx.drawImage(r2, w/2-40, 400, 450, 200);
            ctx.textAlign = "center"; 
            ctx.font='900 60px Comic Sans MS';

            if (strikeTar) {
                ctx.fillStyle = "blue";
                ctx.fillText("Strike!", w+10, 484);  
                ctx.fillStyle = "black";
                ctx.font='900 20px Comic Sans MS';
                ctx.fillText("You knocked down " + score + " skittles so far!", w, 518);
                ctx.fillText("Let's throw the 2nd ball now!", w+10, 552);
            }

            if (!strikeTar) {
                ctx.font='900 25px Comic Sans MS';
                ctx.fillText("You knocked down", w, 456);
                ctx.font='900 35px Comic Sans MS';
                ctx.fillStyle = "blue";
                ctx.fillText(score, w, 494);
                ctx.font='900 25px Comic Sans MS';
                ctx.fillStyle = "black";
                ctx.fillText("skittles so far!", w, 520);
                ctx.font='900 25px Comic Sans MS';
                ctx.fillText("Let's throw the 2nd ball now!", w+4, 556);
            }

            r2.path = new Path2D();
            r2.path.rect(w/2-40, 465, 450, 200);
            sec = false;
            canvas.addEventListener("click", Round2);
        }

        if (end) {
            ctx.drawImage(r3, w/2-40, 400, 450, 200);
            ctx.textAlign = "center"; 
            ctx.font='900 35px Comic Sans MS';
            ctx.fillText("Game Over!", w+10, 475);
            ctx.font='900 25px Comic Sans MS';
            ctx.fillText("You knocked down " + score + " skittles", w+10, 510);

            if (score3 && score >= 1 && score <= 3) {
                score3Aud.play();
                score3 = false;
            }

            if (score7 && score >= 4 && score <= 7) {
                score7Aud.play();
                score7 = false;
            }

            if (score10 && score >= 8 && score <= 10) {
                score10Aud.play();
                score10 = false;
            }

            if (score13 && score >= 11 && score <= 13) {
                score13Aud.play();
                score13 = false;
            }

            if (score17 && score >= 14 && score <= 17) {
                score17Aud.play();
                score17 = false;
            }


            ctx.fillText("Well Done!", w+10, 545);
            r3.path = new Path2D();
            r3.path.rect(w/2-40, 465, 600, 400);
            lastScreen = false;

            if (wellDone) {
            wellDoneAud.play();
            wellDone = false;
            }

            canvas.addEventListener("click", End);
        }

    }

    function ScoreBoard() {
       ctx.textAlign = "center"; 
       ctx.font='600 55px Arial';
       ctx.fillStyle = "white";
       ctx.fillText("Score: " + score, w, 70);
       ctx.fillStyle = "black";
    }

    function rolling() {

    if (bowlRse) {
        ballAud.play();
        y += dy;
    }


    if (pinLeft && pinRight && round1) {
        if (x >= 320 && x <= 335 && y <= 180) { 

            //if (introSp) {
                cheeringAud.play();
                stikeVceAud.play();
            //}

            pinLeft = false;
            pinRight = false;
            strikeTar = true;
            strikeAud.play();
            score=score+10;
        }
    }

    if (pinLeft) {
    if (x >= 200 && x <= 300 && y < 180) {
            pinLeft = false;
            strikeTar = false;
            strikeAud.play();
            score=score+3;
        }
    }

    if (pinRight) {
    if (x >= 301 && x <= 430 && y < 180) {
            pinRight = false;
            strikeTar = false;;
            strikeAud.play();
            score=score+7;
        }
    }  

    if (y < 180) {
        Rolling = false;
        ballAud.pause();
        ballAud.currentTime = 0;
        y=-200;
        round1 = false;
        Rolling = false;

    if (sec) {
        round2 = true;
    }

    if (lastScreen) {
        end = true;
    }

    }
}


function Game() {
    ctx.drawImage(bowlLane, 0, 0, 715, 750);
    ctx.drawImage(ball, x, y, 70, 70);
    ScoreBoard(); 
    pins();
    rounds();
}


function playGame() {

    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    
    if (setMenu) {
        showMenu();
    }

    if (splashSc && !setMenu) {
        Splash();
    }
    
    if (insSc && !setMenu) {
        Ins();
    }  
    
    if (gameSc) {
  
        Game();

        introSpAud.pause();
        introSpAud.currentTime = 0;

        if (SetBalltrue) {
            setBall();
        }

        if (Rolling) {
            rolling();
        }        
    }
}

function animate() {  
    
    playGame();

    if (bkMus) {
        music.play();
        music.volume = 0.2;
    }
    
    if (!bkMus) {
        music.pause();
        music.currentTime = 0;
    }

    requestAnimationFrame(animate);
    
}

requestAnimationFrame(animate);
