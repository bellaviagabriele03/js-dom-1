
///////////////
// BONUS
////////////////

//scopo gioco: quando clicco il pulsante accendi cambio l'immagine della lampadina
// e cambio lo stile del pulsante (testo al suo interno e il colore di sfondo)
//dati da raccogliere: pulsante accendi, immagine (che ho già preso su^)
//      per fare in modo che premendo lo stesso pulsante si verifichino le condizioni sopra citate
//      dichiaro una variabile e le assegno il valore di vero come predefinito 
//      e cambiando il valore di questa variabile si verificheranno i vari cambiamenti 

const button = document.querySelector("#button");
const img = document.querySelector("#img");
const total = document.querySelector("#total");

//ICONE BOOTSTRAP 
const icon = document.querySelector("#icon");
const text = document.querySelector("#text");

let clicks = 0;
let isOFF = true;

button.addEventListener("click", function () {
    clicks++;
    total.innerText = clicks;
    if (clicks >= 5) {
        alert("Basta stai consumando troppa luce!!!!");

    }

    if (isOFF === true) {
        img.src = "./img/yellow_lamp.png"
        text.innerText = "SPEGNI";
        icon.classList.remove("bi-lightbulb-fill");
        icon.classList.add("bi-lightbulb");
    } else {
        img.src = "./img/white_lamp.png"
        text.innerText = "Accendi";
        icon.classList.add("bi-lightbulb-fill");
        icon.classList.remove("bi-lightbulb");
    }
    isOFF = !isOFF;

})


