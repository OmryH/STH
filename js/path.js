class Path {
  constructor(area, direction) {
    this.area = area;
    this.angle = random(direction.angleOne, direction.angleTwo);
    this.x = area.x + area.r * cos(this.angle);
    this.y = area.y + area.r * sin(this.angle);
    this.r = 5;
    this.direction = direction;
    this.xDiff = 40;
    this.yDiff = 10;
    this.definePath();
  }

  show() {
    ellipse(this.x, this.y, this.r * 2);
  }

  definePath() {
    if (this.y > this.area.y) {
      if (this.x < this.area.x) {
        this.xDiff *= -1;
      }
    } else {

      if (this.x < this.area.x) {
        this.xDiff *= -1;
        this.yDiff *= -1;
      }

      if (this.x >= this.area.x) {
        this.yDiff *= -1;
      }
    }
  }

  drawPath() {
    if (this.direction.name == 'right') {

      beginShape()
      curveVertex(this.x, this.y);
      curveVertex(this.x, this.y);
      curveVertex(this.x + this.xDiff, this.y);
      curveVertex(this.x + 1.5 * this.xDiff, this.y - this.yDiff);
      curveVertex(this.x + 2 * this.xDiff, this.y + this.yDiff);
      curveVertex(this.x + 2.5 * this.xDiff, this.y - this.yDiff);
      curveVertex(this.x + 3 * this.xDiff, this.y + this.yDiff);
      curveVertex(this.x + 3.5 * this.xDiff, this.y - this.yDiff);
      curveVertex(this.x + 4 * this.xDiff, this.y);
      curveVertex(this.x + 5 * this.xDiff, this.y);
      curveVertex(this.x + 5 * this.xDiff, this.y);
      endShape();

    }

    if (this.direction.name == 'left') {

      beginShape()
      curveVertex(this.x, this.y);
      curveVertex(this.x, this.y);
      curveVertex(this.x + this.xDiff, this.y + 1.5 * this.yDiff);
      curveVertex(this.x + 1.5 * this.xDiff, this.y + 0.5 * this.yDiff);
      curveVertex(this.x + 2 * this.xDiff, this.y - 0.5 * this.yDiff);
      curveVertex(this.x + 2.5 * this.xDiff, this.y + 2 * this.yDiff);
      curveVertex(this.x + 3 * this.xDiff, this.y - this.yDiff);
      curveVertex(this.x + 3.5 * this.xDiff, this.y + 2 * this.yDiff);
      curveVertex(this.x + 4 * this.xDiff, this.y);
      curveVertex(this.x + 5 * this.xDiff, this.y);
      curveVertex(this.x + 5 * this.xDiff, this.y);
      endShape();

    }

    //     beginShape();
    //     curveVertex(this.x, this.y);
    //     curveVertex(this.x, this.y);
    //     curveVertex(this.x, this.y + this.yDiff);
    //     curveVertex(this.x - this.xDiff, this.y + 1.5 * this.yDiff);
    //     curveVertex(this.x + this.xDiff, this.y + 2 * this.yDiff);
    //     curveVertex(this.x- this.xDiff, this.y + 2.5 * this.yDiff);
    //     curveVertex(this.x + this.xDiff, this.y + 3 * this.yDiff);
    //     curveVertex(this.x - this.xDiff, this.y + 3.5 * this.yDiff);
    //     curveVertex(this.x + this.xDiff, this.y + 4 * this.yDiff);
    //     curveVertex(this.x + this.xDiff, this.y + 4 * this.yDiff);
    //     endShape();
  }
}