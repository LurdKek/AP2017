var fireworks = [];
var gravity;
var slider;
var graVal = slider.value();

function setup() {
    //slider = createSlider(0.1, 1, 0.2)
    // createCanvas(400, 499);
    createCanvas(windowWidth, windowHeight);
    colorMode(RGB);
    gravity = createVector(0, 0.2);
    //frameRate(60);

    stroke(255);
    strokeWeight(4);
}

function draw() {
    //background(10, 35);
    if (random(1) < 0.07) {
        fireworks.push(new Firework());
    }

    for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        if (fireworks[i].done()) {
            fireworks.splice(i, 1);
        }
    }

    console.log(fireworks.length);
}

//function keyStroke() {
//    shift =
//}
