//La idea de este código es que se vea como una pantalla de error de un anime cyberpunk. 
// Usé blanco, negro y rojo porque se ve mucho más potente y menos "fome".

//1. El SYNC que sube: Usé yPos -= 2 para que el texto no parezca una foto, sino que 
//  esté subiendo siempre como si fueran créditos. Si se va muy arriba, vuelve a aparecer abajo.
//  2. La mira roja: Quería que se pudiera "jugar" con el mouse, así que hice que 
//  el mouseX cambie qué tan gorda es la línea y el mouseY qué tan grande es la cruz.
//  3. El glitch: Usé random() para que el bloque negro y el texto de error estén
//  todo el tiempo tiritando, como si la pantalla estuviera fallando de verdad.

let yPos = 0; 

function setup() {
  createCanvas(500, 600);
  textFont('Helvetica'); // Esta letra es la que mejor queda
}

function draw() {
  background(240); // Un fondo gris clarito para que no canse la vista

  // --- TEXTO QUE SUBE (yPos) ---
  fill(0);
  noStroke();
  textSize(80);
  textStyle(BOLD);
  text("SYNC", 20, yPos);
  text("SYNC", 20, yPos + 100);
  text("SYNC", 20, yPos + 200);
  
  yPos = yPos - 2; // Acá le doy la velocidad para que suba
  if (yPos < -100) { 
    yPos = height; // Si desaparece arriba, lo mando de nuevo al fondo
  }

  // --- LA MIRA QUE SIGUE AL MOUSE ---
  noFill();
  stroke('#FF0044'); // Rojo fuerte
  
  // El mouseX hace que el trazo se ponga más grueso o fino
  let grosor = map(mouseX, 0, width, 1, 50);
  strokeWeight(grosor);
  
  // El mouseY hace que la cruz crezca o se achique
  let tamano = map(mouseY, 0, height, 50, 300);
  line(mouseX - tamano, mouseY, mouseX + tamano, mouseY);
  line(mouseX, mouseY - tamano, mouseX, mouseY + tamano);

  // --- EL BLOQUE CON GLITCH (random) ---
  fill(0, 200); // Negro medio transparente
  noStroke();
  
  // El random hace que estos valores cambien cada milisegundo y vibren
  let movX = random(-5, 5);
  let movY = random(-5, 5);
  
  rect(100 + movX, 250 + movY, 300 + random(0, 10), 100);
  
  // Texto de error arriba del bloque
  fill('#FF0044');
  textSize(20);
  text("SYSTEM ERROR", 110 + movX, 310 + movY);

  // --- REJILLA DE FONDO ---
  stroke(0, 20); // Gris casi invisible
  strokeWeight(1);
  for(let i = 0; i < width; i += 50) {
    line(i, 0, i, height);
  }
}
