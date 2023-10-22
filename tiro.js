class Bullet {
    constructor(posX, posY, sizeX, sizeY) {
      this.posX = posX;
      this.posY = posY;
      this.sizeX = sizeX;
      this.sizeY = sizeY;
        }
  
    draw() {
      fill("blue")
      rect(this.posX, this.posY, this.sizeX, this.sizeY);
      this.posX = this.posX - 10;
      
    }
  }