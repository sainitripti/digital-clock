
function clock(){
	const date= new Date();
	var hh= date.getHours();
	var mm= date.getMinutes();
	var ss= date.getSeconds();
	if(hh<10)
		hh="0"+hh;
	if(mm<10)
		mm="0"+mm;
	if(ss<10)
		ss="0"+ss;
	document.getElementById('hours').innerHTML=hh;
	document.getElementById('minutes').innerHTML=" : "+mm;
	document.getElementById('seconds').innerHTML=" : "+ss;
}

setInterval(clock,100);