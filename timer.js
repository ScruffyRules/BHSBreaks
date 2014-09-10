function calculate() {
	var time=new Date();

	var h=time.getHours();
	var m=time.getMinutes();
	var s=time.getSeconds();

	var cday=time.getDay();
	var ctime = h.toString() + m.toString();

	var breaks = ["1:1125", "1:1315", "1:1520", "2:1045", "2:1255", "2:1520", "3:1045", "3:1255", "3:1520", "4:1045", "4:1255", "4:1520", "5:1125", "5:1315", "5:1520"];

	var out;

	var todaysbreaks = [];

	for (i = 0; i < breaks.length; i++) { 
		var aday = breaks[i].slice(0, 1);
		var atime = breaks[i].slice(-4);
		//adds todays breaks to the list
		if(aday == cday){
			todaysbreaks[todaysbreaks.length] = atime;
		}
	}

	if((h < 9) || (h > 15)){//Schools over
		out = "Go home!";
	} else if(ctime == 6 || ctime == 0){
		out = "Umm, weekend!";
	} else {
		out = "3rr0r";
		for (i = 0; i < todaysbreaks.length; i++) {
			if (ctime < todaysbreaks[i]) {
				out = todaysbreaks[i];
			} 
		}
	}
	console.log(ctime);
	document.getElementById('time').innerHTML = "<h1 id='time'>"+out+"</h1>";
	//var t = setTimeout(function(){calculate()},500);
}
