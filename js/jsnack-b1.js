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

// const msgHTML = document.querySelector('#msg');
// const input1 = document.querySelector('#word1');
// const input2 = document.querySelector('#word2');
// const btnCheck = document.querySelector('#check');

// btnCheck.addEventListener('click', checkWords);

// function checkWords() {
//     if (input1.value == '' || input2.value == '') {

//         msgHTML.innerHTML = 'Inserisci entrambe le parole';

//     } else {

//         if (input1.value.length > input2.value.length) {

//             msgHTML.innerHTML = input1.value + ' ' + input2.value;

//         } else if (input1.value.length < input2.value.length) {

//             msgHTML.innerHTML = input2.value + ' ' + input1.value;

//         } else {

//             msgHTML.innerHTML = 'Le parole hanno la stessa lunghezza pari a ' + input1.value.length + ' caratteri';
//         }
//     }
// }





/* Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
(provatelo anche senza array) */

// let number;
// let sum = 0;

// for (let x = 1; x <= 10; x++) {
//     number = parseInt(prompt('Inserisci un numero. Richiesta n. ' + x));
//     sum += number;
// }

// console.log(sum);





/* Snack 4
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa. */

// let urName = prompt("Type your name");
// const nameList = [
//     "Aldo",
//     "Mauro",
//     "Gabriel",
//     "Henri",
//     "Alessio",
//     "Paolo",
//     "Simone",
//     "Federico",
//     "Stefano",
//     "Laura",
//     "Camilla",
//     "Erika",
//     "Michela",
//     "Giuliana",
//     "Nicola",
//     "Riccardo",
//     "Giovanni",
// ];

// const msgTrue = "Welcome to The Great Gatsby Party!";
// const msgFalse = "Sorry, you weren't invited";
// const msgEmpty = "Please, enter your name";

// let checkName = false;

// if (urName == "") {
//     console.log(msgEmpty);
// } else {
//     for (let x = 0; x < nameList.length; x++) {
//         if (urName == nameList[x]) {
//             checkName = true;
//         }
//     }

//     if (checkName == false) {
//         console.log(msgFalse);
//     } else {
//         console.log(msgTrue);
//     }
// }





/* Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

// let number;
// const arr = [];

// for (let x = 1; x <= 6; x++) {
//     number = parseInt(prompt("Please, enter a number. Request n. " + x));
//     if (number % 2 != 0) {
//         arr.push(number);
//     }
// }

// console.log(arr);