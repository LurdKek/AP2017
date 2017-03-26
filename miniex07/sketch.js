var boxes = [];
var snake;
var scl = 1;
var cols = 30;
var rows = 30;
var vScale = 20;

function setup() {
    pixelDensity(1);
    createCanvas(cols, rows);
    slider = createSlider(5, 40, 10);
    frameRate(15); //sets the speed of the snake, pretty basic.

    //cols = floor(width / scl);
    //rows = floor(height / scl);
    for (var y = 0; y < rows; y++) {
        for (var x = 0; x < cols; x++) {
            var box = createCheckbox();
            box.style('display', 'inline');
            box.parent('mirror');
            boxes.push(box);
        }
        var linebreak = createSpan('<br/>');
        linebreak.parent('mirror');
    }
    snake = new Snake

    pickLocation();
}

function pickLocation() { //picks the location for the food to spawn.

    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(0);

    if (snake.eat(food)) { //what happens when snake eats the food (it grows longer)
        pickLocation();
    }

    snake.death();
    snake.update();
    snake.show();


    fill(255);
    rect(food.x, food.y, 1, 1);
    overlay();
}

function keyPressed() { //controls for the snake..
    if (keyCode === UP_ARROW) {
        snake.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        snake.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        snake.dir(-1, 0);
    }
}

function overlay() { //This is the overlay of the checkboxes, that displays the game. In the bottom left conor it should be possible to see the canvas which the checkboxes are based upon.
    loadPixels();
    for (var y = 0; y < cols; y++) {
        for (var x = 0; x < rows; x++) {
            //Der bliver ganget med 4 til sidst da pixelarrays reelt set indeholder 4 værdier pr felt. en værdi til R, G, B og en værdi til Aplha
            var index = (x + y * cols) * 4;


            //For hver boks i griddet bliver der tilegnet en variabel til dens r, g og b værdi. Dette er så det kan laves om til en enkelt værdi som man kan bruge til at måle thresholden.
            var r = pixels[index + 0];
            var g = pixels[index + 1];
            var b = pixels[index + 2];

            //rgb bliver lavet til en brightness value der kan måles gennem threshold
            var bright = (r + g + b) / 3

            var threshold = 2;

            var checkIndex = x + y * cols;

            //her bliver grænsen for hvilke checkboxes der skal være aftrykkede bestemt. 
            if (bright < threshold) {
                boxes[checkIndex].checked(false);
                console.log(checkIndex)
            } else {
                boxes[checkIndex].checked(true);

            }

            /*
                        //denne del af koden er fra en tidligere iteration fra før checkboxesne blev tilføjet. 
                        noStroke();
                        rectMode(CENTER);
                        rect(x * vScale, y * vScale, vScale, vScale);*/
        }
    }
}
