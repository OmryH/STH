let mainArea;
let leftTopPath;
let LeftBottomPath;
let rightPath;

function setup() {
  // let myCanvas = createCanvas(600, 300);
  angleMode(DEGREES);
  mainArea = new Area(0, 0, 100, mainDirections);
  leftTopPath = new Path(mainArea, mainArea.directions.LeftTop);
  LeftBottomPath = new Path(mainArea, mainArea.directions.LeftBottom);
  rightPath = new Path(mainArea, mainArea.directions.Right);

  // myCanvas.parent('map');
}

function draw() {
  background(255);
  // noFill();
  translate(width / 2, height / 2);
  mainArea.create();
  leftTopPath.show();
  LeftBottomPath.show();
  rightPath.show();
  leftTopPath.drawPath();
  LeftBottomPath.drawPath();
  // rightPath.drawPath();

}

function keyPressed(){
  if (key==='s'){
    save('mapForTest.png');
  }
}

