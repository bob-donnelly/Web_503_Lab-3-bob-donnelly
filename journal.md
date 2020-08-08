### Lab 3 journal



Made a repository and added all necessary folders and files to complete the shapes specified in the lab's readMe.

Added Alikahwaji as a collaborator to my repo.

Changed some files and created a rectangle example. I used (p5.js.org) *examples/hello-p5-simple-shapes* (n.d)

Added completed quad example.

```
function draw (){
    //background colour 
    background('200');
    fill(125, 80, 220);
    //stroke 
    noStroke();
    //this value moves the shape to the center of the canvas
    translate(width / 2, height / 2);
    //rotates the angle by the axis
    rotate(35,0);
    //quad dimensions 8 sides
    quad(45, 39, 95, 30, 75, 70, 50, 92);
    //stroke thickness of 0
    strokeweight (0);   
}
```

Above is my solution to the quad example. I used the references (p5.js.org) *reference/#/p5/quad* (n.d) and (p5.js.org) *reference/#/p5/rotate* (n.d) plus (p5.js.org) *reference/#/p5/blue* (n.d) I tried to change strokeweight to noStroke and forgot to delete the extra code.

Made a cylinder 3D model using WEBGL below is the code. (p5js.org) *examples 3D geometries* (n.d)  

```
function setup() {
    //Sets up 3D modelling via WEBGL on a canvas
    createCanvas(1000, 600, WEBGL);
  }
```

```
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
```

Above is my code for cylinders rotating  on the page. (p5js.org) *reference p5 cylinder* (n.d) (p5js.org) *reference p5 push* (n.d) Also looked at the push / pop commands which as stated in the code make it so you can create successive draw commands.

###### **References** 

https://p5js.org/examples/hello-p5-simple-shapes.html

https://p5js.org/reference/#/p5/rotate

https://p5js.org/reference/#/p5/quad

https://p5js.org/reference/#/p5/blue

https://p5js.org/examples/3d-geometries.html

https://p5js.org/reference/#/p5/cylinder

https://p5js.org/reference/#/p5/push