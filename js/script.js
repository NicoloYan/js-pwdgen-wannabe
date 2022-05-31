// 1- RACCOLTA DATI E DEFIZIONE DELLE VARIABILI
// Chiedo il nome all'utente
const userFirstName = prompt('Dimmi il tuo nome');

// Chiedo il cognome all'utente
const userLastName = prompt('Dimmi il tuo cognome')

// Chiedo il colore preferito all'utente
const userFavColor = prompt('Dimmi il tuo colore preferito')


// 2- LOGICA DELLA MIA APPLICAZIONE
// Nome + Cognome + Colore + 21
const password = `${userFirstName}${userLastName}${userFavColor}21`


// 3- OUTPUT PER L'UTENTE
// Stampo in pagina
alert(password);