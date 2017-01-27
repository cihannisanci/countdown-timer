function countdownTimer(endTime) {

  var counter;
  var remainingTime;
  var seconds;
  var minutes;
  var hours;
  var days;

  if(!endTime) {
    return;
  }

  function displayTimer() {
    var displayDay = document.getElementsByClassName('days')[0];
    var displayHour = document.getElementsByClassName('hours')[0];
    var displayMinutes = document.getElementsByClassName('minutes')[0];
    var displaySecond = document.getElementsByClassName('seconds')[0];

    function startTimer() {
      remainingTime = Date.parse(endTime) - Date.now();
      seconds = parseInt((remainingTime / 1000) % 60);
      minutes = parseInt((remainingTime / (1000 * 60)) % 60);
      hours = parseInt((remainingTime / (1000 * 60 * 60)) % 24);
      days = parseInt(((remainingTime) / (1000 * 60 * 60 * 24)) % 365);

      if(remainingTime <= 0) {
        clearInterval(counter);
      }
   
      displayDay.innerHTML = days;
      displayHour.innerHTML = hours;
      displayMinutes.innerHTML = minutes;
      displaySecond.innerHTML = seconds;  
    }
    startTimer();
    counter = setInterval(startTimer,1000);
  }
  displayTimer();
}


function getDeadline() {
  var deadline = document.getElementsByClassName('date-input')[0].value;

  countdownTimer(deadline);
  resetForm();                     
}

function resetForm() {  
  document.getElementsByClassName("my-form")[0].reset();
}

function resetTimer() {
  window.location.reload();
}
