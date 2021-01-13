let Header = document.getElementById("header");

let h1Main = document.createElement("h1");
let h2Main = document.createElement("h2");

let Starrt = document.getElementById("startBtn");

let ResponsE = document.getElementById("response");

let RibbonText = document.getElementById("ribbon");

let IMG = document.getElementById("img");

let ribbonNum = 0;

h1Main.textContent = "Number Guessing Game";
h2Main.textContent = "Are You Smarter Than A Computer?";

h1Main.className = "h1Main";
h2Main.className = "h2Main";

Starrt.textContent = "Start Game!";

Header.appendChild(h1Main);
Header.appendChild(h2Main);

function generateRandom(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num);
}

let test = generateRandom(1, 15);


function start() {

    ribbonNum++;

    // Starrt.style.visibility = "hidden";

    let userInput = prompt("Guess a number between 1 and 15:");

    if(userInput > 15) {
        alert("Please use a number between 1 and 15!");
    }

    console.log(ribbonNum);

    if(userInput < test) {
        ResponsE.textContent = "Your guess was too low.";
        ResponsE.style.color = "red"
        Starrt.textContent = "Retry";
    }

    if(userInput > test) {
        ResponsE.textContent = "Your guess was too high.";
        ResponsE.style.color = "red"
        Starrt.textContent = "Retry";
    }

    if(userInput == test) {
        ResponsE.textContent = "You are correct! The Answer was: " + test;
        ResponsE.style.color = "lightgreen";
        Starrt.textContent = "YAY!";

        const Ribbon = ribbonNum;
        switch(Ribbon) {
            case 1 :
            case 2 :
            case 3 :
                RibbonText.textContent = "It took you " + ribbonNum + " tries to get it correct!";
                IMG.setAttribute("src", "/media/images/blue.png");
            break;
            case 4 :
            case 5 :
            case 6 :
                RibbonText.textContent = "It took you " + ribbonNum + " tries to get it correct!";
                IMG.setAttribute("src", "/media/images/red.png");
            break;
            default:
                RibbonText.textContent = "It took you " + ribbonNum + " tries to get it correct!";
                IMG.setAttribute("src", "/media/images/yellow.png");
        }
    }

}