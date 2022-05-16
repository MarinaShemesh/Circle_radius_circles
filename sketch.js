console.log('circle radius');


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  //noLoop();

}




function draw() {

  roundCircles(300);
  roundCircles(200);
  roundCircles(100);


}


function roundCircles(r) {

  let step = 45;


  for (let i = 0; i < 10; i++) {

    //overly canvas with see-through rectangle
    blendMode(MULTIPLY); ///makes the image darker
    noStroke();
    fill(150, 150, 150, 20);
    rect(0, 0, width, height);
    noFill();
    blendMode(BLEND);

    //noFill();
    let start_angle = random(-200, 500);

    for (let angle = start_angle; angle <= 360 + start_angle; angle += step) {

      let x = r * cos(angle);
      let y = r * sin(angle);

      strokeWeight(2);
      stroke(255);
     
      ///fill(255);
      circle(950 + x, 400 - y, random(20,50));
    }

  }
}