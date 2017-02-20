//variables
var cloudA = 0;
var cloudB = -50;
var cloudC = -850;
var yA = 200;
var yB = 170;
var yC = 275;
var R1;
var B1;
var G1;

function setup() {
//kanvas
	createCanvas(1500,850, WEBGL);
	console.log("hello funct.setup");
}

function draw() {
    
    stroke(2)
//bg
	background(255,204,204);
//clouds
    cloudA = cloudA+2;
    cloudB = cloudB+2;
    cloudC = cloudC+2;
    
    fill(204,255,255);
    rect(cloudA,yA,155,55,20);
    if (cloudA > 1500)
        {
            cloudA = -50;
            yA = random(50,250);
        }
    rect(cloudB,yB,225,55,20);
    if (cloudB > 1500)
        {
            cloudB = -50;
            yB = random(50,250);
        }
    rect(cloudC,yC,110,65,20);
    if (cloudC > 1500)
        {
            cloudC = -50;
            yC = random(150,400);
        }
  
//sun
	colorMode(RGB); //just to be sure
    fill(255,247,1);
	ellipse(55,42,250,250);
    noStroke();
    fill(155,165,0);
	ellipse(50,50,233,208,208);
	fill(202,74,1);
	ellipse(50,50,183,183);
//ground
    stroke(2);
    fill(51,102,0);
    rect(0,525,1500,325);
    fill(76,153,0);
    bezier(170,780,320,700,470,700,770,780);
    bezier(370,780,520,700,670,700,970,780);
    bezier(1100,579,1250,475,1375,450,1471,579);

//3D
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.03);
    torus(85,40)
    
//triangle
    R1 = random(10,245);
    R2 = random(10, 245);
    R3 = random(10,245)
    
    fill(153,0,163);
    triangle(350,0,1150,0,750,585);
    noStroke();
    fill(51,0,102);
    triangle(425,0,1075,0,750,555);
    fill(0,0,102);
    triangle(475,0,1000,0,750,505);
    fill(0,0,51);
    triangle(575,0,875,0,750,505);
}

function mousePressed() {
    
}
