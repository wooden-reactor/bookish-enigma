let x = 0;
let y = 0;
let xpos;
let ypos;

let mode = 1;


let bird = document.getElementById('bird');

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight)
    cnv.parent('mySketch');
}

function draw() {

    if (mode == 1 ) {
     
        displayFish();

    }

    if ((xpos > 800 && xpos < 1100) && (ypos > 400 && ypos < 700)){
        bird.style.display="block";
    }

    if ((xpos < 400) && (ypos < 400)){
        bird.style.display="none";

        mode = 2;

        console.log(mode)
    }

    if (mode == 2){
        removeElements();
        background(0);
        bird.style.display="none";
    }

    if(keyIsPressed){
        if (keyCode == UP_ARROW){
            y+=5;
        }
    
        if (keyCode == RIGHT_ARROW){
            x+=5;
        }
    
        if (keyCode == DOWN_ARROW){
            y-=5;
        }
    
        if (keyCode == LEFT_ARROW){
            x-=5;
        }
}

}


function displayFish(){
    removeElements();

    let fish = createImg('images/fish.png');
    fish.size(300,300);
    fish.id('fish');

    xpos = width/2 - 100 + x;
    ypos = height/2 - 100 - y;

    fish.position(xpos, ypos)
}
