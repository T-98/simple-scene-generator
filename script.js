var seed = 12345;
let noiseScale = 0.02;
var star_pos = [];

function setup() {
    createCanvas(500, 500);
    createButton("reroll").mousePressed(() => {
        seed++;
        noiseScale += 0.0006;
    });
    for (var x = 0; x < 10; ++x) star_pos.push(random() * 500);
    //for(var x = 0; x <10; ++x)
}
var car = {
    x: 0,
    g: 250
}

var cloudBound = {
    w: 10,
    h: 5,
}

var lightColour = {
    lb: 171,
    ub: 204
}


function draw() {
    randomSeed(seed);
    background(0, 0, 139);
    //console.log(random())

    fill(250, 250, 250);
    for (let x = 0; x < width; x++) {
        let noiseVal = noise((x) * noiseScale, height / 2 * noiseScale);
        //stroke(noiseVal*255);
        rect(x, noiseVal * 800, x, height);
    }

    seed += 0.01;

    //the clouds
    noStroke();
    fill(255, 255, 0);
    ellipse(star_pos[0], 100, random() * cloudBound.w, random() * cloudBound.h);
    ellipse(star_pos[1], 180, random() * cloudBound.w, random() * cloudBound.h);
    ellipse(star_pos[2], 200, noise(seed) * cloudBound.w, noise(seed) * cloudBound.h);
    ellipse(star_pos[3], 50, random() * cloudBound.w, random() * cloudBound.h);
    ellipse(star_pos[4], 80, noise(seed) * cloudBound.w, noise(seed) * cloudBound.h);
    ellipse(star_pos[5], 110, noise(seed) * cloudBound.w, noise(seed) * cloudBound.h);
    ellipse(star_pos[6], 45, random() * cloudBound.w, random() * cloudBound.h);
    ellipse(star_pos[7], 89, noise(seed) * cloudBound.w, noise(seed) * cloudBound.h);
    ellipse(star_pos[8], 125, random() * cloudBound.w, random() * cloudBound.h);
    ellipse(star_pos[9], 180, noise(seed) * cloudBound.w, noise(seed) * cloudBound.h);

    //ground
    fill(181, 101, 30)
    rect(0, height / 2 + 50, width, 250);

    // Grayscale integer value
    strokeWeight(3);
    stroke(51);

    //car body
    fill(250, car.g, 250);
    rect(mouseX, height / 2, 100, 63, 35, 60, 15, 10);

    //window
    fill(150);
    rect(mouseX + 60, height / 2 + 25, 20, 10, 30); // window-front

    //wheels
    fill(50)
    circle(mouseX + 12, height / 2 + 60, 30)
    circle(mouseX + 85, height / 2 + 60, 30)
}