noseX = 0
noseY = 0


function preload(){
    clown_nose = loadImage('https://i.postimg.cc/1tdLBjC1/images.png')
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture (VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on('pose', gotPoses)
}

function modeloaded() {
    console.log('poseNet is initialized');
}

function gotPoses (results) {
    if (results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}


function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    image(clown_nose, noseX -70, noseY -60, 100, 100);
}

function take_snapshot(){
    save('pennywise.png');
}


