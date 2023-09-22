// creer des objets grace une fonction constructeur on commence les noms des fonctions constructeurs par une majuscule
function Utilisateur(a,b,c){
    this.nom = a,
    this.age = b ,
    this.mail = c,

    this.bonjour = function(){
        alert(`bonjour je suis ${this.nom} j'ai ${this.age} ans`);
    }

}

let pierre = new Utilisateur(['Pierre', 'Giraud'], 29, 'pierre.giraud@edhec.com');

//Code commenté pour éviter l'apparition intempestive de la boite d'alerte
pierre.bonjour();

/*On accède aux valeurs des propriétés de l'objet crée qu'on affiche dans
 *les paragraphes de notre fichier HTML*/
document.getElementById('p1').innerHTML = 'Nom complet : ' + pierre['nom'];
document.getElementById('p2').innerHTML = 'Prénom : ' + pierre['nom'][0];
document.getElementById('p3').innerHTML = 'Age : ' + pierre['age'];

/* Définir des propriétés et des méthodes dans le prototype d’un constructeur nous permet ainsi de les rendre 
accessible à tous les objets créés à partir de ce constructeur sans que ces objets aient à les redéfinir */
Utilisateur.prototype.taille = 171;
Utilisateur.prototype.bonjour = function(){
    alert(`bonjour je suis ${this.nom} j'ai ${this.age} ans`);
};
/* Pour avoir le code le plus clair et le plus performant possible, 
nous définirons donc généralement les propriétés des objets 
(dont les valeurs doivent être spécifiques à l’objet) 
au sein du constructeur et les méthodes (que tous les objets vont pouvoir appeler de la même façon) 
dans le prototype du constructeur. */



//comprendre la gestion des prototypes lien d'explication:https://www.pierre-giraud.com/javascript-apprendre-coder-cours/constructeur-object-prototype-heritage/

function Ligne(longueur){
    this.longueur = longueur;
}
Ligne.prototype.taille = function(){
    document.getElementById('p1').innerHTML = 'Longueur : ' + this.longueur};

function Rectangle(longueur, largeur){
    Ligne.call(this, longueur);
    this.largeur = largeur;
}
Rectangle.prototype = Object.create(Ligne.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.aire = function(){
    document.getElementById('p2').innerHTML =
    'Aire : ' + this.longueur * this.largeur};

function Parallelepipede(longueur, largeur, hauteur){
    Rectangle.call(this, longueur, largeur);
    this.hauteur = hauteur;
}
Parallelepipede.prototype = Object.create(Rectangle.prototype);
Parallelepipede.prototype.constructor = Parallelepipede;
Parallelepipede.prototype.volume = function(){
    document.getElementById('p3').innerHTML =
    'Volume : ' + this.longueur * this.largeur * this.hauteur};

let geo = new Parallelepipede(5, 4, 3);
geo.volume();
geo.aire();
geo.taille();


