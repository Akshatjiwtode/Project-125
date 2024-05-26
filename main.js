noseX = 0;
noseY = 0;


function preload(){
    picture = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    
}

function draw(){
    image(video,0,0,500,450);
    image(picture,noseX,noseY,50,50);
}

function setup(){
    canvas = createCanvas(500,450);
    canvas.position(350,350);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(500,450);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model is initialized");
}

function save(){
    save("my_filter_image.png");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 15;
        console.log("Nose X: "+ results[0].pose.nose.x);
        console.log("Nose Y: "+ results[0].pose.nose.y);
    }
}