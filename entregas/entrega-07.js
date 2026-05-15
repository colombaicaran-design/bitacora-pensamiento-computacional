let don;
let nuevaImg; 

let posX = 200;
let posY = 200;


let dirX = 1;
let dirY = 1;
let velX = 2; 
let velY = 2;


let r = 220, g = 220, b = 220;

function setup() {
  createCanvas(400, 400);

  nuevaImg = loadImage("./44482b0788436b607f176b6ac2c128f3.jpg"); 
}

function draw() {

  
  background(r, g, b); 
  
 
  image(nuevaImg, posX, posY, 80, 80);
  

  posX = posX + velX * dirX;
  posY = posY + velY * dirY;
  
  if (posX > width - 80 || posX < 0) {
    dirX *= -1;
    cambiarEfectos();
  }
  

  if (posY > height - 80 || posY < 0) {
    dirY *= -1; 
    cambiarEfectos();
  }
}


function cambiarEfectos() {

  velX = random(1, 5);
  velY = random(1, 5);
  
  r = random(255);
  g = random(255);
  b = random(255);
}
