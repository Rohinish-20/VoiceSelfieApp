var speech_recognition = window.webkitSpeechRecognition;

var recognition = new speech_recognition();

function start()
{
 document.getElementById("textbox").innerHTML= "";
 recognition.start();
}

recognition.onresult = function(event)
{
 console.log(event);

 var content = event.results[0][0].transcript;
 document.getElementById("textbox").innerHTML = content;
 console.log(content);

 if(content == "take my selfie")
 {
  console.log("taking selfie in 5 seconds");
  speak();
 }
}

function speak()
{
 var synth = window.speechSynthesis;

 speak_data = "Take your Selfie in 5 seconds";

 var utterThis = new SpeechSynthesisUtterance(speak_data);

 synth.speak(utterThis);

 Webcam.attach(camera);

 setTimeout(function(){
  take_selfie();
  save();
 },5000);
}

camera = document.getElementById("camera");

Webcam.set({
 width: 360,
 height: 250,
 image_format: "jpg",
 jpg_quality: 100
});

function take_selfie()
{
 Webcam.snap(function(data_uri){
 document.getElementById("result").innerHTML = '<img id="photo" src="'+data_uri+'"/>';
 });
}

function save()
{
 download = document.getElementById("link");
 captured_image = document.getElementById("photo").src;
 download.href = captured_image;
 download.click();
}