var img;
var txt;
var circle;

//Variable names for places of interest
var emaron;
var werthcrair;
var hunting;
var arCairon;
var burla;
var salt;
var hillway;
var arZank;
var custo;
var mairqar;
var ior;
var zhiha;
var malonia;
var cephalion;
var mhir;
var mairengi;
var yerheim;
var altar;
var engmair;
var towers;

function preload() {
    img = loadImage("assets/EmaronInDsmall.jpg");

    emaron = new Circle();
    werthcrair = new Circle();
    hunting = new Circle();
    arCairon = new Circle();
    burla = new Circle();
    salt = new Circle();
    hillway = new Circle();
    arZank = new Circle();
    custo = new Circle();
    mairQar = new Circle();
    ior = new Circle();
    zhiha = new Circle();
    malonia = new Circle();
    cephalion = new Circle();
    mhir = new Circle();
    mairEngi = new Circle();
    yerheim = new Circle();
    altar = new Circle();
    engmair = new Circle();
    towers = new Circle();
}

function setup() {
    createCanvas(1929, 1364);



}

function draw() {
    image(img, 0, 0);

    //displays
    emaron.display(455, 538);
    werthcrair.display(655, 619);
    hunting.display(546, 480);
    arCairon.display(346, 616);
    burla.display(522, 635);
    salt.display(450, 732);
    hillway.display(687, 759);
    arZank.display(628, 894);
    custo.display(898, 765);
    mairQar.display(265, 970);
    ior.display(929, 1002);
    zhiha.display(1057, 1125);
    malonia.display(1244, 927);
    cephalion.display(1326, 1239);
    mhir.display(1096, 125);
    mairEngi.display(837, 1318);
    yerheim.display(425, 181);
    altar.display(1659, 813);
    engmair.display(1062, 481);
    towers.display(612, 1163);

    //interactions
    emaron.interact(250, 170, txtEm);
    werthcrair.interact(270, 180, txtWe);
    hunting.interact(250, 150, txtHun);
    arCairon.interact(250, 200, txtCai);
    burla.interact(250, 120, txtBur);
    salt.interact(200, 140, txtSalt);
    hillway.interact(190, 165, txtHill);
    arZank.interact(350, 250, txtZank);
    custo.interact(200, 120, txtCus);
    mairQar.interact(200, 145, txtQar);
    ior.interact(200, 145, txtIor);
    zhiha.interact(200, 145, txtZhi);
    malonia.interact(200, 145, txtMal);
    cephalion.interact(350, 145, txtCeph);
    mhir.interact(300, 225, txtMhir);
    mairEngi.interact(350, 120, txtEngi);
    yerheim.interact(200, 145, txtYer);
    altar.interact(200, 100, txtAlt);
    engmair.interact(200, 145, txtEngM);
    towers.interact(200, 145, txtTowers);
}

function Circle() {
    //stroke weight variable
    this.w = 1;
    //color variables
    this.r = 255;
    this.b = 255;
    this.g = 255;
    this.t = 15;




    //display circle
    this.display = function (cirX, cirY) {
        //position of circle-marker (specified in each consructor function)
        this.cirX = cirX;
        this.cirY = cirY;

        push();
        fill(230, this.t);
        strokeWeight(1);
        stroke(this.r, this.g, this.b, 175);
        ellipse(this.cirX, this.cirY, 40, 40);
        pop();
    }
    this.interact = function (txtX, txtY, intTxt) {
        //size of string textbox
        this.txtX = txtX;
        this.txtY = txtY;
        this.intTxt = intTxt;
        this.d = dist(mouseX, mouseY, this.cirX, this.cirY);

        if (this.d < 30) {
            this.g = 0;
            this.b = 50;
            this.t = 75;
            push();
            fill(50);
            rect(mouseX + 10, mouseY - 75, this.txtX + 5, this.txtY + 5);
            fill(235);
            textSize(16);
            textAlign(CENTER);
            text(this.intTxt, mouseX + 15, mouseY - 70, this.txtX, this.txtY);
            pop();
        } else {
            this.g = 255;
            this.b = 255;
            this.t = 15;
        }
    }

}
