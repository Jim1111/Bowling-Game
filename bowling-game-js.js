
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

var clickRightTrue = true;

var settingsKeyIns = false;

var KeyboardMenu = false;
var KeyMenu1 = false;
var KeyMenu2 = false;
var KeyMenu3 = false;
var KeyMenu4 = false;
var KeyMenu5 = false;
var KeyMenu6 = false;
var KeyMenu7 = false;
var KeyMenu8 = false;
var KeyMenu9 = false;
var KeyMenu10 = false;
var KeyMenu11 = false;
var KeyMenu12 = false;

// center text
var w = canvas.width / 2;

const keys = []; // keyboard operations

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
});

window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
});

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

var MSw1 = true;                        //
var MSw2 = false;                       //
var MSw3 = false;                       //
var MSw4 = false;                       //
var MSw5 = false;                       //
var MSw6 = false;                       //                                        
var MSw7 = false;                       // 
var MSw8 = false;                       //
var MSw9 = false;  
var MSw10 = false; 
var MSw11 = false; 
var MSw12 = false; 
var MSw13 = false; 





// Settings Menu //

var setMenu = false; // Game = false // setMenu = true

var musicOn = true;
var speechOn = true;
var effectsOn = true;
/////Translation Menu //////////
var En = true;
var Ger = false;
var Rom = false;
var Bul = false;
var Grk = false;
var Tuk = false;

// red tick
const rTick1 = new Image();
rTick1.src = "images/menuAssets/rTick.png";

// white background
const mBack = new Image();
mBack.src = "images/menuAssets/menuBackGr.png";

// Purple Header
const menuHead = new Image();
menuHead.src = "images/menuAssets/header.png";

// Circles
const BoxMus1 = new Image();
BoxMus1.src = "images/menuAssets/Box.png";

const BoxMus2 = new Image();
BoxMus2.src = "images/menuAssets/Box.png";

const BoxSp1 = new Image();
BoxSp1.src = "images/menuAssets/Box.png";

const BoxSp2 = new Image();
BoxSp2.src = "images/menuAssets/Box.png";

const BoxEff1 = new Image();
BoxEff1.src = "images/menuAssets/Box.png";

const BoxEff2 = new Image();
BoxEff2.src = "images/menuAssets/Box.png";

// Trans cicles

const BoxEn = new Image();
BoxEn.src = "images/menuAssets/Box.png";

const BoxGer = new Image();
BoxGer.src = "images/menuAssets/Box.png";

const BoxRom = new Image();
BoxRom.src = "images/menuAssets/Box.png";

const BoxBul = new Image();
BoxBul.src = "images/menuAssets/Box.png";

const BoxGrk = new Image();
BoxGrk.src = "images/menuAssets/Box.png";

const BoxTur = new Image();
BoxTur.src = "images/menuAssets/Box.png";


// Cross - return to game
const cross= new Image();
cross.src = "images/menuAssets/cross.png";

// icon on splash screen
const settings = new Image();
settings.src = "images/settings.png";


// End of Settings //


// sound effects
var ballAud = new Audio("audio/bowling-ball.mp3");
var strikeAud = new Audio("audio/strike.mp3");
var music = new Audio("audio/music.mp3");
var introSpAud = new Audio("audio/introSpAud.mp3");

var letsGoAud = new Audio("audio/letsGoAud.mp3");
var letsGoAudGer = new Audio("audio/letsGoAudGer.mp3");

var letsGoAudRom = new Audio("audio/letsGoAudRom.mp3");
var letsGoAudBul = new Audio("audio/letsGoAudBul.mp3");
var letsGoAudGrk = new Audio("audio/letsGoAudGrk.mp3");
var letsGoAudTur = new Audio("audio/letsGoAudTur.mp3");

var cheeringAud = new Audio("audio/cheering.mp3");


var stikeVceAud = new Audio("audio/strikeVoice.mp3");
var stikeVceAudGer = new Audio("audio/strikeVoiceGer.mp3");
var stikeVceAudRom = new Audio("audio/strikeVoiceRom.mp3");
var stikeVceAudBul = new Audio("audio/strikeVoiceBul.mp3");
var stikeVceAudGrk = new Audio("audio/strikeVoiceGrk.mp3");
var stikeVceAudTur = new Audio("audio/strikeVoiceTur.mp3");

var wellDoneAud = new Audio("audio/wellDone.mp3");
var wellDoneAudGer = new Audio("audio/wellDoneGer.mp3");

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
            musicOn=true;
            canvas.removeEventListener("click", MustickT);
        }
    } // setMenu
}

function MustickF(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxMus2.path, e.offsetX, e.offsetY)) {
            musicOn=false;
            canvas.removeEventListener("click", MustickF);
        }
    } // setMenu
}

/////End of Mouse music Change///////////////////
/////////////////////////////////////////////////

////// speech change ///////////////////
///////////////////////////////////////

function SptickT(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxSp1.path, e.offsetX, e.offsetY)) {
            speechOn=true;
            canvas.removeEventListener("click", SptickT);
        }
    } // setMenu
}

function SptickF(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxSp2.path, e.offsetX, e.offsetY)) {
            speechOn=false;
            canvas.removeEventListener("click", SptickF);
        }
    } // setMenu
}

/////End of Mouse speech Change///////////////////
/////////////////////////////////////////////////

////// translate change ///////////////////
///////////////////////////////////////

function enOn(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxEn.path, e.offsetX, e.offsetY)) {
            En=true;
            Ger=false;
            Rom=false;
            Bul=false;
            Grk=false;
            Tuk=false;
            canvas.removeEventListener("click", enOn);
        }
    }
}

function gerOn(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxGer.path, e.offsetX, e.offsetY)) {
            En=false;
            Ger=true;
            Rom=false;
            Bul=false;
            Grk=false;
            Tuk=false;
            canvas.removeEventListener("click", gerOn);
        }
    }
}

function romOn(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxRom.path, e.offsetX, e.offsetY)) {
            En=false;;
            Ger=false;
            Rom=true;
            Bul=false;
            Grk=false;
            Tuk=false;
            canvas.removeEventListener("click", romOn);
        }
    }
}

function bulOn(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxBul.path, e.offsetX, e.offsetY)) {
            En=false;
            Ger=false;
            Rom=false;
            Bul=true;
            Grk=false;
            Tuk=false;
            canvas.removeEventListener("click", bulOn);
        }
    }
}

function grkOn(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxGrk.path, e.offsetX, e.offsetY)) {
            En=false;
            Ger=false;
            Rom=false;
            Bul=false;
            Grk=true;
            Tuk=false;
            canvas.removeEventListener("click", grkOn);
        }
    }
}

function turOn(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxTur.path, e.offsetX, e.offsetY)) {
            En=false;
            Ger=false;
            Rom=false;
            Bul=false;
            Grk=false;
            Tuk=true;
            canvas.removeEventListener("click", turOn);
        }
    }
}

/////End of translate speech Change///////////////////
/////////////////////////////////////////////////

////// effects change ///////////////////
///////////////////////////////////////

function effectsT(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxEff1.path, e.offsetX, e.offsetY)) {
            effectsOn=true;
            canvas.removeEventListener("click", effectsT);
        }
    } // setMenu
}

function effectsF(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxEff2.path, e.offsetX, e.offsetY)) {
            effectsOn=false;
            canvas.removeEventListener("click", effectsF);
        }
    } // setMenu
}

/////End of Mouse effects Change///////////////////
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







if (setMenu) {
    if (keys[13] && KeyMenu1) {
        musicOn=true;
    }

    if (keys[13] && KeyMenu2) {
        musicOn=false;
    }

    /*
    if (keys[13] && KeyMenu3 && MSw3) {
        colod = true;
        white = false;
    }

    if (keys[13] && KeyMenu4 && MSw4) {
        colod = false;
        white = true;
    }

    if (keys[13] && KeyMenu5 && MSw5) {
        togSpeech=true;
    }

    if (keys[13] && KeyMenu6 && MSw6) {
        togSpeech=false;
    }

    if (keys[13] && KeyMenu7 && MSw7) {
        togQs1 = true;
        togQs2 = false;
        togQs3 = false;
    }

    if (keys[13] && KeyMenu8 && MSw8) {
        togQs2 = true;
        togQs1 = false;
        togQs3 = false;
    }

    if (keys[13] && KeyMenu9 && MSw9) {
        togQs3 = true;
        togQs1 = false;
        togQs2 = false;
    }
    */
}


function switchKeysM1(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu1 && MSw1) {
        KeyMenu1 = false;
        KeyMenu2 = true;
        KeyMenu3 = false;
        KeyMenu4 = false;
        KeyMenu5 = false;
        KeyMenu6 = false;
        MSw1 = false;
        MSw2 = true;
        MSw3 = false;
        MSw4 = false;
        MSw5 = false;
        MSw6 = false;
        removeEventListener("keydown", switchKeysM1, false);
    }
    }
}

function switchKeysM2(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu2 && MSw2) {
    KeyMenu1 = false;
    KeyMenu2 = false;
    KeyMenu3 = true;
    KeyMenu4 = false;
    KeyMenu5 = false;
    KeyMenu6 = false;
    MSw1 = false;
    MSw2 = false;
    MSw3 = true;
    MSw4 = false;
    MSw5 = false; 
    MSw6 = false; 
    removeEventListener("keydown", switchKeysM2, false);
    }
    }
}


function endInsKey() {
    if (keys[32]) {
        settingsKeyIns = false;
        removeEventListener("keydown", endInsKey);
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

      if (settingsKeyIns) {
          ctx.globalAlpha = 1.0;
          ctx.fillStyle = "purple";
          ctx.fillRect(111, 140, 500, 450);
          ctx.textAlign = "center"; 

          ctx.fillStyle = "black";
          ctx.font = "900 50px Arial"; 
          ctx.fillText("Instructions", w, 200);
          ctx.font = "900 30px Arial"; 
          ctx.fillStyle = "white";
          ctx.fillText("Press the Spacear to tab", w, 280);
          ctx.fillText("between the options", w, 320);
          ctx.fillText("Then press the", w, 400);
          ctx.fillText("enter key to select", w, 440);
          ctx.fillStyle = "black";
          ctx.fillText("Press the spacebar", w, 520);
          ctx.fillText("to continue", w, 560);

    addEventListener("keydown", endInsKey);

      }
  
      if (!settingsKeyIns) {

      ctx.textAlign = "left";

      ///////////////////////////////////////////////
      if (KeyboardMenu) {
      if (KeyMenu1) {
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = "Blue";
      ctx.fillRect(60, 190, 257, 50);
      ctx.globalAlpha = 1.0;
      }
    }
      ///////////////////////////////////////////////


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
        ctx.fillText("ΜΟΥΣΙΚΗ", 119, 164);
    }

    if (Tuk) {
        ctx.fillText("Müzik", 149, 164);
    }
    
    ctx.fillStyle = "black";
    ctx.font = "700 27px Arial";

    ctx.drawImage(BoxMus1, 62, 190, 50, 50);
    BoxMus1.path = new Path2D();
    BoxMus1.path.rect(62, 190, 50, 50);

    
    ///////////////////////////////////////////////
    if (KeyboardMenu) {
    if (KeyMenu2) {
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = "Blue";
    ctx.fillRect(60, 245, 257, 50);
    }
}
    ///////////////////////////////////////////////
    
    ctx.fillStyle = "black";
    ctx.globalAlpha = 1.0;

    if (musicOn) {
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

    if (!musicOn) {
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

    ///////////////////////////////////////////////
    if (KeyboardMenu) {
    if (KeyMenu3) {
ctx.globalAlpha = 0.3;
ctx.fillStyle = "Blue";
ctx.fillRect(410, 190, 257, 50);
ctx.globalAlpha = 1.0;
    }
}
///////////////////////////////////////////////

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
    ctx.font = "700 27px Arial";

    

    ctx.drawImage(BoxSp1, 410, 190, 50, 50);
    BoxSp1.path = new Path2D();
    BoxSp1.path.rect(410, 190, 50, 50);

     ///////////////////////////////////////////////
     if (KeyboardMenu) {
     if (KeyMenu4) {
ctx.globalAlpha = 0.3;
ctx.fillStyle = "Blue";
ctx.fillRect(410, 245, 257, 50);
ctx.globalAlpha = 1.0;
ctx.fillStyle = "black";
     }
    }
///////////////////////////////////////////////

    if (speechOn) {  
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

    ctx.drawImage(BoxSp2, 410, 245, 50, 50);
    BoxSp2.path = new Path2D();
    BoxSp2.path.rect(410, 245, 50, 50);

    

    if (!speechOn) {
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

    canvas.addEventListener("click", SptickT);
    canvas.addEventListener("click", SptickF);

    // End of Speech

    // Translations
  
    ctx.fillStyle = "white";

      ctx.drawImage(menuHead, 62, 320, 250, 50);

           ///////////////////////////////////////////////
           if (KeyboardMenu) {
           if (KeyMenu5) {
ctx.globalAlpha = 0.3;
ctx.fillStyle = "Blue";
ctx.fillRect(62, 378, 257, 50);
ctx.globalAlpha = 1.0;
ctx.fillStyle = "white";
           }
        }
///////////////////////////////////////////////

      ctx.font = "900 25px Arial"; 
    
    if (En) {
        ctx.fillText("Translations", 102, 353);
    }

    if (Ger) {
        ctx.fillText("Übersetzungen", 84, 353);
    }

    if (Rom) {
        ctx.fillText("Traduceri", 115, 353);
    }

    if (Bul) {
        ctx.fillText("Преводи", 115, 353);
    }

    if (Grk) {
        ctx.fillText("Μεταφράσεις", 95, 353);
    }

    if (Tuk) {
        ctx.fillText("Çeviriler", 112, 353);
    }
    
    ctx.font = "700 27px Arial";
    ctx.fillStyle = "black";

    ctx.drawImage(BoxEn, 62, 378, 50, 50);
    BoxEn.path = new Path2D();
    BoxEn.path.rect(62, 378, 50, 50);

         ///////////////////////////////////////////////
         if (KeyboardMenu) {
         if (KeyMenu6) {
ctx.globalAlpha = 0.3;
ctx.fillStyle = "Blue";
ctx.fillRect(62, 430, 257, 50);
ctx.globalAlpha = 1.0;
ctx.fillStyle = "black";
         }
        }
///////////////////////////////////////////////

    if (En) {
        ctx.drawImage(rTick1, 67, 379, 50, 40);
    }

    if (En) {
        ctx.fillText("English", 120, 412);
    }
    if (Ger) {
        ctx.fillText("Englisch", 120, 412);
    }
    if (Rom) {
        ctx.fillText("Engleză", 120, 412);
    }
    if (Bul) {
        ctx.fillText("Английски", 120, 412);
    }
    if (Grk) {
        ctx.fillText("Αγγλικά", 120, 412);
    }
    if (Tuk) {
        ctx.fillText("ingilizce", 120, 412);
    }

    ctx.drawImage(BoxGer, 62, 430, 50, 50);
    BoxGer.path = new Path2D();
    BoxGer.path.rect(62, 430, 50, 50);

             ///////////////////////////////////////////////
             if (KeyboardMenu) {
             if (KeyMenu7) {
ctx.globalAlpha = 0.3;
ctx.fillStyle = "Blue";
ctx.fillRect(62, 482, 257, 50);
ctx.globalAlpha = 1.0;
ctx.fillStyle = "black";
             }
            }
///////////////////////////////////////////////

    if (Ger) {
        ctx.drawImage(rTick1, 67, 431, 50, 40);
    }
    

    if (En) {
        ctx.fillText("German", 120, 465);
    }
    if (Ger) {
        ctx.fillText("Deutsch", 120, 465);
    }
    if (Rom) {
        ctx.fillText("limba germana", 120, 465);
    }
    if (Bul) {
        ctx.fillText("Немски", 120, 465);
    }
    if (Grk) {
        ctx.fillText("Γερμανός", 120, 465);
    }
    if (Tuk) {
        ctx.fillText("Almanca", 120, 465);
    }

    ctx.drawImage(BoxRom, 62, 482, 50, 50);
    BoxRom.path = new Path2D();
    BoxRom.path.rect(62, 482, 50, 50);

///////////////////////////////////////////////
if (KeyboardMenu) {
if (KeyMenu8) {
ctx.globalAlpha = 0.3;
ctx.fillStyle = "Blue";
ctx.fillRect(62, 534, 257, 50);
ctx.globalAlpha = 1.0;
ctx.fillStyle = "black";
}
}
///////////////////////////////////////////////

    if (Rom) {
        ctx.drawImage(rTick1, 67, 483, 50, 40);
    }
    

    if (En) {
        ctx.fillText("Romanian", 120, 518);
    }
    if (Ger) {
        ctx.fillText("rumänisch", 120, 518);
    }
    if (Rom) {
        ctx.fillText("Română", 120, 518);
    }
    if (Bul) {
        ctx.fillText("румънски", 120, 518);
    }
    if (Grk) {
        ctx.fillText("ρουμανικός", 120, 518);
    }
    if (Tuk) {
        ctx.fillText("Rumence", 120, 518);
    }

    ctx.drawImage(BoxBul, 62, 534, 50, 50);
    BoxBul.path = new Path2D();
    BoxBul.path.rect(62, 534, 50, 50);

                 ///////////////////////////////////////////////
                 if (KeyboardMenu) {
                 if (KeyMenu9) {
ctx.globalAlpha = 0.3;
ctx.fillStyle = "Blue";
ctx.fillRect(62, 586, 257, 50);
ctx.globalAlpha = 1.0;
ctx.fillStyle = "black";
                 }
                }
///////////////////////////////////////////////

    if (Bul) {
        ctx.drawImage(rTick1, 67, 535, 50, 40);
    }

    

    if (En) {
        ctx.fillText("Bulgarian", 120, 571);
    }
    if (Ger) {
        ctx.fillText("bulgarisch", 120, 571);
    }
    if (Rom) {
        ctx.fillText("bulgară", 120, 571);
    }
    if (Bul) {
        ctx.fillText("български", 120, 571);
    }
    if (Grk) {
        ctx.fillText("Βούλγαρος", 120, 571);
    }
    if (Tuk) {
        ctx.fillText("Bulgarca", 120, 571);
    }

    ctx.drawImage(BoxGrk, 62, 586, 50, 50);
    BoxGrk.path = new Path2D();
    BoxGrk.path.rect(62, 586, 50, 50);

                 ///////////////////////////////////////////////
                 if (KeyboardMenu) {
                 if (KeyMenu10) {
ctx.globalAlpha = 0.3;
ctx.fillStyle = "Blue";
ctx.fillRect(62, 638, 257, 50);
ctx.globalAlpha = 1.0;
ctx.fillStyle = "black";
                 }
                }
///////////////////////////////////////////////

    if (Grk) {
        ctx.drawImage(rTick1, 67, 587, 50, 40);
    }

    if (En) {
        ctx.fillText("Greek", 120, 621);
    }
    if (Ger) {
        ctx.fillText("griechisch", 120, 621);
    }
    if (Rom) {
        ctx.fillText("greacă", 120, 621);
    }
    if (Bul) {
        ctx.fillText("Гръцки", 120, 621);
    }
    if (Grk) {
        ctx.fillText("Ελληνικά", 120, 621);
    }
    if (Tuk) {
        ctx.fillText("Yunan", 120, 621);
    }

    

    ctx.drawImage(BoxTur, 62, 638, 50, 50);
    BoxTur.path = new Path2D();
    BoxTur.path.rect(62, 638, 50, 50);



    if (Tuk) {
        ctx.drawImage(rTick1, 67, 639, 50, 40);
    }

   

    if (En) {
        ctx.fillText("Turkish", 120, 673);
    }
    if (Ger) {
        ctx.fillText("Türkisch", 120, 673);
    }
    if (Rom) {
        ctx.fillText("turc", 120, 673);
    }
    if (Bul) {
        ctx.fillText("Турски", 120, 673);
    }
    if (Grk) {
        ctx.fillText("τούρκικος", 120, 673);
    }
    if (Tuk) {
        ctx.fillText("Türk", 120, 673);
    }

    canvas.addEventListener("click", enOn);
    canvas.addEventListener("click", gerOn);
    canvas.addEventListener("click", romOn);
    canvas.addEventListener("click", bulOn);
    canvas.addEventListener("click", grkOn);
    canvas.addEventListener("click", turOn);
    

    
    // End of Translations

    // Effects
  
    ctx.drawImage(menuHead, 410, 320, 250, 50);

                     ///////////////////////////////////////////////
                     if (KeyboardMenu) {
                     if (KeyMenu11) {
ctx.globalAlpha = 0.3;
ctx.fillStyle = "Blue";
ctx.fillRect(410, 378, 257, 50);
ctx.globalAlpha = 1.0;
                     }
                    }
///////////////////////////////////////////////

    ctx.fillStyle = "white";

    ctx.font = "900 25px Arial"; 

    if (En) {
        ctx.fillText("Effects", 480, 353);
    }

    if (Ger) {
        ctx.fillText("Auswirkungen", 440, 353);
    }

    if (Rom) {
        ctx.fillText("Efecte", 480, 353);
    }

    if (Bul) {
        ctx.fillText("Ефекти", 480, 353);
    }

    if (Grk) {
        ctx.fillText("Υπάρχοντα", 460, 353);
    }
    if (Tuk) {
        ctx.fillText("Etkileri", 480, 353);
    }


    ctx.fillStyle = "black";
    ctx.font = "700 27px Arial";

    ctx.drawImage(BoxEff1, 410, 378, 50, 50);
    BoxEff1.path = new Path2D();
    BoxEff1.path.rect(410, 378, 50, 50);

///////////////////////////////////////////////
if (KeyboardMenu) {
if (KeyMenu12) {
ctx.globalAlpha = 0.3;
ctx.fillStyle = "Blue";
ctx.fillRect(410, 433, 257, 50);
ctx.globalAlpha = 1.0;
ctx.fillStyle = "black";
}
}
///////////////////////////////////////////////

    if (effectsOn) {  
        ctx.drawImage(rTick1, 416, 379, 50, 40);
    }

    if (En) {
        ctx.fillText("On", 470, 415);
    }
    if (Ger) {
        ctx.fillText("An", 470, 415);
    }
    if (Rom) {
        ctx.fillText("Pe", 470, 415);
    }
    if (Bul) {
        ctx.fillText("Ha", 470, 415);
    }
    if (Grk) {
        ctx.fillText("Επί", 470, 415);
    }
    if (Tuk) {
        ctx.fillText("Açık", 470, 415);
    }

    ctx.drawImage(BoxEff2, 410, 433, 50, 50);
    BoxEff2.path = new Path2D();
    BoxEff2.path.rect(410, 433, 50, 50);

    

    if (!effectsOn) {
        ctx.drawImage(rTick1, 417, 433, 50, 40);
    }
    
    if (En) {
        ctx.fillText("Off", 470, 470);
    }
    if (Ger) {
        ctx.fillText("Aus", 470, 470);
    }
    if (Rom) {
        ctx.fillText("Oprit", 470, 470);
    }
    if (Bul) {
        ctx.fillText("Изключено", 470, 470);
    }
    if (Grk) {
        ctx.fillText("Μακριά από", 470, 470);
    }
    if (Tuk) {
        ctx.fillText("Kapalı", 470, 470);
    }

    canvas.addEventListener("click", effectsT);
    canvas.addEventListener("click", effectsF);

    // End of Effects

    


    ctx.textAlign = "center"; 

    ctx.drawImage(cross, w-30, 675, 50, 50);

    cross.path = new Path2D();
    cross.path.rect(w-30, 675, 50, 50);

    canvas.addEventListener("click", endMenu);

    ////////////////////////////////////////////////////////////// 13/12/22





    if (MSw1) {
        addEventListener("keydown", switchKeysM1);
        }
    
        if (MSw2) {
        addEventListener("keydown", switchKeysM2);
        }
        
        
        /////////////////////////////////////////////////////

    } //settingsKeyIns = false
  
  } // setMenu = true
} // end of showMenu



function SplashEnd(e) {
       if (ctx.isPointInPath(splEnd.path, e.offsetX, e.offsetY)) {
           splashSc = false;
           insSc = true;
           canvas.removeEventListener("click", SplashEnd);
        }
    }

    function SplashEndKey(e) {
         // Keyboard controls
        if (keys[32]) {
            splashSc = false;
            insSc = true;
            removeEventListener("keydown", SplashEndKey);
        }
     }

function settingsOpen(e) {
    if (ctx.isPointInPath(settings.path, e.offsetX, e.offsetY)) {
        setMenu=true;
        canvas.removeEventListener("click", settingsOpen);
        }
    }

    function settingsOpenKey(e) {
        if (keys[83]) {
            KeyboardMenu = true;
            settingsKeyIns = true;
            KeyMenu1 = true;
            setMenu = true;
            removeEventListener("keydown", settingsOpenKey);
            }
        }

function Splash() {
    ctx.drawImage(settings, 600, 0, 80, 80);
    settings.path = new Path2D();
    settings.path.rect(600, 0, 100, 100);

    ctx.textAlign = "center";
    ctx.font='400 13px Arial';
    ctx.fillStyle = "white";

    
    if (En) {
        ctx.fillText("Settings", 640, 80);
        ctx.fillText("Click Here", 640, 95);
        ctx.fillText("Or press S", 640, 110);
    }
    if (Ger) {
        ctx.fillText("Einstellungen", 640, 85);
    }
    if (Rom) {
        ctx.fillText("Setări", 640, 85);
    }
    if (Bul) {
        ctx.fillText("Настройки", 640, 85);
    }
    if (Grk) {
        ctx.fillText("Ρυθμίσεις", 640, 85);
    }
    if (Tuk) {
        ctx.fillText("Ayarlar", 640, 85);
    }


    ctx.font='900 150px Arial';
    ctx.fillStyle = "purple";


    

    if (En) {
        ctx.fillText("Bowling", w, 250);
    }
    if (Ger) {
        ctx.fillText("Bowling", w, 250);
    }
    if (Rom) {
        ctx.fillText("Bowling", w, 250);
    }
    if (Bul) {
        ctx.font='500 140px Comic Sans MS';
        ctx.fillText("Боулинг", w, 205);
    }
    if (Grk) {
        ctx.font='500 120px Comic Sans MS';
        ctx.fillText("Μπόουλινγκ", w, 250);
    }
    if (Tuk) {
        ctx.fillText("Bowling", w, 250);
    }


    ctx.font='500 90px Comic Sans MS';
    ctx.fillStyle = "silver";

    
    if (En) {
        ctx.fillText("Game", w, 330);
    }
    if (Ger) {
        ctx.fillText("Spiel", w, 330);
    }
    if (Rom) {
        ctx.fillText("Joc", w, 330);
    }
    if (Bul) {
        ctx.fillText("Игра", w, 330);
    }
    if (Grk) {
        ctx.fillText("Παιχνίδι", w, 330);
    }
    if (Tuk) {
        ctx.fillText("oyun", w, 330);
    }

    ctx.fillRect(0, 450, 715, 235); 
    ctx.drawImage(splEnd, w/2-40, 465, 450, 200);
    ctx.font='900 50px Comic Sans MS';
    ctx.fillStyle = "black";
 
    if (En) {
        ctx.fillText("Start Game!", w, 565);
        ctx.font='900 20px Comic Sans MS';
        ctx.fillText("Left Click or Press the Spacebar", w, 605);
    }
    if (Ger) {
        ctx.fillText("Spiel beginnen!", w, 575);
    }
    if (Rom) {
        ctx.fillText("Incepe jocul!", w, 575);
    }
    if (Bul) {
        ctx.fillText("Започни игра!", w, 575);
    }
    if (Grk) {
        ctx.font='900 35px Arial';
        ctx.fillText("Ξεκίνα το παιχνίδι!", w, 575);
    }
    if (Tuk) {
        ctx.font='900 35px Arial';
        ctx.fillText("Oyunu başlatmak!", w, 575);
    }

    splEnd.path = new Path2D();
    splEnd.path.rect(w/2-40, 465, 450, 200);




   




    addEventListener("keydown", SplashEndKey);
    addEventListener("keydown", settingsOpenKey);
    canvas.addEventListener("click", settingsOpen);
    canvas.addEventListener("click", SplashEnd);
}

function InsEnd(e) {
    if (ctx.isPointInPath(insEnd.path, e.offsetX, e.offsetY)) {

        if (speechOn) {         
            if (En) {
                letsGoAud.play();
            }
            if (Ger) {
                letsGoAudGer.play();
            }
            if (Rom) {
                letsGoAudRom.play();
            }
            if (Bul) {
                letsGoAudBul.play();
            }
            if (Grk) {
                letsGoAudGrk.play();
            }
            if (Tuk) {
                letsGoAudTur.play();
            }
        }

        insSc = false;
        gameSc = true;

        canvas.removeEventListener("click", InsEnd);
     }
 } 

 function InsEndKey(e) {
    // Keyboard controls
    if (keys[32]) {
        splashSc = false;
        insSc = false;

        if (speechOn) {         
            if (En) {
                letsGoAud.play();
            }
            if (Ger) {
                letsGoAudGer.play();
            }
            if (Rom) {
                letsGoAudRom.play();
            }
            if (Bul) {
                letsGoAudBul.play();
            }
            if (Grk) {
                letsGoAudGrk.play();
            }
            if (Tuk) {
                letsGoAudTur.play();
            }
        }
        
        gameSc = true;
        removeEventListener("keydown", InsEndKey);
     }
 }

function Ins() {
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillRect(50, 80, 616, 550);  
    ctx.fillStyle = "purple";
    ctx.font='900 90px Comic Sans MS';

    if (En) {
        ctx.fillText("Bowling Game", w, 180);
    }
    if (Ger) {
        ctx.fillText("Bowling Spiel", w, 180);
    }
    if (Rom) {
        ctx.fillText("Bowling Joc", w, 180);
    }
    if (Bul) {
        ctx.font='900 70px Comic Sans MS';
        ctx.fillText("Боулинг Игра", w, 180);
    }
    if (Grk) {
        ctx.font='900 50px Comic Sans MS';
        ctx.fillText("Μπόουλινγκ Παιχνίδι", w, 180);
    }
    if (Tuk) {
        ctx.font='900 70px Comic Sans MS';
        ctx.fillText("Bowling oyun", w, 180);
    }

    ctx.font='600 30px Comic Sans MS';

    

    if (En) {
        ctx.fillText("The game starts with 10 skittles", w, 260);
        ctx.fillText("You can throw the ball twice", w, 310);
        ctx.fillText("See how many you can knock down!", w, 360);
    }
    if (Ger) {
        ctx.font='700 25px Comic Sans MS';
        ctx.fillText("Das Spiel beginnt mit 10 Kegeln", w, 260);
        ctx.fillText("Du kannst den Ball zweimal werfen", w, 310);
        ctx.fillText("Sehen Sie, wie viele Sie niederschlagen können!", w, 360);
    }
    if (Rom) {
        ctx.fillText("Jocul începe cu 10 skittles", w, 260);
        ctx.fillText("Puteți arunca mingea de două ori", w, 310);
        ctx.fillText("Vezi câte poți doborî!", w, 360);
    }
    if (Bul) {
        ctx.fillText("Играта започва с 10 кегли", w, 260);
        ctx.fillText("Можете да хвърлите топката два пъти", w, 310);
        ctx.fillText("Вижте колко можете да съборите!", w, 360);
    }
    if (Grk) {
        ctx.font='700 25px Comic Sans MS';
        ctx.fillText("Το παιχνίδι ξεκινά με 10 κορύνες", w, 260);
        ctx.fillText("Μπορείτε να πετάξετε την μπάλα δύο φορές", w, 310);
        ctx.fillText("Δείτε πόσους μπορείτε να γκρεμίσετε!", w, 360);
    }
    if (Tuk) {
        ctx.fillText("Oyun 10 kuka ile başlar", w, 260);
        ctx.fillText("Topu iki kez atabilirsin", w, 310);
        ctx.fillText("Bakalım kaç tanesini devirebileceksin!", w, 360);
    }



    if (introSp && speechOn) {
        if (En) {
            introSpAud.play();
            introSp = false;
        }
    }

    ctx.drawImage(insEnd, w/2-40, 400, 450, 200);
    ctx.font='900 60px Comic Sans MS';
    ctx.fillStyle = "black";
    
    
    if (En) {
        ctx.fillText("Let's Go!", w, 510);
        ctx.font='900 20px Comic Sans MS';
        ctx.fillText("Left Click or Press the Spacebar", w, 545);
    }
    if (Ger) {
        ctx.font='900 35px Arial';
        ctx.fillText("Lass uns gehen!", w, 505);
    }
    if (Rom) {
        ctx.font='900 35px Arial';
        ctx.fillText("Sa mergem!", w, 510);
    }
    if (Bul) {
        ctx.fillText("Да тръгваме!", w, 514);
    }
    if (Grk) {
        ctx.font='900 35px Arial';
        ctx.fillText("Πάμε!", w, 510);
    }
    if (Tuk) {
        ctx.font='900 35px Arial';
        ctx.fillText("Hadi gidelim!", w, 510);
    }

    

    insEnd.path = new Path2D();
    insEnd.path.rect(w/2-40, 465, 450, 200);

    addEventListener("keydown", InsEndKey);
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

/////////////////////////////
function SetBallKey() {
    // Keyboard controls
    if (keys[32]) {
        x = x+20;
        if (x >= 500) {
            x=-dx+150;
        }
        Rolling = true;
        removeEventListener("keydown", SetBallKey);
     }
}
/////////////////////////////////


function setBall() {
    ctx.drawImage(setBowl, w/2-65, 380, 495, 290);
    setBowl.path = new Path2D();
    setBowl.path.rect(w/2-10, 350, 600, 400);
    ctx.font='900 20px Comic Sans MS';   

    if (En) {
        ctx.fillText("Move the position of the bowling ball by", w+10, 460);
        ctx.fillText("Left Clicking or pressing the Spacebar", w+10, 490);
        ctx.fillText("on this label", w, 520);

        ctx.fillText("Then Right Clicking or", w+5, 562);
        ctx.fillText("pressing the Enter Key to", w+5, 587);
        ctx.fillText("to release the ball!", w+5, 612);
    }
    if (Ger) {
        ctx.fillText("Verschieben Sie die Position der", w+10, 470);
        ctx.fillText("Bowlingkugel durch Linksklick", w+10, 500);
        ctx.fillText("auf diesem Etikett", w, 530);

        ctx.fillText("Dann Rechtsklick auf", w+5, 575);
        ctx.fillText("um den Ball loszulassen!", w+5, 605);
    }
    if (Rom) {
        ctx.fillText("Mutați poziția", w+10, 470);
        ctx.fillText("minge de bowling prin clic stânga", w+10, 500);
        ctx.fillText("pe această etichetă", w, 530);

        ctx.fillText("Apoi faceți clic dreapta pentru", w+5, 575);
        ctx.fillText("sa eliberez mingea!", w+5, 605);
    }
    if (Bul) {
        ctx.font='900 21px Comic Sans MS';  
        ctx.fillText("Преместете позицията на", w+10, 470);
        ctx.fillText("топка за боулинг с ляв клик", w+10, 500);
        ctx.fillText("на този етикет", w, 530);

        ctx.fillText("След това щракнете с десния бутон за", w+5, 575);
        ctx.fillText("да пусне топката!", w+5, 605);
    }
    if (Grk) {
        ctx.font='900 24px Comic Sans MS';  
        ctx.fillText("Μετακινήστε τη θέση του", w+10, 470);
        ctx.fillText("μπάλα μπόουλινγκ με αριστερό κλικ", w+10, 500);
        ctx.fillText("σε αυτή την ετικέτα", w, 530);

        ctx.fillText("Στη συνέχεια, κάνετε δεξί κλικ στο", w+5, 575);
        ctx.fillText("να αφήσει την μπάλα!", w+5, 605);
    }
    if (Tuk) {
        ctx.fillText("konumunu hareket ettirin", w+10, 470);
        ctx.fillText("Sol Tıklama ile bowling topu", w+10, 500);
        ctx.fillText("bu etikette", w, 530);

        ctx.fillText("Ardından Sağ Tıklayarak", w+5, 575);
        ctx.fillText("topu serbest bırakmak için!", w+5, 605);
    }
    
    addEventListener("keydown", SetBallKey);
    canvas.addEventListener("click", SetBall);
}

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

            clickRightTrue = false;


            if (strikeTar) {
                pinLeft = true;
                pinRight = true;
            }

            canvas.removeEventListener("click", Round2);
         }
     }





     //////////////////////////////////////////////////////////////////
     function Round2Key() {
        if (keys[32]) {
            clickLeft = true;
            x = 150;
            y = 660;
            bowlRse = false;
            round2 = false;
            lastScreen = true;
            SetBalltrue = true;

            clickRightTrue = false;


            if (strikeTar) {
                pinLeft = true;
                pinRight = true;
            }

            removeEventListener("keydown", Round2Key);
     }
    }
     //////////////////////////////////////////////////////////////////////





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


     function EndKey() {
        if (keys[32]) {
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
            removeEventListener("keydown", EndKey);
        }
     } 

     

    function rounds() {

        if (round2) {
            ctx.drawImage(r2, w/2-40, 380, 440, 250);
            ctx.textAlign = "center"; 
            ctx.font='900 60px Comic Sans MS';

            if (strikeTar) {
                ctx.fillStyle = "blue";      

                if (En) {
                    ctx.fillText("Strike!", w+10, 484);    
                }
                if (Ger) {
                    ctx.fillText("Schlagen!", w+10, 484); 
                }
                if (Rom) {
                    ctx.fillText("lovitură!", w+10, 484); 
                }
                if (Bul) {
                    ctx.fillText("попадение!", w+10, 484); 
                }
                if (Grk) {
                    ctx.fillText("Απεργία!", w+10, 484); 
                }
                if (Tuk) {
                    ctx.fillText("Vuruş!", w+10, 484); 
                }

                ctx.fillStyle = "black";
                ctx.font='900 19px Comic Sans MS';

                

                if (En) {
                    ctx.fillText("You knocked down " + score + " skittles so far!", w, 518);
                    ctx.fillText("Let's throw the 2nd ball now", w+10, 548);
                    ctx.fillText("Left Click or Press the Spacebar!", w+10, 578);
                }
                if (Ger) {
                    ctx.fillText("Du hast zugeschlagen " + score + " Kegel bisher!", w, 518);
                    ctx.fillText("Lass uns jetzt den 2. Ball werfen!", w+10, 552);
                }
                if (Rom) {
                    ctx.fillText("Ai dat jos " + score + " skittles pana acum!", w, 518);
                    ctx.fillText("Să aruncăm a 2-a minge acum!", w+10, 552); 
                }
                if (Bul) {
                    ctx.fillText("Ти събори " + score + " кегли досега!", w, 518);
                    ctx.fillText("Хайде да хвърлим втората топка сега!", w+10, 552);
                }
                if (Grk) {
                    ctx.fillText("γκρέμισες " + score + " κορύνες μέχρι στιγμής!", w, 518);
                    ctx.fillText("Ας ρίξουμε τη 2η μπάλα τώρα!", w+10, 552);
                }
                if (Tuk) {
                    ctx.fillText("sen düşürdün " + score + " şimdiye kadar skeçler!", w, 518);
                    ctx.fillText("Şimdi 2. topu atalım!", w+10, 552);
                }
            }

            if (!strikeTar) {
                ctx.font='900 25px Comic Sans MS';
                
                if (En) {
                    ctx.fillText("You knocked down", w, 456);    
                }
                if (Ger) {
                    ctx.fillText("Du hast zugeschlagen", w, 456); 
                }
                if (Rom) {
                    ctx.fillText("Ai dat jos", w, 456); 
                }
                if (Bul) {
                    ctx.fillText("Ти събори", w, 456); 
                }
                if (Grk) {
                    ctx.fillText("γκρέμισες", w, 456); 
                }
                if (Tuk) {
                    ctx.fillText("sen düşürdün", w, 456); 
                }

                ctx.font='900 35px Comic Sans MS';
                ctx.fillStyle = "blue";
                ctx.fillText(score, w, 494);
                ctx.font='900 25px Comic Sans MS';
                ctx.fillStyle = "black";

                /////////////////////////////////////
                if (score3 && score >= 1 && score <= 3) {
                    if (speechOn) {               
                        if (En) {
                            score3Aud.play();
                        }
                        if (Ger) {
                            //score3Aud.play();
                        }
                        if (Rom) {
                            //score3Aud.play();
                        }
                        if (Bul) {
                            //score3Aud.play();
                        }
                        if (Grk) {
                            //score3Aud.play();
                        }
                        if (Tuk) {
                            //score3Aud.play();
                        }
                        score3 = false;
                    }
                }

                if (score7 && score >= 4 && score <= 7) {
                    if (speechOn) {         
                        if (En) {
                            score7Aud.play();
                        }
                        if (Ger) {
                            //score3Aud.play();
                        }
                        if (Rom) {
                            //score3Aud.play();
                        }
                        if (Bul) {
                            //score3Aud.play();
                        }
                        if (Grk) {
                            //score3Aud.play();
                        }
                        if (Tuk) {
                            //score3Aud.play();
                        }
                        score7 = false;
                    }
                }
    
                if (score10 && score >= 8 && score <= 10) {
                    if (speechOn) {
                        if (En) {
                            score10Aud.play();
                        }
                        if (Ger) {
                            //score3Aud.play();
                        }
                        if (Rom) {
                            //score3Aud.play();
                        }
                        if (Bul) {
                            //score3Aud.play();
                        }
                        if (Grk) {
                            //score3Aud.play();
                        }
                        if (Tuk) {
                            //score3Aud.play();
                        }
                        score10 = false;
                    }
                }
                /////////////////////////////////////
                
                if (En) {
                    ctx.fillText("skittles so far!", w, 520); 
                }
                if (Ger) {
                    ctx.fillText("Kegel bisher!", w, 520); 
                }
                if (Rom) {
                    ctx.fillText("skittles pana acum!", w, 520); 
                }
                if (Bul) {
                    ctx.fillText("кегли досега!", w, 520); 
                }
                if (Grk) {
                    ctx.fillText("κορύνες μέχρι στιγμής!", w, 520); 
                }
                if (Tuk) {
                    ctx.fillText("şimdiye kadar skeçler!", w, 520); 
                }

                ctx.font='900 19px Comic Sans MS';
                
                if (En) {
                    ctx.fillText("Let's throw the 2nd ball now!", w+4, 555);
                    ctx.fillText("Left Click or Press the Spacebar", w+4, 580);
                }
                if (Ger) {
                    ctx.fillText("Lass uns jetzt den 2. Ball werfen!", w+4, 556); 
                }
                if (Rom) {
                    ctx.fillText("Să aruncăm a 2-a minge acum!", w+4, 556); 
                }
                if (Bul) {
                    ctx.fillText("Хайде да хвърлим втората топка сега!", w+4, 556); 
                }
                if (Grk) {
                    ctx.fillText("Ας ρίξουμε τη 2η μπάλα τώρα!", w+4, 556); 
                }
                if (Tuk) {
                    ctx.fillText("Şimdi 2. topu atalım!", w+4, 556); 
                }
            }

            r2.path = new Path2D();
            r2.path.rect(w/2-40, 465, 450, 200);
            sec = false;
            canvas.addEventListener("click", Round2);
            addEventListener("keydown", Round2Key);
        }

        if (end) {

            


            ctx.drawImage(r3, w/2-40, 400, 450, 250);
            ctx.textAlign = "center"; 
            ctx.font='900 35px Comic Sans MS';

            if (En) {
                ctx.fillText("Game Over!", w+10, 475);
            }
            if (Ger) {
                ctx.fillText("Spiel ist aus!", w+10, 475);
            }
            if (Rom) {
                ctx.fillText("Joc încheiat!", w+10, 475);
            }
            if (Bul) {
                ctx.fillText("Играта приключи!", w+10, 475);
            }
            if (Grk) {
                ctx.fillText("Τέλος παιχνιδιού!", w+10, 475);
            }
            if (Tuk) {
                ctx.fillText("Oyun bitti!", w+10, 475);
            }
            

            if (score >= 0 && score <= 1) {
                if (En) {
                    ctx.font='900 25px Comic Sans MS';
                    ctx.fillText("Better luck next time!", w+10, 510);
                    ctx.fillText("Left Click or Press the Spacebar to Play Again", w+10, 545);
                }
                if (Ger) {
                    ctx.fillText("Viel Glück beim nächsten Mal!", w+10, 510);
                    ctx.fillText("Klicken Sie hier, um erneut zu spielen", w+10, 545);
                }
                if (Rom) {
                    ctx.fillText("Mai mult noroc data viitoare!", w+10, 510);
                    ctx.fillText("Faceți clic aici pentru a juca din nou", w+10, 545);
                }
                if (Bul) {
                    ctx.fillText("По-добър късмет следващия път!", w+10, 510);
                    ctx.fillText("Щракнете тук, за да играете отново", w+10, 545);
                }
                if (Grk) {
                    ctx.fillText("Καλύτερη τύχη την επόμενη φορά!", w+10, 510);
                    ctx.fillText("Κάντε κλικ εδώ για να παίξετε ξανά", w+10, 545);
                }
                if (Tuk) {
                    ctx.fillText("Bir dahaki sefere daha iyi şanslar!", w+10, 510);
                    ctx.fillText("Tekrar Oynamak İçin Buraya Tıklayın", w+10, 545);
                }
                
            }

            if (score > 2) {  
                
            ctx.font='900 16px Comic Sans MS';

            if (En) {
                ctx.font='900 20px Comic Sans MS';
                ctx.fillText("You knocked down " + score + " skittles", w+10, 511);
            }
            if (Ger) {
                ctx.fillText("Du hast zugeschlagen " + score + " Kegeln ", w+10, 511);
            }
            if (Rom) {
                ctx.fillText("Ai dat jos " + score + " chile ", w+10, 511);
            }
            if (Bul) {
                ctx.fillText("Ти събори " + score + " кегли ", w+10, 511);
            }
            if (Grk) {
                ctx.fillText("γκρέμισες " + score + " κορύνες ", w+10, 511);
            }
            if (Tuk) {
                ctx.fillText("sen düşürdün " + score + " kukalar ", w+10, 511);
            }
              
        
            if (score3 && score >= 1 && score <= 3) {
                if (speechOn) {             
                    if (En) {
                        score3Aud.play();
                    }
                    if (Ger) {
                        //score3Aud.play();
                    }
                    if (Rom) {
                        //score3Aud.play();
                    }
                    if (Bul) {
                        //score3Aud.play();
                    }
                    if (Grk) {
                        //score3Aud.play();
                    }
                    if (Tuk) {
                        //score3Aud.play();
                    }
                    score3 = false;
                }
            }

            if (score7 && score >= 4 && score <= 7) {
                if (speechOn) {         
                    if (En) {
                        score7Aud.play();
                    }
                    if (Ger) {
                        //score3Aud.play();
                    }
                    if (Rom) {
                        //score3Aud.play();
                    }
                    if (Bul) {
                        //score3Aud.play();
                    }
                    if (Grk) {
                        //score3Aud.play();
                    }
                    if (Tuk) {
                        //score3Aud.play();
                    }
                    score7 = false;
                }
            }

            if (score10 && score >= 8 && score <= 10) {
                if (speechOn) {
                    if (En) {
                        score10Aud.play();
                    }
                    if (Ger) {
                        //score3Aud.play();
                    }
                    if (Rom) {
                        //score3Aud.play();
                    }
                    if (Bul) {
                        //score3Aud.play();
                    }
                    if (Grk) {
                        //score3Aud.play();
                    }
                    if (Tuk) {
                        //score3Aud.play();
                    }
                    score10 = false;
                }
            }

            if (score13 && score >= 11 && score <= 13) {
                if (speechOn) {                
                    if (En) {
                        score13Aud.play();
                    }
                    if (Ger) {
                        //score3Aud.play();
                    }
                    if (Rom) {
                        //score3Aud.play();
                    }
                    if (Bul) {
                        //score3Aud.play();
                    }
                    if (Grk) {
                        //score3Aud.play();
                    }
                    if (Tuk) {
                        //score3Aud.play();
                    }
                    score13 = false;
                }
            }

            if (score17 && score >= 14 && score <= 17) {
                if (speechOn) {
                    if (En) {
                        score17Aud.play();
                    }
                    if (Ger) {
                        //score3Aud.play();
                    }
                    if (Rom) {
                        //score3Aud.play();
                    }
                    if (Bul) {
                        //score3Aud.play();
                    }
                    if (Grk) {
                        //score3Aud.play();
                    }
                    if (Tuk) {
                        //score3Aud.play();
                    }
                    score17 = false;
                }
            }

            if (wellDone) {
                if (speechOn) {
                    if (En) {
                        wellDoneAud.play();
                    }
                    if (Ger) {
                        wellDoneAudGer.play();
                    }
                    if (Rom) {
                        //score3Aud.play();
                    }
                    if (Bul) {
                        //score3Aud.play();
                    }
                    if (Grk) {
                        //score3Aud.play();
                    }
                    if (Tuk) {
                        //score3Aud.play();
                    }
                    wellDone = false;
                }
            }

            ctx.font='900 14px Comic Sans MS';

            if (En) {
                ctx.font='900 20px Comic Sans MS';
                ctx.fillText("Well Done! - Left Click", w+10, 545);
                ctx.fillText("Or Press the Spacebar", w+10, 570);
                ctx.fillText("To Play Again!", w+10, 595);
            }
            if (Ger) {
                ctx.fillText("Gut erledigt! - Klicken Sie hier, um erneut zu spielen", w+10, 545);
            }
            if (Rom) {
                ctx.fillText("Bine făcut! - Faceți clic aici pentru a juca din nou", w+10, 545);
            }
            if (Bul) {
                ctx.fillText("Много добре! - Щракнете тук, за да играете отново", w+10, 545);
            }
            if (Grk) {
                ctx.fillText("Μπράβο! - Κάντε κλικ εδώ για να παίξετε ξανά", w+10, 545);
            }
            if (Tuk) {
                ctx.fillText("Aferin! - Tekrar Oynamak İçin Buraya Tıklayın", w+10, 545);
            }
            
        }

            r3.path = new Path2D();
            r3.path.rect(w/2-40, 400, 700, 700);
            lastScreen = false;
       
            canvas.addEventListener("click", End);
            addEventListener("keydown", EndKey);

        }

    }



    function ScoreBoard() {

       ctx.textAlign = "center"; 
       ctx.font='600 55px Arial';
       ctx.fillStyle = "white";

    if (En) {
        ctx.fillText("Score: " + score, w, 70);
    }
    if (Ger) {
        ctx.font='600 52px Arial';
        ctx.fillText("Punktzahl: " + score, w, 70);
    }
    if (Rom) {
        ctx.fillText("Scor: " + score, w, 70);
    }
    if (Bul) {
        ctx.fillText("резултат: " + score, w, 70);
    }
    if (Grk) {
        ctx.fillText("Σκορ: " + score, w, 70);
    }
    if (Tuk) {
        ctx.fillText("Puan: " + score, w, 70);
    }

    ctx.fillStyle = "black";

    }

function rolling() {

/////////////////////////////////////////

// Keyboard controls
if (keys[13]) {     
    clickLeft = false;
    SetBalltrue = false;
    bowlRse = true;
 }

//////////////////////////////////////////////////

    window.addEventListener('contextmenu', (e) => {
        if (clickRightTrue) {
        
           clickLeft = false;
           SetBalltrue = false;
           bowlRse = true;
           e.preventDefault();
           
        }
        
    });



    if (bowlRse) {

        if (effectsOn) {
            ballAud.play();
        }

        y += dy;
    }


    if (pinLeft && pinRight && round1) {
        if (x >= 320 && x <= 335 && y <= 180) { 

            if (speechOn) {
                cheeringAud.play();
                
                if (En) {
                    stikeVceAud.play();
                }
                if (Ger) {
                    stikeVceAudGer.play();
                }
                if (Rom) {
                    stikeVceAudRom.play();
                }
                if (Bul) {
                    stikeVceAudBul.play();
                }
                if (Grk) {
                    stikeVceAudGrk.play();
                }
                if (Tuk) {
                    stikeVceAudTur.play();
                }

            }

            pinLeft = false;
            pinRight = false;
            strikeTar = true;

            if (effectsOn) {
                strikeAud.play();
            }

            score=score+10;
        }
    }

    if (pinLeft) {
    if (x >= 215 && x <= 300 && y < 180) {
            pinLeft = false;
            strikeTar = false;

            if (effectsOn) {
                strikeAud.play();
            }

            score=score+3;
        }
    }

    if (pinRight) {
    if (x >= 301 && x <= 430 && y < 180) {
            pinRight = false;
            strikeTar = false;

            if (effectsOn) {
                strikeAud.play();
            }

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
            clickRightTrue = true;
        }        
    }
}

function animate() {  
    
    playGame();

    if (musicOn) {
        music.play();
        music.volume = 0.2;
    }
    
    if (!musicOn) {
        music.pause();
        music.currentTime = 0;
    }

    requestAnimationFrame(animate);
    
}

requestAnimationFrame(animate);
