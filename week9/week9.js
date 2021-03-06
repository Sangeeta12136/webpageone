//array
var FloridaBeaches = [
	'Clear Water Beach',
	'Miami Beach',
	'Siesta Key Beach',
	'Daytona Beach',
	'Honeymoon Beach',
	'South Beach',
	'Pensacola Beach',
	
]

//pull random from array
function process() {
	var randomNumber = Math.floor(Math.random() * (FloridaBeaches.length));
	document.getElementById('display').innerHTML = FloridaBeaches[randomNumber];
}

//date
function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}

//time
function startTime() {
	var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  	if(h==0) {
    h=12;
  	}
    
    document.getElementById('time').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}