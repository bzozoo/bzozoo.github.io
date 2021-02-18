var graphic;
var control_;

function setup() {

  graphic = new Graphic();
  control_ = new Control_();

  graphic.load();
  control_.load();

  createCanvas(475, 516);

}

function draw() {

  background(50);

  graphic.show();
  control_.animation();
  control_.randomMixing();
  control_.gameEnd();
  
}