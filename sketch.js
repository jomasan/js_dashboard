let x, y;
let speedX, speedY;

function setup() {
  // Create canvas and place it in the container
  const canvas = createCanvas(800, 400);
  canvas.parent('canvas-container');
  
  // Initialize position and speed
  x = width / 2;
  y = height / 2;
  speedX = 3;
  speedY = 2;
}

function draw() {
  // Clear background with a light gray
  background(240);
  
  // Draw a circle
  fill(50, 100, 200);
  noStroke();
  circle(x, y, 50);
  
  // Update position
  x += speedX;
  y += speedY;
  
  // Bounce off edges
  if (x > width - 25 || x < 25) {
    speedX *= -1;
  }
  if (y > height - 25 || y < 25) {
    speedY *= -1;
  }
} 