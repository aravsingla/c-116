noseX=0
noseY=0
 function preLoad(){
clown_nose=loadImage('https://i.postimg.cc/KY2bgTzk/clone-nose.jpg');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
  video=createCapture(VIDEO);
 video.size(300,300);
 video.hide();

 poseNet=ml5.poseNet(video, modelLoded);
 poseNet.on('pose', gotPoses);
}
function modelLoded(){
    console.log('PoseNet Is InitiaLized');
}
function draw(){
 image(video,0,0,300,300);
fill(255,0,0);
stroke(250,0,0);
circle(noseX,noseY,20);
image(clown_nose,noseX,noseY,30,30);
}
function take_snapshot(){
save('myFilterImage.png');
}
function gotPoses(results) {
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-5;
        noseY=results[0].pose.nose.y-5;
        console.log(" nose x= " +noseX);
        console.log(" nose y= " +noseY);
    }
    
}