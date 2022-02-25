/* Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

// let number1 = parseInt(prompt('Type the first number'));
// let number2 = parseInt(prompt('Type the second number'));

// if (number1 > number2) {
//     console.log(number1);
// } else if (number1 < number2) {
//     console.log(number2);
// } else {
//     console.log('Equals');
// }





/* Snack 2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const msgHTML = document.querySelector('#msg');
const input1 = document.querySelector('#word1');
const input2 = document.querySelector('#word2');
const btnCheck = document.querySelector('#check');

btnCheck.addEventListener('click', checkWords);

function checkWords() {
    if (input1.value == '' || input2.value == '') {

        msgHTML.innerHTML = 'Inserisci entrambe le parole';

    } else {

        if (input1.value.length > input2.value.length) {

            msgHTML.innerHTML = input1.value + ' ' + input2.value;

        } else if (input1.value.length < input2.value.length) {

            msgHTML.innerHTML = input2.value + ' ' + input1.value;

        } else {

            msgHTML.innerHTML = 'Le parole hanno la stessa lunghezza pari a ' + input1.value.length + ' caratteri';
        }
    }
}





