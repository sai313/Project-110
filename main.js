//https://teachablemachine.withgoogle.com/models/dP1ZN6uv-/

Webcam.set({
    width: 360,
    height: 350,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("snapshot").innerHTML = '<img id="snap" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dP1ZN6uv-/model.json",modelLoaded);

function modelLoaded() {
    console.log("model has loaded");
}

function check() {
    img = document.getElementById("snap");
    classifier.classify(img,gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object").innerHTML = results[0].label;
        gesture = results[0].label;
        if (gesture == "Amazing") {
            document.getElementById("result_gesture").innerHTML = "&#128076";
        } else if (gesture == "Best") {
            document.getElementById("result_gesture").innerHTML = "&#128077;";
        } else if (gesture == "Victory") {
            document.getElementById("result_gesture").innerHTML = "&#9996;";
        }
    }
}