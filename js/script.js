//scopo gioco: 
//quando clicco sul pulsante ON mostro l'immagine della lampadina accesa
//quando clicco sul pulsante OFF mostro l'immagine della lampadina spenta

//dati da raccogliere :
//immagine, pulsante ON, pulsante OFF

const btnON = document.getElementById("button-on")
const btnOFF = document.getElementById("button-off")
let imgElem = document.querySelector("img");

btnON.addEventListener("click", function() {
    imgElem.src = "./img/yellow_lamp.png"
})

btnOFF.addEventListener("click", function () {
    imgElem.src = "./img/white_lamp.png"
})