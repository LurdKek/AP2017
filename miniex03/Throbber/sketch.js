//rad = radius; radAdd = adding to radius
var radAdd = 1;
var rad = 100;

function setup() {
    console.log("is working");
    createCanvas(820, 600);
    background(10);
    frameRate(60);
}

function draw() {
    //var tnum = map(rad, 100, 300, 30, 60);
    var tnum = 75
    
    if(mouseIsPressed){
        tnum = map(rad, 100, 200, 75, 150); //turn on by mouseclick
    }
    
    fill(10, 10);
    rect(0, 0, width, height);
    drawThrobber(tnum);
    
}

//Throbber asic movement
function drawThrobber(num) {    
    push(); //pga. translate
    translate(width/2, height/2);
    
    var cir = 1440/num*(frameCount%num);
    var r = map(rad, 100, 200, 50, 220);
    var g = map(rad, 100, 200, 200, 50);
    var b = map(rad, 100, 200, 0, 50);
    
    rad = rad+radAdd;
    rotate(radians(cir));
    noStroke();
    fill(r, g, b);
    arc(rad, 35, 150, 150, PI, PI+QUARTER_PI);
    if (rad >= 200) {
        radAdd = -1
    } else if(rad <= 100) {
        radAdd = +1
    }
    
    pop(); //pga. translate
}
