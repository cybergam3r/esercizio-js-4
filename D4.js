/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1 , l2){

    return l1*l2;
}
console.log(area(4, 6));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1 , num2){
    if(num1 === num2){
        return((num1+num2)*3);
    }
    else{
        return(num1+num2);
    }
}
console.log(crazySum(5 , 5))
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazydiff(num1){
    if(num1 > 19){
        return((num1-19)*3)
    }
    else{
        return(19-num1)
    }
}
console.log(crazydiff(25))
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(num1){
    if(num1 > 20 && num1 < 100 || num1 === 400){
        return true
    }
    else{
        return false
    }
}
console.log(boundary(25))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(string) {
    if(string.indexOf('EPICODE') === 0) {
        return string;
    } else {
        return 'EPICODE ' + string;
    }
}

console.log(epify('cosi lo iniza'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(stringa) {
    return stringa.split('').reverse().join('');
}
console.log(reverseString('ciao'));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(string) {
    let parola = string.split(' ');
    console.log(parola);
    let finale = [];
    for (let i = 0; i < parola.length; i++) {
        let prima = parola[i].charAt(0);
        prima = prima.toUpperCase();
        let resto = parola[i].substring(1);
        let nuova_parola = prima + resto;
        finale.push(nuova_parola);
    }
    console.log(finale.join(' '));
}

upperFirst('una prova alcquanto intressante ma allo stesso tempo sifiziosa');
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(stringa) {
    if (stringa.length > 1) {
      return stringa.slice(1, stringa.length - 1);
    } else {
      return "";
    }
  }
  console.log(cutString('ciao'))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
