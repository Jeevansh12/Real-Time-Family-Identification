function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
}
function draw() {
    image(video, 0 , 0 , 300 , 300);
}