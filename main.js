/* Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */


let kmEl = document.getElementById("km")
let ageEl = document.getElementById("age")
let buttonEl = document.querySelector(".btn")
let nameEl = document.getElementById("name")
let surnameEl = document.getElementById("surname")



let cardNome = document.getElementById("nome")
let cardCognome = document.getElementById("cognome")
let cardCarrozza = document.querySelector(".carrozza")
let cardPosto = document.querySelector(".posto")
let cardPrezzo = document.querySelector(".prezzo")
let cardAge = document.querySelector(".età")



buttonEl.addEventListener("click", function(e){
    e.preventDefault()
    console.log(nameEl.value, surnameEl.value, kmEl.value, ageEl.value);
    
    let priceKm = 0.21;
    let totalPrice = kmEl.value * priceKm;
    console.log(totalPrice);
    let sconto 

    if (ageEl.value > 65) {
        sconto = totalPrice * 0.6 
        
        } else if (ageEl.value < 18) {
            sconto = totalPrice * 0.8
            
        } else {
            sconto = totalPrice
        }
        console.log(sconto);

        cardNome.innerHTML = nameEl.value
        cardCognome.innerHTML = surnameEl.value
        cardAge.innerHTML = ageEl.value
        cardCarrozza.innerHTML =  Math.floor(Math.random() * 9) +1;
        cardPosto.innerHTML = Math.floor(Math.random() * 9) +1;
        cardPrezzo.innerHTML = sconto
})


 
    
    



    


