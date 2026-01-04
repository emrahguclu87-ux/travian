var timers = new Object();
  function Timer(){  
	  for( var i=1;;i++)
	  {
		var my_timer = document.getElementById("my_timer"+i);
		var my_timer_text = document.getElementById("my_timer_text"+i);
		if(my_timer!=null)
		{
			timers[i] = new Object();
			timers[i].timer = my_timer;		
			timers[i].timer_text = my_timer_text;		
		}
		else{
			break;
		}
	}
	startTimer();
  }
  
  function startTimer() {
	  
	for(var i in timers) {
    var time = timers[i].timer.innerHTML;
	var timer_text = timers[i].timer_text.innerHTML;
	time--;
    timers[i].timer.innerHTML = time;
	timers[i].timer_text.innerHTML = stringFromTime(time);
	}
	setTimeout(startTimer, 1000);
	
  }
  function stringFromTime(time) {
	 if(time <= 0){
		  time = 0-time;
	      var result;
		  var month = Math.floor(time/(3600*24*30));
		  var weeks = Math.floor(time/(3600*24*7));
	      var days = Math.floor(time/(3600*24));
		  var hours = Math.floor(time/(3600));
		  var minutes = Math.floor(time/(60));
		  var seconds = time;
		  
		if (month >= 1) {
			result = " " + month;
		}
		else if(weeks >= 1) {
			if(weeks == 1) {
				result = " " + weeks;
			}
			else {
				result = " " + weeks;
			}
		}
		else if(days >= 1) {
			if(days == 1) {
				result = " " + days;
			}
			else {
				result = " " + days;
			}
			
		}
		else if(hours >=1) {
			if(hours == 1) {
				result = " " + hours;
			}
			else {
				result = " " + hours;
			}
		}
		else if(minutes >=1) {
			if(minutes == 1) {
				result = " " + minutes;
			}
			else {
				result = " " + minutes;
			}
		}
		else {
			if(time == 1) {
				result = " " + time;
			}
			else {
				result = " " + time;
			}
		}
	}
	
	else if (time >0){
		var hours = Math.floor(time/(3600));
		var minutes = Math.floor((time - hours*3600)/60);
		var seconds = Math.floor(time - hours*3600 - minutes*60);
		if(hours < 10) {
			hours = "0" + hours;
		}
		if(minutes < 10) {
			minutes = "0" + minutes;
		}
		if(seconds < 10) {
			seconds = "0" + seconds;
		}
		result = hours+":"+minutes+":"+seconds;
	}

	return result;  
	}
		
