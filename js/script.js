//scopo gioco: 
//quando clicco sul pulsante ON mostro l'immagine della lampadina accesa
//quando clicco sul pulsante OFF mostro l'immagine della lampadina spenta

//dati da raccogliere :
//immagine, pulsante ON, pulsante OFF

const btnON = document.querySelector("#button-on")
const btnOFF = document.querySelector("#button-off")
let imgElem = document.querySelector("img");

btnON.addEventListener("click", function () {
    imgElem.src = "./img/yellow_lamp.png"
})

btnOFF.addEventListener("click", function () {
    imgElem.src = "./img/white_lamp.png"
})


///////////////
// BONUS
////////////////

//scopo gioco: quando clicco il pulsante accendi cambio l'immagine della lampadina
// e cambio lo stile del pulsante (testo al suo interno e il colore di sfondo)
//dati da raccogliere: pulsante accendi, immagine (che ho già preso su^)
//      per fare in modo che premendo lo stesso pulsante si verifichino le condizioni sopra citate
//      dichiaro una variabile e le assegno il valore di vero come predefinito 
//      e cambiando il valore di questa variabile si verificheranno i vari cambiamenti 

const btnOR = document.getElementById("button-or")
const imgOR = document.getElementById("img-or")

//ICONE BOOTSTRAP 
const iconON = document.getElementById("icon-on")
const iconOFF = document.getElementById("icon-off");
const textElem = document.querySelector("text-btn");


let isOFF = true;

btnOR.addEventListener("click", function () {
    if (isOFF === true) {
        imgOR.src = "./img/yellow_lamp.png"
        btnOR.innerText = "SPEGNI";
        btnOR.classList.remove("btn-success");
        btnOR.classList.add("btn-secondary")
    } else {
        imgOR.src = "./img/white_lamp.png"
        btnOR.innerText = "Accendi";
        btnOR.classList.add("btn-success");
    }
    isOFF = !isOFF;

})


