

// when the document is loaded, trigger the "documentLoaded" function
window.addEventListener('DOMContentLoaded', documentLoaded, false);

var startTime;
var limit;
var temp;

function documentLoaded() {
  "use strict";
  console.log("Document is successffully loaded");
  // listen for mouse clicks on the button
  document.getElementById("txtTempo").addEventListener("keydown", startTimer, false);
}

function startTimer(){
  console.log("inside start timer");
txtTempo.addEventListener("keydown", function keydown(evt){
  // 13 is the code for ENTER
  if (evt.keyCode === 13) {
    console.log("focus gets to next text box");
    txtTempo2.focus();
    //botaoClicked();
    // its important to remove the keydown listener, otherwise in a subsequent edit
    // we will end up with several keydown listeners running
    txtTempo.removeEventListener("keydown", keydown);
  }
});


  txtTempo2.addEventListener("keydown", function keydown(evt){
    // 13 is the code for ENTER
    if (evt.keyCode === 13) {
      botaoClicked();
      // its important to remove the keydown listener, otherwise in a subsequent edit
      // we will end up with several keydown listeners running
      txtTempo2.removeEventListener("keydown", keydown);
    }
});
}



// when we click on the button, we save the current time, and the time limit. We then
// create a timer to execute the "updateTime" function once a second.
function botaoClicked() {
  "use strict";

  console.log("key pressed");

  startTime = new Date();

  limit = parseInt(document.getElementById("txtTempo").value);

  clearInterval(temp);
  temp = setInterval(updateTime, 1000);
}

function updateTime() {
  "use strict";

  // read the current time
  var currentTime = new Date();

  // calculate how many seconds passed since the start of the timer
 var elapsed = ((currentTime.getTime()) - (startTime.getTime())) / 1000;
  // convert seconds to minutes and seconds (below 60)
  var minutos = Math.floor(elapsed / 60);
  var segundos = Math.floor(elapsed % 60);


  // pad with zeroes on the left to look better
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  // show the elapsed time
  document.getElementById("clock").innerHTML = minutos + ":" + segundos;

  // check if we are above the time limit and set the color of the timer accordingly
  if (minutos >= limit) {
    document.getElementById("clock").className = "red";
  } else {
    document.getElementById("clock").className = "blue";
  }

}