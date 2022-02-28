/* Snack 1.1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const input1SN1 = document.querySelector("#sn1-input1");
const input2SN1 = document.querySelector("#sn1-input2");

const btnSubmitSN1 = document.querySelector("#sn1-btn");
const msgHTMLSN1 = document.querySelector("#sn1-msg");

btnSubmitSN1.addEventListener("click", checkSN1);

function checkSN1() {

    // reset classi
    msgHTMLSN1.classList.remove("false");

    if (input1SN1.value == "" || input2SN1.value == "") { // controllo se i campi sono vuoti
        msgHTMLSN1.innerHTML = "Please, type all requested numbers";
        msgHTMLSN1.classList.add("false");
    } else {
        if (input1SN1.value > input2SN1.value) {
            msgHTMLSN1.innerHTML = input1SN1.value;
        } else if (input1SN1.value < input2SN1.value) {
            msgHTMLSN1.innerHTML = input2SN1.value;
        } else {
            msgHTMLSN1.innerHTML = "Equal numbers";
        }
    }
}





/* Snack 1.2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const input1SN2 = document.querySelector("#sn2-input1");
const input2SN2 = document.querySelector("#sn2-input2");

const btnSubmitSN2 = document.querySelector("#sn2-btn");
const msgHTMLSN2 = document.querySelector("#sn2-msg");

btnSubmitSN2.addEventListener("click", checkSN2);

function checkSN2() {

    // reset classi
    msgHTMLSN2.classList.remove("false");

    if (input1SN2.value == "" || input2SN2.value == "") { // controllo se i campi sono vuoti
        msgHTMLSN2.innerHTML = "Please ,type all requested words";
        msgHTMLSN2.classList.add("false");
    } else {
        if (input1SN2.value.length > input2SN2.value.length) {
            msgHTMLSN2.innerHTML = input1SN2.value + " " + input2SN2.value;
        } else if (input1SN2.value.length < input2SN2.value.length) {
            msgHTMLSN2.innerHTML = input2SN2.value + " " + input1SN2.value;
        } else {
            msgHTMLSN2.innerHTML =
                "Words are equal in length.<br>Length is of " +
                input1SN2.value.length +
                " chars.";
        }
    }
}





/* Snack 1.3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
(provatelo anche senza array) */

const input1SN3 = document.querySelector("#sn3-input1");
const input2SN3 = document.querySelector("#sn3-input2");
const input3SN3 = document.querySelector("#sn3-input3");
const input4SN3 = document.querySelector("#sn3-input4");
const input5SN3 = document.querySelector("#sn3-input5");
const input6SN3 = document.querySelector("#sn3-input6");
const input7SN3 = document.querySelector("#sn3-input7");
const input8SN3 = document.querySelector("#sn3-input8");
const input9SN3 = document.querySelector("#sn3-input9");
const input10SN3 = document.querySelector("#sn3-input10");

const btnSubmitSN3 = document.querySelector("#sn3-btn");
const msgHTMLSN3 = document.querySelector("#sn3-msg");

btnSubmitSN3.addEventListener("click", checkSN3);

function checkSN3() {
    let sumSN3 = 0;
    let checkNumSN3 = true;

    // reset classi
    msgHTMLSN3.classList.remove("false");

    const arrSN3 = [
        input1SN3.value,
        input2SN3.value,
        input3SN3.value,
        input4SN3.value,
        input5SN3.value,
        input6SN3.value,
        input7SN3.value,
        input8SN3.value,
        input9SN3.value,
        input10SN3.value
    ];

    for (let c = 0; c < arrSN3.length; c++) { // controllo se il campo è vuoto
        if (arrSN3[c] == "") {
            checkNumSN3 = false;
            break; // interrompo per evitare le iterazioni inutili
        }
    }

    if (!checkNumSN3) { 
        msgHTMLSN3.innerHTML = "Please, fill all fields!";
        msgHTMLSN3.classList.add("false");
    } else {
        for (let x = 0; x < arrSN3.length; x++) { // iterazione tra i campi
            sumSN3 += parseInt(arrSN3[x]);
        }
        msgHTMLSN3.innerHTML = sumSN3;
    }
}





/* Snack 1.4
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa. */

const nameListSN4 = [
    "Aldo",
    "Mauro",
    "Gabriel",
    "Henri",
    "Alessio",
    "Paolo",
    "Simone",
    "Federico",
    "Stefano",
    "Laura",
    "Camilla",
    "Erika",
    "Michela",
    "Giuliana",
    "Nicola",
    "Riccardo",
    "Giovanni"
];

const input1SN4 = document.querySelector("#sn4-input1");

const btnSubmitSN4 = document.querySelector("#sn4-btn");
const msgHTMLSN4 = document.querySelector("#sn4-msg");

const msgTrueSN4 = "Welcome to The Great Gatsby Party!";
const msgFalseSN4 = "Sorry, you weren't invited";
const msgEmptySN4 = "Please, enter your name";

btnSubmitSN4.addEventListener("click", checkSN4);

function checkSN4() {
    let checkNameSN4 = false;

    // reset classi
    msgHTMLSN4.classList.remove("true", "false");

    if (input1SN4.value == "") { // controllo se il campo è vuoto
        msgHTMLSN4.innerHTML = msgEmptySN4;
        msgHTMLSN4.classList.add("false");
    } else {
        for (let x = 0; x < nameListSN4.length; x++) { // iterazione tra i nomi
            if (input1SN4.value.toLowerCase() == nameListSN4[x].toLowerCase()) {
                checkNameSN4 = true;
                break; // interrompo per evitare le iterazioni inutili
            }
        }

        if (!checkNameSN4) { // messaggi all'utente
            msgHTMLSN4.innerHTML = msgFalseSN4;
            msgHTMLSN4.classList.add("false");
        } else {
            msgHTMLSN4.innerHTML = msgTrueSN4;
            msgHTMLSN4.classList.add("true");
        }
    }
}





/* Snack 1.5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const input1SN5 = document.querySelector("#sn5-input1");
const input2SN5 = document.querySelector("#sn5-input2");
const input3SN5 = document.querySelector("#sn5-input3");
const input4SN5 = document.querySelector("#sn5-input4");
const input5SN5 = document.querySelector("#sn5-input5");
const input6SN5 = document.querySelector("#sn5-input6");

const btnSubmitSN5 = document.querySelector("#sn5-btn");
const msgHTMLSN5 = document.querySelector("#sn5-msg");

btnSubmitSN5.addEventListener("click", checkSN5);

function checkSN5() {
    let checkNumSN5 = true;
    let sumSN5 = 0;

    // reset classi
    msgHTMLSN5.classList.remove("false");

    const arrSN5 = [
        input1SN5.value,
        input2SN5.value,
        input3SN5.value,
        input4SN5.value,
        input5SN5.value,
        input6SN5.value
    ];

    const oddArr = [];

    for (let i = 0; i < arrSN5.length; i++) { // controllo se i campi sono vuoti
        if (arrSN5[i] == "") {
            checkNumSN5 = false;
            break; // interrompo per evitare le iterazioni inutili
        }
    }

    if (!checkNumSN5) {
        msgHTMLSN5.innerHTML = "Please, fill all fields!";
        msgHTMLSN5.classList.add("false");
    } else {
        for (let x = 0; x < arrSN5.length; x++) {
            if (parseInt(arrSN5[x]) % 2 != 0) {
                oddArr.push(parseInt(arrSN5[x]));
            }
            sumSN5 += parseInt(arrSN5[x]); // sommo i numeri dell'array tra loro per poi verificare se sono tutti pari
        }

        if (sumSN5 % 2 != 0) { // controllo se tutti i numeri sono pari e stampo i messaggi
            msgHTMLSN5.innerHTML = oddArr;
        } else {
            msgHTMLSN5.innerHTML = "All numbers are even";
        }
    }
}





/* Snack 1.6
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */

const input1SN6 = document.querySelector("#sn6-input1");

const btnSubmitSN6 = document.querySelector("#sn6-btn");
const msgHTMLSN6 = document.querySelector("#sn6-msg");

btnSubmitSN6.addEventListener("click", checkSN6);

function checkSN6() {
    let sumSN6 = 0;

    // reset classi
    msgHTMLSN6.classList.remove("false");

    if (input1SN6.value == "") { // controllo il campo se è vuoto
        msgHTMLSN6.innerHTML = "Please, type a number";
        msgHTMLSN6.classList.add("false");
    } else if (input1SN6.value.length != 4) {
        msgHTMLSN6.innerHTML = "Please, type a four digits number";
        msgHTMLSN6.classList.add("false");
    } else {
        for (let i = 0; i < input1SN6.value.length; i++) {
            sumSN6 += parseInt(input1SN6.value[i]);
        }
        msgHTMLSN6.innerHTML = sumSN6;
    }
}





/* Snack 1.9
Calcola la somma e la media dei primi 10 numeri. */

const msgHTMLSN19 = document.querySelector("#sn19-msg");

let sumWhileSN19 = 0;
let sumDoWhileSN19 = 0;
let iSN19 = 0;
let xSN19 = 0;
const numbersSN19 = 10;

while (iSN19 <= numbersSN19) {
    sumWhileSN19 += iSN19;
    iSN19++;
}

do {
    sumDoWhileSN19 += xSN19;
    xSN19++;
} while (xSN19 <= numbersSN19);

msgHTMLSN19.innerHTML = 'Sum WHILE: ' + sumWhileSN19 + '<br>Average WHILE: ' + sumWhileSN19/numbersSN19 + '<br>Sum DO-WHILE: ' + sumDoWhileSN19 + '<br>Average DO-WHILE: ' + sumDoWhileSN19/numbersSN19;






/* Snack 2.1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */

const input1SN21 = document.querySelector("#sn21-input1");
const input2SN21 = document.querySelector("#sn21-input2");
const input3SN21 = document.querySelector("#sn21-input3");
const input4SN21 = document.querySelector("#sn21-input4");
const input5SN21 = document.querySelector("#sn21-input5");

const btnSubmitSN21 = document.querySelector("#sn21-btn");
const msgHTMLSN21 = document.querySelector("#sn21-msg");

btnSubmitSN21.addEventListener("click", checkSN21);

function checkSN21() {
    let checkNumSN21 = true;
    let sumForSN21 = 0;
    let sumWhileSN21 = 0;

    // reset classi
    msgHTMLSN21.classList.remove("false");

    const arrSN21 = [
        input1SN21.value,
        input2SN21.value,
        input3SN21.value,
        input4SN21.value,
        input5SN21.value
    ];

    for (let i = 0; i < arrSN21.length; i++) { // controllo se i campi sono vuoti
        if (arrSN21[i] == "") {
            checkNumSN21 = false;
            break; // interrompo per evitare le iterazioni inutili
        }
    }

    if (!checkNumSN21) {
        msgHTMLSN21.innerHTML = "Please, fill all fields!";
        msgHTMLSN21.classList.add("false");
    } else {
        for (let x = 0; x < arrSN21.length; x++) {
            sumForSN21 += parseInt(arrSN21[x]); // sommo i numeri
        }

        let iSN21 = 0;
        while (iSN21 < arrSN21.length) {
            sumWhileSN21 += parseInt(arrSN21[iSN21]);
            iSN21++;
        }

        msgHTMLSN21.innerHTML = 'Sum FOR: ' + sumForSN21 + '<br>Sum WHILE: ' + sumWhileSN21;
        
    }
}






/* Snack 2.2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo */

const inputSN22 = document.querySelector("#sn22-input1");

const btnSubmitSN22 = document.querySelector("#sn22-btn");
const msgHTMLSN22 = document.querySelector("#sn22-msg");

btnSubmitSN22.addEventListener("click", checkSN22);

function checkSN22() {

    // reset classi
    msgHTMLSN22.classList.remove("false");

    if (inputSN22.value == "") { // controllo il campo se è vuoto
        msgHTMLSN22.innerHTML = "Please, type a number";
        msgHTMLSN22.classList.add("false");
    } else {
        if (parseInt(inputSN22.value) % 2 != 0) {
            msgHTMLSN22.innerHTML = parseInt(inputSN22.value) + 1;
        } else {
            msgHTMLSN22.innerHTML = inputSN22.value;
        }
    }
}






/* Snack 2.3
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi
e una lista di cognomi, Gatsby vuole generare 
una falsa lista di 3 invitati. */

const arrNamesSN23 = ['Gianni', 'Francesco', 'Paolo', 'Camilla', 'Laura', 'Elena', 'Alessandra', 'Giorgio', 'Mauro', 'Antonella'];
const arrSurnamesSN23 = ['Rossi', 'Bianchi', 'Conte', 'Lorenzi', 'Marini', 'Castelli', 'Simoni', 'Bellini', 'Ferri'];

let rndmNameSN23;
let rndmSurnameSN23;

const msgHTMLSN23 = document.querySelector("#sn23-msg");
const btnSubmitSN23 = document.querySelector("#sn23-btn");


btnSubmitSN23.addEventListener('click', checkSN23);

function checkSN23() {

    const arrFullSN23 = [];

    for (let x = 0; x < 3; x++) {
        rndmNameSN23 = Math.floor(Math.random() * arrNamesSN23.length); // nome casuale
        rndmSurnameSN23 = Math.floor(Math.random() * arrSurnamesSN23.length); // cognome casuale
        arrFullSN23.push(arrNamesSN23[rndmNameSN23] + ' ' + arrSurnamesSN23[rndmSurnameSN23]); // compongo nome + cognome
    }

    let [p1, p2, p3] = [...arrFullSN23]; // destrutturo la lista

    msgHTMLSN23.innerHTML = p1 + '<br>' + p2 + '<br>' + p3; // stampo la lista
}







// reset inputs e ricarica della pagina
const btnReload = document.querySelector("#reload");
const arrInputs = document.querySelectorAll('input');

btnReload.addEventListener('click', function(){
    for (x = 0; x < arrInputs.length ; x++) { // reset dei campi
        arrInputs[x].value ='';
    }
    location.reload(); // ricarico la pagina
})