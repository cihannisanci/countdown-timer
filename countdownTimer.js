function countDownTimer(targetDate) {
  
  function startTimer() {
    
    var remainingTime = Date.parse(targetDate) - Date.now();
    var seconds = parseInt((remainingTime / 1000) % 60);
    var minutes = parseInt((remainingTime / (1000 * 60)) % 60);
    var hours = parseInt((remainingTime / (1000 * 60 * 60)) % 24);
    var days = parseInt(((remainingTime) / (1000 * 60 * 60 * 24)) % 365);
    
    if(targetDate === undefined) {
      return "Please enter a valid time";
    }
    
    if(remainingTime <= 0) {
      clearInterval(counter);
      return 'Time is up!';
      
    }
    console.log(seconds,remainingTime);
  }
  
  var counter = setInterval(startTimer,1000);
}

