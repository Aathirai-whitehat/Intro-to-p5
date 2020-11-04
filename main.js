function preload(){

}

function setup(){
    canvas=createCanvas(600,600);
    canvas.position(200,200);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,600);
}

function take_snapshot(){
    save("aathirai.png");
}
