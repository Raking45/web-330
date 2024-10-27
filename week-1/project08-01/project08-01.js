"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Robert King
      Date:   October 27, 2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

// Constructor Function for timer Object with minutes, seconds, and timeID
function timer(min, sec) {
      this.minutes = min;
      this.seconds = sec;
      this.timeID = null;
}

// Method to Start or Pause the Timer
timer.prototype.runPause = function(timer, minBox, secBox) {
      if (timer.timeID) {
            // Pause the Timer 
            window.clearInterval(timer.timeID);
            timer.timeID = null;
      } else {
            // Start the Countdown 
            timer.timeID = window.setInterval(countdown, 1000);
      }

      // Countdown function (Updates timer Every Second)
      function countdown() {
            if(timer.seconds > 0) {
                  // Decrease seconds if more than 0
                  timer.seconds--;
            } else if (timer.minutes > 0) {
                  // If no seconds left, decrease minutes and reset seconds to 59
                  timer.seconds = 59;
                  timer.minutes--;
            } else {
                  // Timer Complete
                  window.clearInterval(timer.timeID);
                  timer.timeID = null
            }
            // Update Display Values
            minBox.value = timer.minutes;
            secBox.value = timer.seconds;
      }
}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// Instance of Timer Object
let myTimer = new timer(minBox.value, secBox.value);

// onchange Event Handler for minBox 
minBox.onchange = function() {
      myTimer.minutes = minBox.value;
}
// onchange Event Handler for secBox 
secBox.onchange = function() {
      myTimer.seconds = secBox.value;
}
// onclick Event Handler for runPauseTimer Button
runPauseTimer.onclick = function() {
      myTimer.runPause(myTimer, minBox, secBox);
}