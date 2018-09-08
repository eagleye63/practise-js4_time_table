//var today=document.getElementById('today').innerHTML='today is monday';
/*
today.addEventListener('onload',todayname);
function todayname(){
		today.innerHTML='today is monday';
} */
var alldays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
findday();
//document.getElementById("todayday").innerHTML = alldays[d.getDay()];
function findday() {
if(d.getDay()==1) {
var findtoday=document.getElementById('monday').style.display="block";
document.getElementById('monbtn').style.background="#0000cc";

}
if(d.getDay()==2) {
var findtoday=document.getElementById('tuseday').style.display="block";
document.getElementById('tusebtn').style.background="#0000cc";
}
if(d.getDay()==3){
var findtoday=document.getElementById('wednesday').style.display="block";
document.getElementById('wednesbtn').style.background="#0000cc";
}
if(d.getDay()==4){
var findtoday=document.getElementById('thursday').style.display="block";
document.getElementById('thursbtn').style.background="#0000cc";
}
if(d.getDay()==5){
var findtoday=document.getElementById('friday').style.display="block";
document.getElementById('fribtn').style.background="#0000cc";
}
}

var monclick=document.getElementById('monbtn').addEventListener("click",()=>{
	hideotherday();
	var findtodaybtn=document.getElementById('monday').style.display="block";
	document.getElementById('monheading').innerHTML='Lecture of Monday';
  });
var monclick=document.getElementById('tusebtn').addEventListener("click",()=>{
	hideotherday();
	var findtodaybtn=document.getElementById('tuseday').style.display="block";
	document.getElementById('tuseheading').innerHTML='Lecture of Tuseday';
  });
var monclick=document.getElementById('wednesbtn').addEventListener("click",()=>{
	hideotherday();
	var findtodaybtn=document.getElementById('wednesday').style.display="block";
	document.getElementById('wednesheading').innerHTML='Lecture of Wednesday';
  });
var monclick=document.getElementById('thursbtn').addEventListener("click",()=>{
	hideotherday();
	var findtodaybtn=document.getElementById('thursday').style.display="block";
	document.getElementById('thursheading').innerHTML='Lecture of Thursday';
  });
var monclick=document.getElementById('fribtn').addEventListener("click",()=>{
	hideotherday();
	var findtodaybtn=document.getElementById('friday').style.display="block";
	document.getElementById('friheading').innerHTML='Lecture of Friday';
  });
function hideotherday(){
	document.getElementById('monday').style.display="none";
	document.getElementById('tuseday').style.display="none";
	document.getElementById('wednesday').style.display="none";
	document.getElementById('thursday').style.display="none";
	document.getElementById('friday').style.display="none";

}



