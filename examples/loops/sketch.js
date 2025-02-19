let ypos = 140;
let ystep = 30;
let xpos = 80;
let xstep = 30;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw(){
    background(255);
    fill(50);
    noStroke();
    for (let j = 0; j < 50; j++){
    for (let i = 0; i < 50; i++){
        ellipse(xpos+(xstep*i), ypos+(ystep*j), 20, 20);
        }
        }        
    }