let y = 100; //y heeft een waarde van 100

function setup() {
  createCanvas(720, 400); //maak een canvas van 720 bij 400
  frameRate(50);


  function draw() {
    background(255, 157, 0); // Maak de achtergrond geel/oranje
    stroke(255); // Kleur lijn wit
    strokeWeight(4) // de lijn heeft een breedte van 4
    fill(255)
    for (var i = 0; i < 30; i++) { //30 cirkels boven elkaar
      for (var k = 0; k < 30; k++) { // 30 rijen met 5 cirkels 

        xBeweging = sin(frameCount / 10) * 50; // positie van x 
        yBeweging = frameCount % 50; // positie van y
        ellipse(xBeweging + 45 * i, yBeweging + 50 * k, 40, 40);
      }



      /*for  (var i = 0; i < 5; i++) {
       ellipse(200 + sin(frameCount/10) * 30,
       100+(i*50), 40, 40); */
    }
    strokeWeight(100)
    stroke(0, random(80, 100))
    y = y - 1;
    if (y < 0) {
      y = height;
    }
    line(0, y, width, y);
  }
}
