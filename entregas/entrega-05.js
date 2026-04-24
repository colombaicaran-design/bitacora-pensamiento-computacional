let yPos = 0; 

function setup() {
  createCanvas(500, 600);
  textFont('Helvetica'); // Esta letra queda súper bien con el estilo
}

function draw() {
  background(240); // Un gris clarito para el fondo

  // --- EL TEXTO QUE SE MUEVE (yPos) ---
  fill(0);
  noStroke();
  textSize(80);
  textStyle(BOLD);
  text("SYNC", 20, yPos);
  text("SYNC", 20, yPos + 100);
  text("SYNC", 20, yPos + 200);
  
  yPos = yPos - 2; // Acá es donde le doy la velocidad para que suba
  if (yPos < -100) { 
    yPos = height; // Si se sale por arriba, lo mando de vuelta al fondo
  }

  // --- LA MIRA QUE SIGUE AL MOUSE ---
  noFill();
  stroke('#FF0044'); // El rojo vibrante para que resalte
  
  // Divido el mouseX por 10 para que el trazo no sea gigante
  let grosor = mouseX / 10; 
  strokeWeight(grosor);
  
  // Divido el mouseY por 2 para que la cruz crezca con sentido
  let tamano = mouseY / 2; 
  line(mouseX - tamano, mouseY, mouseX + tamano, mouseY);
  line(mouseX, mouseY - tamano, mouseX, mouseY + tamano);

  // --- EL BLOQUE NEGRO CON GLITCH (random) ---
  fill(0, 200); // Negro con un poco de transparencia
  noStroke();
  
  // Estos valores random hacen que todo vibre un poquito
  let movX = random(-5, 5);
  let movY = random(-5, 5);
  
  // Dibujo el rectángulo y le sumo el movimiento loco
  rect(100 + movX, 250 + movY, 300 + random(0, 10), 100);
  
  fill('#FF0044');
  textSize(20);
  text("SYSTEM ERROR", 110 + movX, 310 + movY);

  // --- EL GRID O REJILLA ---
  stroke(0, 20); // Gris clarito para las líneas
  strokeWeight(1);
  for(let i = 0; i < width; i += 50) {
    line(i, 0, i, height);
  }
}
