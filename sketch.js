let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let canvasSize = 500;
let scrollSpeed1 = 2;
let scrollSpeed2 = 5;
let scrollSpeed3 = 1;
let scrollSpeed4 = 4;
let scrollSpeed5 = 3;
let scrollSpeed6 = 9;
let repetitions = 40;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
let x3 = 0;
let y3 = 0;
let x4 = 0;
let y4 = 0;
let x5 = 0;
let y5 = 0;
let x6 = 0;
let y6 = 0;

let backgroundSound;
let smallImage;
let smallImageX;
let smallImageY;
let isMousePressed = false;


function preload() {
  img1 = loadImage("W1.png");
  img2 = loadImage("W2.png");
  img3 = loadImage("W3.png");
  img4 = loadImage("W4.png");
  img5 = loadImage("W5.png");
  img6 = loadImage("W6.png");
  
    backgroundSound = loadSound('background.mp3');
    smallImage = loadImage("smallImage.png");

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function setup() {
    createCanvas(windowWidth, windowHeight);
 // let canvas = createCanvas(canvasSize, canvasSize);



    backgroundSound.play();
}



function draw() {
  background(220);

  // A scroll speed based on mouse position for img1
  let scrollSpeedX1 = map(mouseX, 0, width, scrollSpeed1, -scrollSpeed1);
  let scrollSpeedY1 = map(mouseY, 0, height, scrollSpeed1, -scrollSpeed1);
  x1 -= scrollSpeedX1;
  y1 -= scrollSpeedY1;

  // scrolling collage for img1
  push();
  translate(x1, y1);
  for (let i = 0; i < repetitions; i++) {
    for (let j = 0; j < repetitions; j++) {
      let sx1 = img1.width;
      let sy1 = img1.height;
      let spacing = 10; // Adjust the spacing between repetitions
      image(img1, i * (sx1 + spacing), j * (sy1 + spacing), sx1, sy1);
    }
  }
  pop();

  //  scroll speed based on mouse position for img2
  let scrollSpeedX2 = map(mouseX, 0, width, scrollSpeed2, -scrollSpeed2);
  let scrollSpeedY2 = map(mouseY, 0, height, scrollSpeed2, -scrollSpeed2);
  x2 -= scrollSpeedX2;
  y2 -= scrollSpeedY2;

  // scrolling collage for img2
  push();
  translate(x2, y2);
  for (let i = 0; i < repetitions; i++) {
    for (let j = 0; j < repetitions; j++) {
      let sx2 = img2.width;
      let sy2 = img2.height;
      let spacing = 100; // Adjust the spacing between repetitions
      image(img2, i * (sx2 + spacing), j * (sy2 + spacing), sx2, sy2);
    }
  }
  pop();

  //  scroll speed based on mouse position for img3
  let scrollSpeedX3 = map(mouseX, 0, width, scrollSpeed3, -scrollSpeed3);
  let scrollSpeedY3 = map(mouseY, 0, height, scrollSpeed3, -scrollSpeed3);
  x3 -= scrollSpeedX3;
  y3 -= scrollSpeedY3;

  //  scrolling collage for img3
  push();
  translate(x3, y3);
  for (let i = 0; i < repetitions; i++) {
    for (let j = 0; j < repetitions; j++) {
      let sx3 = img3.width;
      let sy3 = img3.height;
      let spacing = 100; // Adjust the spacing between repetitions
      image(img3, i * (sx3 + spacing), j * (sy3 + spacing), sx3, sy3);
    }
  }
  pop();

  //  scroll speed based on mouse position for img4
  let scrollSpeedX4 = map(mouseX, 0, width, scrollSpeed4, -scrollSpeed4);
  let scrollSpeedY4 = map(mouseY, 0, height, scrollSpeed4, -scrollSpeed4);
  x4 -= scrollSpeedX4;
  y4 -= scrollSpeedY4;

  //  scrolling collage for img4
  push();
  translate(x4, y4);
  for (let i = 0; i < repetitions; i++) {
    for (let j = 0; j < repetitions; j++) {
      let sx4 = img4.width;
      let sy4 = img4.height;
      let spacing = 100; // Adjust the spacing between repetitions
      image(img4, i * (sx4 + spacing), j * (sy4 + spacing), sx4, sy4);
    }
  }
  pop();

  //  scroll speed based on mouse position for img5
  let scrollSpeedX5 = map(mouseX, 0, width, scrollSpeed5, -scrollSpeed5);
  let scrollSpeedY5 = map(mouseY, 0, height, scrollSpeed5, -scrollSpeed5);
  x5 -= scrollSpeedX5;
  y5 -= scrollSpeedY5;

  // scrolling collage for img5
  push();
  translate(x5, y5);
  for (let i = 0; i < repetitions; i++) {
    for (let j = 0; j < repetitions; j++) {
      let sx5 = img5.width;
      let sy5 = img5.height;
      let spacing = 100; // Adjust the spacing between repetitions
      image(img5, i * (sx5 + spacing), j * (sy5 + spacing), sx5, sy5);
    }
  }
  pop();

  // scroll speed based on mouse position for img6
  let scrollSpeedX6 = map(mouseX, 0, width, scrollSpeed6, -scrollSpeed6);
  let scrollSpeedY6 = map(mouseY, 0, height, scrollSpeed6, -scrollSpeed6);
  x6 -= scrollSpeedX6;
  y6 -= scrollSpeedY6;

  //  scrolling collage for img6
  push();
  translate(x6, y6);
  for (let i = 0; i < repetitions; i++) {
    for (let j = 0; j < repetitions; j++) {
      let sx6 = img6.width;
      let sy6 = img6.height;
      let spacing = 100; // Adjust the spacing between repetitions
      image(img6, i * (sx6 + spacing), j * (sy6 + spacing), sx6, sy6);
    }
  }
  pop();

  if (keyIsDown(32)) { // 32 is the ASCII code for spacebar
    // Play the background sound
    backgroundSound.play();
  }
  if (isMousePressed) {
    let smallImageWidth = 400;
    let smallImageHeight = 400;
    image(smallImage, smallImageX, smallImageY, smallImageWidth, smallImageHeight);
  
  }
}

function mousePressed() {
  // Set the small image position when the mouse is pressed
  smallImageX = mouseX;
  smallImageY = mouseY;
  // Set the flag to true so that the small image is drawn
  isMousePressed = true;
}
