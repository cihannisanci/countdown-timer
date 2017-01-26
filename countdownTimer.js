// target date formats (1-26-2017) , (Jan 26, 2017) , (1/26/2017) )


function calculateRemainingTime(targetDate) {
  
  var timeDifference = Date.parse(targetDate) - Date.now();
  
  var seconds = parseInt((timeDifference / 1000) % 60);
  var minutes = parseInt((timeDifference / (1000 * 60)) % 60);
  var hours = parseInt((timeDifference / (1000 * 60 * 60)) % 24);
  var days = parseInt(((timeDifference) / (1000 * 60 * 60 * 24)) % 365);
  var timeRemaining = {'seconds':seconds, 'minutes':minutes, 'hours':hours, 'days':days};
  
  if(targetDate === undefined) {
    return "Please enter a valid time";
  }
  return timeRemaining;
}
