function Tree(x, y) {
    this.x = x;
    this.y = y;
    this.col = color(142, 89, 67);
    this.rad = 20;
    this.lifespan = 255;
    
    this.display = function() {
        noStroke();
        //stroke(0, 170, 0, 150);
        fill(this.col);
        rect(this.x, this.y, 7, 50);
        fill(random(0, 50), random(120, 200), random(50, 100), this.lifespan);
        triangle(this.x-20, this.y+20, this.x+27, this.y+20, this.x+7, this.y-10);
        
    }
    
        this.update = function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
        this.lifespan = this.lifespan-3;
    }
}