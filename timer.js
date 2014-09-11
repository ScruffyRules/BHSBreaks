function calculate() {
	var time=new Date();

	var h=time.getHours();
	var m=time.getMinutes();
	var s=time.getSeconds();

	var cday=time.getDay();
	var ctime = h.toString() + m.toString();

	var breaks = ["1;11:25", "1;13:15", "1;15:20", "2;10:45", "2;12:55", "2;15:20", "3;10:45", "3;12:55", "3;15:20", "4;10:45", "4;12:55", "4;15:20", "5;11:25", "5;13:15", "5;15:20"];

	var out;

	var todaysbreaks = [];

	for (i = 0; i < breaks.length; i++) { 
		var aday = breaks[i].split(";")[0];
		var atime = breaks[i].split(";")[1].replace(":", "");
		//adds todays breaks to the list
		if(aday == cday){
			todaysbreaks[todaysbreaks.length] = atime;
		}
	}

	if((h < 9) || (h > 15)){//Schools over
		out = "Go home!";
	} else if(cday == 6 || cday == 0){
		out = "Umm, weekend!";
	} else {
		out = "3rr0r";
		for (i = 0; i < todaysbreaks.length; i++) {
			if (ctime < todaysbreaks[i]) {
				out = todaysbreaks[i];
				break;
			} 
		}
	}
	
	var d2 = new Date();
	d2.setMinutes(parseInt(out.slice(2)));
	d2.setHours(parseInt(out.slice(0,2)));
	var minutes = parseInt((d2-time)/(60*1000));
	var hours = parseInt((d2-time)/(3600*1000));
	if (minutes.toString().length == 1) {minutes = "0" + minutes;}
	if (hours.toString().length == 1) {hours = "0" + hours;}
	document.getElementById('time').innerHTML = "<h1 id='time'>"+hours+":"+minutes+"</h1>";
	//var t = setTimeout(function(){calculate()},500);
}
