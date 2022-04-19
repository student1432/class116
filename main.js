noseX=0;
noseY=0;
function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/Nf6SXG6g/imageedit-7-6577504555.png')
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw()
{
   image(video, 0, 0, 300, 300);
   image(clown_nose, noseX, noseY, 30, 30);
}
function takeSnapshot()
{
    save('myFilterSelfie.png');
}
function modelLoaded()
{
   
    console.log("poseNet Is Working")
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseY = results[0].pose.nose.y;
        noseX = results[0].pose.nose.x - 15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}