/*Ciao ragazzi,


ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
6. Il tuo codice ti sembra troppo complicato? probabilmente ti stai complicando la vita!*/

console.log('JS OK');

// 1: Recuperare elementi dalla pagina    
// 2: Dichiarare una variabile dado 1 e dado 2
// 3: generare numero random x2, da 1-6
// 4: stamapre in pagina

const numbersLeft = document.getElementById('numbers-left')
const numbersRight = document.getElementById('numbers-right')

const btnRight = document.getElementById('btn-right')
const btnLeft = document.getElementById('btn-left')

// left
let valueLeft = [];

btnLeft.addEventListener('click', function (){
    //genero numero casuale
    const randomNumber = Math.floor(Math.random () * 6) +1;
    valueLeft.push(randomNumber);
    console.log(valueLeft)
    
    numbersLeft.append('Il numero è: ');

    
})

numbersLeft.innerText += valueLeft;
//numbersLeft.appendChild(valueLeft);


// right
//let valueRight = '';

//numbersRight.innerText += numbers;








