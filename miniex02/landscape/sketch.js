//setup variables
var cloudA = 0;
var cloudB = -50;
var cloudC = -850;
var cloudyA = 200;
var cloudyB = 170;
var cloudyC = 275;
var R1 = 250;
var B1 = 204;
var G1 = 204;
var Transpar1 = 75;


//objects
var ground = {
    R: 51,
    G: 102,
    B: 0
}

var tri = {
    R1: 153,
    B1: 0,
    G1: 163,
    R2: 51,
    B2: 0,
    G2: 102,
    R3: 0,
    B3: 0,
    G3: 102,
    R4: 0,
    B4: 0,
    G4: 51,
}

    
function setup() {
//kanvas
	createCanvas(1500, 850);
	console.log("hello funct.setup");
    
}

function draw() {
  
    stroke(2);
//bg
    R1 = map(mouseX, 100, 1400, 245, 10);
    B1 = map(mouseY, 1400, 100, 50, 245);
    background(R1, B1, G1);

//clouds
    cloudA = cloudA+2;
    cloudB = cloudB+2;
    cloudC = cloudC+2;
    
    fill(204, 255, 255);
    rect(cloudA,cloudyA,155, 55, 20);
    if (cloudA > 1500)
        {
            cloudA = -100;
            cloudyA = random(50, 250);
        }
    rect(cloudB,cloudyB,225, 55, 20);
    if (cloudB > 1500)
        {
            cloudB = -100;
            cloudyB = random(50, 250);
        }
    rect(cloudC, cloudyC, 110, 65, 20);
    if (cloudC > 1500)
        {
            cloudC = -100;
            cloudyC = random(150, 400);
        }
  
//sun
	colorMode(RGB); //just to be sure
    fill(255, 247, 1);
	ellipse(55, 42, 250, 250);
    noStroke();
    fill(155, 165, 0);
	ellipse(50, 50, 233, 208, 208);
	fill(202, 74, 1);
	ellipse(50, 50, 183, 183);

//ground
    stroke(2);
    fill(ground.R, ground.G, ground.B);
    rect(0, 525, 1500, 325);
    fill(76, 153, 0);
    bezier(170, 780, 320, 700, 470, 700, 770, 780);
    bezier(370, 780, 520, 700, 670, 700, 970, 780);
    bezier(1100, 579, 1250, 475, 1375, 450, 1471, 579);
    

//mouse
    noStroke();
    fill(50, 50, 255, 150)
    ellipse(mouseX, mouseY, 35, 35)
    
//triangle
    
    fill(tri.R1, tri.B1, tri.G1, Transpar1);
    triangle(350, 0, 1150, 0, 750, 585);
    noStroke();
    fill(tri.R2, tri.B2, tri.G2, Transpar1);
    triangle(425, 0, 1075, 0, 750, 555);
    fill(tri.R3, 0, 102, Transpar1);
    triangle(475, 0, 1000, 0, 750, 505);
    fill(tri.R4, 0, 51, Transpar1);
    triangle(575, 0, 875, 0, 750, 505);

//If events 01
    if(mouseX>475 && mouseX<996 && mouseY>0 && mouseY<553) {
        if(mouseIsPressed) {
            tri.R1 = random(0, 255);
            tri.R2 = random(40, 200);
            tri.R3 = random(35, 177);
            tri.R4 = random(5, 247);
            tri.G2 = random(150, 250);
            Transpar1 = 250;
            ground.R = random(10, 190);
            ground.G = random(75, 250);
            ground.B = random(0, 199);
            R1 = 250;
            B1 = 250;
            G1 = 250;
        }
        } else {
            tri.R1 = 153;
            tri.R2 = 51;
            tri.R3 = 0;
            tri.R4 = 0;
            tri.G2 = 102;
            Transpar1 = 75;
            ground.R = 51;
            ground.G = 102;
            ground.B = 0;
            R1 = 250;
            B1 = 204;
            G1 = 204;
        }


//console.log(mouseY);        
}

//function mousePressed() {
    //Transpar1 = 255;
//}

//coordinates
