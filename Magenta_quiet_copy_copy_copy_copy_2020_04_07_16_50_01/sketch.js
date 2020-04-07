var Bubbles = [];

function setup() {
  createCanvas(600, 400);
  Bubble1=new bubble();
  Bubble2=new bubble();
  Bubble3=new bubble();
  Bubble4=new bubble();
  Bubble5=new bubble();
}

function draw() {
  background(133);
  Bubble1.move();
  Bubble2.move();
  Bubble3.move();
  Bubble4.move();
  Bubble5.move();
  
  Bubble1.display();
  Bubble2.display();
 Bubble3.display();
  Bubble4.display();
  Bubble5.display();
}