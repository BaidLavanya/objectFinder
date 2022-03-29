modelStatus = "";
objects = "";

function preload() { }
 
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
}    

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model loaded successfully !!");
    modelStatus = true;
}

function draw() {
    image(webcam, 0, 0, 640, 420);
    if(modelStatus != "") {
        objectDetector.detect(video, gotResult);
        for(i=0 ; i < objects.length ; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("noObjs").innerHTML= "No. of objects detected : " + objects.length;
            r = random(255);
            g = random(255);
            b = random(255);
            fill(r,g,b);
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%" + objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        objects = results;
    }
}