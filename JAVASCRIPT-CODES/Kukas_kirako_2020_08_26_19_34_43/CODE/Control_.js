function Control_() {
  this.grid = [];
  this.moveEnabled = true;
  this.animation = false;
  this.index = -1;
  this.randomMixingEnabled = false;
  this.mixingIndex = 0;
  this.mixingAnimationNext = false;
  this.mixingShow = true;
  this.mixingNumber = 100;
  this.mixingOffset = 2;

  this.mixingGameEnd = false;
  this.start = 0;

  this.load = function() {
    for (let i = 0; i <= 3; i++) {
      this.grid[i] = [];
    }

    let i = 0;

    for (let y = 0; y <= 3; y++) {
      for (let x = 0; x <= 3; x++) {
        this.grid[y][x] = i;
        i++;
      }
    }

  }

  this.move = function(i) {

    let y = floor(i / 4);
    let x = i - (y * 4);

    if (this.moveEnabled) {
      if (y + 1 < 4) {
        if (this.grid[y + 1][x] == 15) {
          this.moveEnabled = false;
          this.animationEnabled = true;
        }
      }

      if (x + 1 < 4) {
        if (this.grid[y][x + 1] == 15) {
          this.moveEnabled = false;
          this.animationEnabled = true;
        }
      }

      if (y - 1 >= 0) {
        if (this.grid[y - 1][x] == 15) {
          this.moveEnabled = false;
          this.animationEnabled = true;
        }
      }

      if (x - 1 >= 0) {
        if (this.grid[y][x - 1] == 15) {
          this.moveEnabled = false;
          this.animationEnabled = true;
        }
      }
      
      if (this.animationEnabled) {
        this.index = i;
      }
      
    }
  }

  this.animation = function() {

    if (this.animationEnabled) {

      let y = floor(this.index / 4);
      let x = this.index - (y * 4);
      let storage = -1;

      if (y + 1 < 4) {
        if (this.grid[y + 1][x] == 15) {
          if (graphic.offset.y < 88) {
            graphic.offset.y += this.mixingOffset;
          } else {
            storage = this.grid[y + 1][x];
            this.grid[y + 1][x] = this.grid[y][x];
            this.grid[y][x] = storage;
            graphic.offset.y = 0;
            this.animationEnabled = false;
            this.moveEnabled = true;
            this.mixingAnimationNext = false;
          }
        }
      }

      if (x + 1 < 4) {
        if (this.grid[y][x + 1] == 15) {
          if (graphic.offset.x < 88) {
            graphic.offset.x += this.mixingOffset;
          } else {
            storage = this.grid[y][x + 1];
            this.grid[y][x + 1] = this.grid[y][x];
            this.grid[y][x] = storage;
            graphic.offset.x = 0;
            this.animationEnabled = false;
            this.moveEnabled = true;
            this.mixingAnimationNext = false;
          }
        }
      }

      if (y - 1 >= 0) {
        if (this.grid[y - 1][x] == 15) {
          if (graphic.offset.y > -88) {
            graphic.offset.y -= this.mixingOffset;
          } else {
            storage = this.grid[y - 1][x];
            this.grid[y - 1][x] = this.grid[y][x];
            this.grid[y][x] = storage;
            graphic.offset.y = 0;
            this.animationEnabled = false;
            this.moveEnabled = true;
            this.mixingAnimationNext = false;
          }
        }
      }

      if (x - 1 >= 0) {
        if (this.grid[y][x - 1] == 15) {
          if (graphic.offset.x > -88) {
            graphic.offset.x -= this.mixingOffset;
          } else {
            storage = this.grid[y][x - 1];
            this.grid[y][x - 1] = this.grid[y][x];
            this.grid[y][x] = storage;
            graphic.offset.x = 0;
            this.animationEnabled = false;
            this.moveEnabled = true;
            this.mixingAnimationNext = false;
          }
        }
      }
    }
    
  }

  this.randomMixing = function() {

    if (this.randomMixingEnabled) {

      let rndNr = int(random(0, 15));

      if (!this.mixingAnimationNext) {
        this.mixingIndex++;
      }

      if (!this.animationEnabled) {
        this.move(rndNr);
        this.mixingAnimationNext = true;
      }

      if (this.mixingShow) {
        this.mixingOffset = 10;
      } else {
        this.mixingOffset = 90;
      }

      this.animation();

      if (this.mixingIndex > this.mixingNumber) {
        this.randomMixingEnabled = false;
        this.mixingIndex = 0;
        this.mixingOffset = 2;
        print("Játék elkezdődött !");
        this.start = millis();
      }

    }
  }

  this.gameEnd = function() {
    let i = 0;
    let w = 0;

    for (let y = 0; y <= 3; y++) {
      for (let x = 0; x <= 3; x++) {
        if (this.grid[y][x] == i) {
          w++;
        }
        i++;
      }
    }

    if (w >= 16 && this.mixingGameEnd && this.mixingIndex == 0) {
      print("Gratulálok !");
      print("Kirakás ideje: " + int((millis() - this.start) / 1000) + " s");
      this.mixingGameEnd = false;
    }

  }
}

function mousePressed() {

  if (control_.moveEnabled && !control_.randomMixingEnabled) {

    let i = 0;

    for (let y = 0; y <= 3; y++) {
      for (let x = 0; x <= 3; x++) {

        let nbo = x * 89 + 60;
        let njo = x * 89 + 149;
        let nfo = y * 89 + 103;
        let nao = y * 89 + 192;

        if (mouseX > nbo && mouseX < njo && mouseY > nfo && mouseY < nao) {
          control_.move(i);
        }

        i++;

      }
    }
  }

}

function keyPressed() {
  
  if (!control_.randomMixingEnabled) {
    if (key == "r" || key == "R") {
      control_.randomMixingEnabled = true;
      control_.mixingGameEnd = true;
    }
  }
  
}
