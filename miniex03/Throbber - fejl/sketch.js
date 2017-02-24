var cir2 = 0;

function setup() {
    console.log("is working");
    createCanvas(820, 600);
    background(10);
    frameRate(60);
}

function draw() {
    var tnum = 15
    fill(10, 10);
    rect(0, 0, width, height);
    push();
    translate(width/2, height/2);
    cir2 = cir2+2
    rotate(cir2);
    drawThrobber(tnum);
    pop();
}

function drawThrobber(num) {    
    push();
    translate(width/2, height/2);
    var cir = 1440/num*(frameCount%num);
    var r = map(cir, 1, 1440, 50, 255);
    var g = map(cir, 1, 1440, 0, 50);
    var b = map(cir, 1, 1440, 175, 0);
    var rad = map(cir, 1, 1440, 100, 300);
    rotate(radians(cir));
    noStroke();
    fill(r, g, b);
    arc(rad, 35, 150, 150, PI, PI+QUARTER_PI);
    pop();
    }
