
let canvas = document.getElementById('c1'); //acceder a l'element canvas
let context = canvas.getContext('2d'); //acceder au contexte ici c'est un contexte 2d. il ya 2D et 3D
/*//dessiner un rectangle vide
context.strokeStyle = 'blue';  //toujours mettre le style avant de construire le rectangle avec la methode stokeRect()
context.strokeRect(50, 25, 200, 100)
// dessiner un rectangle plein
context.fillStyle = 'blue';
context.fillRect(50, 25, 200, 100);
//plusieurs rectangles dans un canvas
context.fillStyle = '#DDDD44'; //Nuance de jaune
context.fillRect(350, 25, 200, 100);

context.strokeStyle = 'purple'; //Violet
context.strokeRect(50, 175, 200, 100);

context.strokeRect(350, 175, 200, 100);

 //pour effacer des zones rectangulaires dans le triangle on utilise la methode clearRect() meme argument que les autres
context.clearRect(150, 75, 300, 150);
*/
/*les tracés

context.beginPath();
context.moveTo(50,25); //le point de depart. on commence a 50px a partir de la gauche et 25 a partir du top
context.lineTo(250,125) // le point final
context.lineTo(50,125);
context.lineWidth = 3; // l'epaisseur de la ligne en pixel
context.strokeStyle = 'blue'; pour un triangle vide
context.closePath()
context.stroke(); //pour dessiner la ligne en soi

context.beginPath();
context.moveTo(550,25);
context.lineTo(550,125);
context.lineTo(350,125);
context.fillStyle = 'red'; //pour un triangle plein
context.closePath();
context.fill();*/
/*
//les arcs de cercle

context.beginPath();
context.lineWidth = '5';
context.strokeStyle = 'yellow';
context.arc(50,50,35,0.8*Math.PI,2*Math.PI);
context.closePath();
context.stroke()

//cercle plein

context.beginPath();
context.lineWidth = '5';
context.fillStyle = 'purple';
context.arc(200,125,35,0,2*Math.PI);
context.closePath();
context.fill()

//

context.beginPath();
context.lineWidth = '3';
context.strokeStyle = 'blue';
context.arc(400,50,40,Math.PI,2*Math.PI);
context.closePath();
context.stroke()
*/
/*
// les degrades et les motifs
// degrades lineaire

const lineaire = context.createLinearGradient(25,25,100,25);
lineaire.addColorStop(0,'#4C8');
lineaire.addColorStop(0.5,'#48C');
lineaire.addColorStop(1,'#A4A');

context.fillStyle = lineaire;
context.fillRect(25,25,75,100);

const line = context.createLinearGradient(250,25,275,125);
line.addColorStop(0,'yellow');
line.addColorStop(1,'red');

context.moveTo(250,25);
context.lineTo(250,125)
context.lineTo(375,125);
context.fillStyle = line;
context.fill();

//degrade radial
let radial = context.createRadialGradient(160,100,10,150,75,50);
      
radial.addColorStop(0,'#DD4'); //Jaune
radial.addColorStop(1, '#D44'); //Rouge

context.beginPath();
context.fillStyle = radial;
context.arc(160,100,50,0,2*Math.PI);
context.fill();
*/
/*
//creation d'un motif

const img = new Image();
img.src = 'https://www.pierre-giraud.com/wp-content/uploads/2019/06/emoji-smile.png';
img.onload = function() {
    let pattern = context.createPattern(img, 'repeat');
    context.fillStyle = pattern;
    context.fillRect(0, 0, 600, 600);
};
// ajouter de la transparence

context.globalAlpha = 0.5;  //degre de transparence comprise entre 0 et 1
context.fillStyle = 'blue';
context.fillRect(75,100,200,150);

context.fillStyle = 'red';
context.fillRect(300,100,200,150);
*/
/*
//ajouter des ombres 
context.shadowColor = 'red';
context.shadowOffsetX = 5;
context.shadowOffsetY = 15;
context.shadowBlur = 10;

context.fillStyle = 'rgba(255, 0, 0)';
context.fillRect(75,100,200,150);

context.fillStyle = 'rgba(255, 0, 0, 0.5)'; //ici le 0.5n represente le degre de transparence
context.fillRect(300,100,200,150);
*/
/*
//ajouter des textes dans le canevas

context.font = 'bold 20px Verdana, Arial, serif';

context.strokeStyle = '#48B';
context.strokeText('Texte creux', 25, 50);

context.font = 'bold 20px Verdana, Arial, serif';
context.fillStyle = '#48B';
context.textAlign = 'center'; //Le milieu du texte sera à 150
context.fillText('Texte plein', 150, 100);

//la suite ici https://www.pierre-giraud.com/javascript-apprendre-coder-cours/canvas-texte-image/
*/
/*
//les translations
context.fillStyle = '#48A'; //Bleu
context.fillRect(25, 25, 75, 75);

//On déplace le point d'origine du canevas
context.translate(175, 25);


context.fillStyle = 'RGB(64,192,128)'; //Vert
context.fillRect(25, 25, 75, 75);
*/
/*
//la rotation
context.fillStyle = '#48A';
context.fillRect(0, 0, 300, 50);

//Première rotation de 20deg
context.rotate(Math.PI/9);
context.fillStyle = 'RGBa(64,192,128,0.6)'; //Vert
context.fillRect(0, 0, 300, 50);

//Deuxième rotation de 20deg. Les rotations se cumulent
context.rotate(Math.PI/9);
context.fillStyle = 'RGBa(192,64,192,0.6)'; //Rose
context.fillRect(0, 0, 300, 50);
*/
//des transformations dans le canevas
context.transform(1, 0, 1, 1, 100, 50);

context.fillStyle = '#48B'; //Bleu
context.fillRect(0, 0, 75, 50);

context.setTransform(1, 0, -1, 1, 100, 50);

context.fillStyle = '#4B8'; //Vert
context.fillRect(0, 0, 75, 50);