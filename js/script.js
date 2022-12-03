console.log('JS OK');

/*
1-Prendo l'elemento dal DOM
2-Chiedere all'utente il suo nome
3-Chiedi il suo cognome
4-Chiedi il suo colore preferito
5-Scrivi sulla pagina nomecognomecolorepreferito21
*/

// Prendo l'elemento dal DOM 
const greetingElement = document.getElementById('greetings');
console.log(greetingElement);

// Chiedo all'utente il suo nome
const firstName = prompt('Il tuo nome?' , 'Albe');
console.log(firstName);

// Chiedo all'utente il suo cognome
const lastName = prompt('Il tuo cognome?' , 'Brown');
console.log(lastName);

// Chiedo il colore preferito
const color = prompt('il tuo colore preferito?' , 'blue');
console.log(color);


// Scrivo sulla pagina il nomecognomecolorepreferito21
greetingElement.innerText = greetingElement.innerText + ' ' + firstName + lastName + color;





