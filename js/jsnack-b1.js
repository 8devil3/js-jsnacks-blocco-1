/* Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

let number1 = parseInt(prompt('Type the first number'));
let number2 = parseInt(prompt('Type the second number'));

if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2);
} else {
    console.log('Equals');
}






