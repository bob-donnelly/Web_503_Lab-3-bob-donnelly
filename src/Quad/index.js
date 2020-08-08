function setup (){
    createCanvas(800, 600);
}

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