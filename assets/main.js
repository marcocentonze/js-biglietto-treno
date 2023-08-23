/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca nella documentazione di JS. */

/* Strumenti:
-prompt x2
-number
-variabili
-conditionals
-consolelog
*/

//chiedere all'utente il numero dei chilometri da percorrere
const numeroKm = Number(prompt('Quanti chilometri vuoi percorrere?'));
console.log(numeroKm);

//chiedere all'utente l'età del passeggero
const etaPasseggero = Number(prompt('Quanti anni ha il passeggero?'));
console.log(etaPasseggero);

// calcola il prezzo del biglietto in base ai chilometri (0.21 € al km)
const prezzoAlKm = 0.21; //to do: controllare se si può scrivere così

const prezzoBiglietto = numeroKm * prezzoAlKm;

console.log(prezzoBiglietto + '€');

//applica gli sconti in base all'età
let prezzoScontatoMinorenni = prezzoBiglietto * 0.2;
let prezzoScontatoAnziani = prezzoBiglietto * 0.4;



if (etaPasseggero < 18) {

    let prezzoFinaleMinorenni = prezzoBiglietto - prezzoScontatoMinorenni;

    console.log('Il tuo prezzo scontato è di ' + prezzoFinaleMinorenni + '€');

} else if (etaPasseggero >65) {
  
    let prezzoFinaleAnziani = prezzoBiglietto - prezzoScontatoAnziani;

    console.log('Il tuo prezzo scontato è di ' + prezzoFinaleAnziani + '€');

} else {
    console.log('Il tuo prezzo è di ' + prezzoBiglietto);
}






//stampa dell'output