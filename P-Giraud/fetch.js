const div = document.querySelector('div');
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())  // .then veut dire si la promesse est un succes alors l'objet response retourne, on le veut en format JSON
.then(response => div.textContent = JSON.stringify(response)) // On utilise JSON.stringify() pour transformer notre objet JSON en une chaine JSON et on affiche cette chaine.
.catch(error => alert('erreur :' + error)); // en cas d'erreur

let promise = fetch(url, {
    method: "GET", //ou POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "text/plain;charset=UTF-8" //pour un corps de type chaine
    },
}
    );