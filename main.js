// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const card = document.getElementById("card-main")
const numbers = document.getElementById("row-none")
const submit = document.getElementById("button-submit")
const risultato = document.getElementById("risultato")
let punteggio = 0

let number1 = document.getElementById("firstNumber");
let number2 = document.getElementById("secondNumber");
let number3 = document.getElementById("thirdNumber");
let number4 = document.getElementById("fourthNumber");
let number5 = document.getElementById("fifthNumber");

let arrayInput = [number1, number2, number3, number4, number5]
let randomInput = []
let numeriIndovinati = []

for (let i = 0; i < 5; i++) {
    let numero = randomNumber()
    card.innerHTML += " " + `<span id="random${i}">${numero}</span>` + " "
    randomInput.push(parseInt(numero))
}

// Richiamo la funzion noneNumbers settandole un tempo
setTimeout(noneNumbers, 5000);

// Richiamo al click la funzione verifica numeri
submit.addEventListener("click", verificaNumeri)

console.log(randomInput);










// FUNZIONI UTILI

// Funzione per generare numeri casuali
function randomNumber() {
    const randomNumber = Math.floor((Math.random()) * 100)
    return randomNumber
}

// Funzione che mandi in display none il card-main
function noneNumbers() {
    card.style.display = "none"
    numbers.style.display = "flex"
}

// Funzione per verificare quanti numeri sono stati corretti in input
function verificaNumeri() {
    for (let i = 0; i < arrayInput.length; i++) {
        numero = parseInt(arrayInput[i].value)

        if (randomInput.includes(numero)) {
            punteggio += 1;
            numeriIndovinati.push(numero)
        }

        else{
            
        }
    }

    // Mostro nuovamente la row risultato
    risultato.style.display = "flex"

    // Stampo a schermo il risultato del punteggio
    risultato.classList.add("space")
    risultato.innerHTML += `<h5> Il tuo punteggio è ${punteggio}, e i numeri indovinati sono </h5> `

    // Inserisco a schermo anche i numeri
    const numeri = numeriIndovinati.forEach(numero => {
        risultato.innerHTML += `<h3 id="indovinato">${numero}, </h3> `
    });

 

}
