console.log('JS OK');

/*
1-Prendo l'elemento dal DOM
2-Chiedere all'utente il suo nome
3-Chiedi il suo cognome
4-Chiedi il suo colore preferito
5-Scrivi sulla pagina nomecognomecolorepreferito21
*/

// Prendo l'elemento dal DOM 
const targetElement = document.getElementById('target');

// Chiedo all'utente il suo nome
const firstName = prompt('Il tuo nome?' , 'Albe');
console.log(firstName);

// Chiedo all'utente il suo cognome
const lastName = prompt('Il tuo cognome?' , 'Brown');
console.log(lastName);

// Chiedo il colore preferito
const color = prompt('il tuo colore preferito?' , 'blue');
console.log(color);


// Scrivo la password
const password = firstName + lastName + color + '21';
console.log(password);

// Build content 
const message = "La password è:" + password;

// Inserisco nella pagina 
targetElement.innerHTML = message;






