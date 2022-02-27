modelStatus = "";

function preload() { }
 
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
}    

function modelLoaded() {
    console.log("Model loaded successfully !!");
    modelStatus = true;
}

function draw() {
    image(webcam, 0, 0, 640, 420);
}