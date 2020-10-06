
class Area {
  constructor(x, y, size, directions) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.r = size / 2;
    this.directions = directions;
  }

  create() {
    ellipse(this.x, this.y, this.size);
  }
}