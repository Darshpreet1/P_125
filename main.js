    noseX = "";
    noseY = "";

    function preload(){
        img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    }
    
    function setup(){
        Canvas = createCanvas(300,300);
        Canvas.center();
        video = createCapture(VIDEO);
        video.hide();
        posenet = ml5.poseNet(video ,modelloded);
        posenet.on("pose",Gotposes);
    }
    
    function draw(){
        image(video,0,0,300,300);
        image(img,noseX,noseY,40,20);
    }
    
    function take_snapshot(){
        save("filtered_image.jpg");
    }

    function modelloded(){
        console.log("modelloded");
    }

    function Gotposes(resultes)
    {
        if(resultes.length >0){
            console.log("poseNet is working");
            console.log(resultes)
            noseX = resultes[0].pose.nose.x;
            noseY = resultes[0].pose.nose.y;
            console.log("nose x = "+noseX);
            console.log("nose y = "+noseY);
        }
    }