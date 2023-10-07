// creation d'un nouvel objet
const request = new XMLHttpRequest();
//initialisation de la requete
request.open(
    "GET",
    "https://jsonplaceholder.typicode.com/users"
);
//specification du type de retour
request.responseType = "json";
//envoi de la requete
request.send();

//Dès que la réponse est reçue...
request.onload = function(){
    //Si le statut HTTP n'est pas 200...
    if (request.status != 200){ 
        //...On affiche le statut et le message correspondant
        alert("Erreur " + request.status + " : " + request.statusText);
    //Si le statut HTTP est 200, on affiche le nombre d'octets téléchargés et la réponse
    }else{ 
        alert(request.response.length + " octets  téléchargés\n" + JSON.stringify(request.response));
    }
};

//Si la requête n'a pas pu aboutir...
request.onerror = function(){
    alert("La requête a échoué");
};

//Pendant le téléchargement...
request.onprogress = function(event){
    //lengthComputable = booléen; true si la requête a une length calculable
    if (event.lengthComputable){
        //loaded = contient le nombre d'octets téléchargés
        //total = contient le nombre total d'octets à télécharger
        alert(event.loaded + " octets reçus sur un total de " + event.total);
    }
};