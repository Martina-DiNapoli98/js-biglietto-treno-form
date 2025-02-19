/* Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */


let kmEl = document.getElementById("km")
let ageEl = document.getElementById("age")
let buttonEl = document.querySelector(".btn")


console.log(kmEl.value, ageEl.value);

buttonEl.addEventListener("click", function(e){
    console.log(kmEl.value, ageEl.value);
    
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
})






