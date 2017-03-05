function Flower(x, y, r, b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.b = b;
    this.col = color(0, 171, 0, this.lifespan);
    this.lifespan = 255;
    
    this.display = function() {
        noStroke();
        //stroke(0, 170, 0, 150);
        fill(this.col);
        rect(this.x, this.y, 7, 50);
        fill(this.r, 0, this.b, this.lifespan);
        ellipse(this.x+5, this.y, 30, 30);
        
    }
    
    this.update = function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
        this.lifespan = this.lifespan-3;
    }
}





//     {
//            x: random(0, width),
//            y: random(0, height),
//            display: function() {
//                stroke(255);
//                noFill();
//                ellipse(this.x, this.y, 24, 24);
//            },
//            move: function() {
//                this.x = this.x + random(-1, 1);
//                this.y = this.y + random(-1, 1);
//            }
//        }
//    