let Arr = new Array(170);
var num = 0;

function setup() {
  createCanvas(300, 511);

  let Arr = new Array(170)
  for(var i =0;i<170;i++){
   	Arr[i] = new peice();
  }
  

}

function draw() {
  background(220);
  Arr[0] = new peice();
  for (var num = 0; ;i++) {
    
    Arr[num].create();
    Arr[num].update();
    if (Arr[num].low == false) {

      Arr[num].create();
    }
  }

}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    peice1.drop();
  } else if (keyCode === UP_ARROW) {
    peice1.rotate(1);
  } else if (keyCode === RIGHT_ARROW) {
    peice1.move(1);
  } else if (keyCode === LEFT_ARROW) {
    peice1.move(-1);
  }
}