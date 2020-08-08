//Set up for the canvas and modelling api
function setup() {
    createCanvas(1000, 600, WEBGL);
  }
  //Draw function to "draw" a object with code
  function draw() {
  //Background colour right now pretty in pink
   background(250, 200, 225);
   //fill colour for a brown rugby ball
   fill(150, 125, 130);  
   //Elongated shpere or as we call it in NZ national ball sport
   ellipsoid(80, 120, 120,);
  }