function setup() {
  createCanvas(800,800);
}
function draw() {
  if (mouseIsPressed)
  fill(0);

  fill(255,0,0);
  ellipse(mouseX,mouseY,80,80);
}
