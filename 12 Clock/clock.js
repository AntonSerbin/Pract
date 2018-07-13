let secLine = document.querySelector(".secLine");
let minLine = document.querySelector(".minLine");
let hourLine = document.querySelector(".hourLine");


function setTime() {

const currentTime = new Date;
let seconds = currentTime.getSeconds();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();
let secondAngle= 360/60*seconds-90;
let minuteAngle= 360/60*minutes-90;
let hourAngle= 360/12*hours-90;
if (seconds==0) secLine.classList.remove("transition");
if (seconds==1) secLine.classList.add("transition");
if (minutes==0) minLine.classList.remove("transition");
if (minutes==1) minLine.classList.add("transition");
if (hours==0) hourLine.classList.remove("transition");
if (hours==1) hourLine.classList.add("transition");

secLine.style.transform = `rotate(${secondAngle}deg)`;
minLine.style.transform = `rotate(${minuteAngle}deg)`;
hourLine.style.transform = `rotate(${hourAngle}deg)`;
// console.log(seconds, minutes, hours);

};

function changeData(){
	// console.log(this.value, this.name);
	document.documentElement.style.setProperty(`--${this.name}`, this.value);
};


const inputs = document.querySelectorAll(".footer input");
inputs.forEach(input=>input.addEventListener("change", changeData))

setInterval(setTime, 1000);