// Target date input formats (1-26-2017) , (Jan 26, 2017) , (1/26/2017) or (1 26 2017))


function countdownTimer(targetDate) {
  
  var remainingTime = Date.parse(targetDate) - Date.now();
  var seconds = parseInt((remainingTime / 1000) % 60);
  var minutes = parseInt((remainingTime / (1000 * 60)) % 60);
  var hours = parseInt((remainingTime / (1000 * 60 * 60)) % 24);
  var days = parseInt(((remainingTime) / (1000 * 60 * 60 * 24)) % 365);
  
  function startTimer() {
    
    if(targetDate === undefined) {
      return "Please enter a valid time";
    }
    //console.log(seconds);
  }
  
  //setInterval(startCountingDown,1000);
}


