//variables
var cloudA = 0;
var cloudB = -50;
var cloudC = -850;

function setup() {
//kanvas
	createCanvas(1500,850);
	console.log("hello funct.setup");
}

function draw() {
   var y1 = random(0,400)
    stroke(2)
//bg
	background(255,204,204);
//clouds
    cloudA = cloudA+2;
    cloudB = cloudB+2;
    cloudC = cloudC+2;
    
    fill(204,255,255);
    rect(cloudA,y1,155,55,20);
    if (cloudA > 1500)
        {
            cloudA = -50;
        }
    rect(cloudB,y1,225,55,20);
    if (cloudB > 1500)
        {
            cloudB = -50;
        }
    rect(cloudC,y1,110,55,20);
    if (cloudC > 1500)
        {
            cloudC = -50;
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
//triangle
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
    ellipse(150,150,150);
}