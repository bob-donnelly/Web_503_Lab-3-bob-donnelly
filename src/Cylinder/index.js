function setup() {
    //Sets up 3D modelling via WEBGL on a canvas
    createCanvas(1000, 600, WEBGL);
  }
  
  function draw() {
  //A clear background setting
  background(250);
  //Colour that I like
  fill(125, 80, 220);
  //Orientates the object on the page
  translate(50, 0, 0);
  //Creates a new drawing space
  push();
  rotateZ(frameCount * 0.00);
   //rotating on the X axis which is vertical on a speed setting via frameCount
  rotateX(frameCount *0.01);
  rotateY(frameCount * 0.00);
  //My cylinder is 70 wide by 280 long my shape parametres
  cylinder(70, 280);
  //restores the space to blank
  pop();
  }