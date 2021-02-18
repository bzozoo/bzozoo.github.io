function Graphic() {

  this.offset = createVector(0, 0);

  this.load = function() {
    
    this.img = [];
    this.img[0] = loadImage("Images/1.jpg");
    this.img[1] = loadImage("Images/2.jpg");
    this.img[2] = loadImage("Images/3.jpg");
    this.img[3] = loadImage("Images/4.jpg");
    this.img[4] = loadImage("Images/5.jpg");
    this.img[5] = loadImage("Images/6.jpg");
    this.img[6] = loadImage("Images/7.jpg");
    this.img[7] = loadImage("Images/8.jpg");
    this.img[8] = loadImage("Images/9.jpg");
    this.img[9] = loadImage("Images/10.jpg");
    this.img[10] = loadImage("Images/11.jpg");
    this.img[11] = loadImage("Images/12.jpg");
    this.img[12] = loadImage("Images/13.jpg");
    this.img[13] = loadImage("Images/14.jpg");
    this.img[14] = loadImage("Images/15.jpg");
    this.img[15] = loadImage("Images/16.jpg");

  }
  this.show = function() {

    fill(220, 142, 0);
    rect(10, 10, 455, 499, 40);

    fill(255);
    rect(60, 103, 89 * 4, 89 * 4);

    fill(0);
    textSize(85);
    text("KUKA", 60, 87);

    noFill();

    let i = 0;

    for (let y = 0; y <= 3; y++) {
      for (let x = 0; x <= 3; x++) {

        let xo = this.offset.x;
        let yo = this.offset.y;

        if (i != control_.index) {
          xo = 0;
          yo = 0;
        }

        if (!control_.animationEnabled || (control_.animationEnabled && control_.grid[y][x] != 15)) {
          image(this.img[control_.grid[y][x]],
            x * 89 + 60 + xo,
            y * 89 + 103 + yo,
            89,
            89);
        }

        if (!control_.animationEnabled || (control_.animationEnabled && control_.grid[y][x] != 15)) {
          rect(x * 89 + 60 + xo,
            y * 89 + 103 + yo,
            89,
            89);
        }

        i++;

      }
    }

  }
}