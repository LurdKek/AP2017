var flowers = [];
var trees = [];

//SETUP
function setup(){
    createCanvas(900, 600);
    
//Constructor function-arrays
    for (i = 0; i < 1; i++){
        flowers[i] = new Flower(random(50, 350), random(0, 400), random(50, 200), random(200));
    }
    
    for (t = 0; t < 1; t++){
        trees[t] = new Tree(random(550, 850), random(50, 450));
    }   
}

//KEYPRESSED: to add flowers or trees
function keyPressed() {
    if (keyCode == UP_ARROW){
        flowers.push(new Flower(random(0, 300), random(50, 450), random(50, 200), random(200)));
    } else if (keyCode == DOWN_ARROW) {
        trees.push(new Tree (random(600, 900), random(0, 400)));
    }  
}


//DRAW
function draw() {
    //Background: Soil colour represents neutrients in the ground. The greyer the fewer neutrients, and plants will start to die out...
    var bgR = map(i+t, 0, 100, 102, 60)
    var bgB = map(i+t, 0, 30, 50, 60)
    var bgG = map(i+t, 0, 60, 47, 60)
    background(bgR, bgB, bgG);
    
    //TXT
    push();
    translate(width/2, height/2);
    fill(255, 100);
    textSize(40);
    text("Trees & Tulips", -150, 0);
    textSize(20);
    text("See how many trees or tulips u can grow", -200, 25);
    pop();
    
    push();
    translate(width/2);
    fill(255, 150);
    textSize(15);
    text("UP-ARROW = Grow tulips, DOWN-ARROW = Grow trees", 250, 525);
    text("Be cautious towards the color of the ground. Grayer ground equals less nutritious ground; and life can't flourish without nutritions.", 50, 550);
    
    //Flowers Draw
    for (i = 0; i < flowers.length; i++) {
        //flowers[i].move();
        flowers[i].display(); 
        if (bgR && bgB && bgG > 67) {
            flowers[i].update();
        }
        if (flowers[i].lifespan < 50) {
            flowers.splice(i, 1);
        }
    }
    
    //Trees Draw
    for (t = 0; t < trees.length; t++) {
        trees[t].display();
        if (bgR && bgB && bgG > 67) {
            trees[t].update();
        }
        if (trees[t].lifespan < 50) {
            trees.splice(t, 1);
        }
    }
    
 
}

   












    
 //EASTER-EGG FRACTAL TREE!!!!   
    
    
    /*var angle = PI / 4;

var slider;
function setup() {
    createCanvas(400, 400);
    slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw() {
    background(51);
    angle = slider.value();    
    stroke(255);
    translate(200, height);
    branch(125);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if(len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }

    
}*/







