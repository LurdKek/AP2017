function Particle(x, y, hu, firework) { //Single particles
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu = hu;

    if (this.firework) {
        this.vel = createVector(0, random(-19, -2));
    } else {
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(50, 55)); //Try changing the two values here. It gives interesting results to the explosion of the fireworks.
    }
    this.pos = createVector(x, y);

    this.acc = createVector(0, 0);

    this.applyForce = function (force) {
        this.acc.add(force);
    }

    this.update = function () {
        if (!this.firework) {
            this.vel.mult(0.80); //This also changes the look of the paint spatter.
            this.lifespan -= 4;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.done = function () {
        colorMode(HSB);
        if (this.lifespan < 0) {
            return true;
        } else {
            return false;
        }
    }

    this.show = function () {
        if (!this.firework) {
            strokeWeight(2);
            stroke(hu, 255, 255, this.lifespan);
        } else {
            strokeWeight(4);
            stroke(hu, 255, 255);
        }
        point(this.pos.x, this.pos.y);
    }
}
