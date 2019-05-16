let sec = document.querySelector(".seconds");
let min = document.querySelector(".minutes");

function setTime() {

const currentTime = new Date;
let seconds = currentTime.getSeconds();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();

// if (seconds==0) secLine.classList.remove("transition");
// if (seconds==1) secLine.classList.add("transition");
// if (minutes==0) minLine.classList.remove("transition");
// if (minutes==1) minLine.classList.add("transition");
// if (hours==0) hourLine.classList.remove("transition");
// if (hours==1) hourLine.classList.add("transition");

// secLine.style.transform = `rotate(${secondAngle}deg)`;
// minLine.style.transform = `rotate(${minuteAngle}deg)`;
// hourLine.style.transform = `rotate(${hourAngle}deg)`;
console.log(seconds, minutes, hours);
console.log(currentTime);

};

// function changeData(){
// 	console.log(this.value, this.name);
// 	document.documentElement.style.setProperty(`--${this.name}`, this.value);
// };


// const inputs = document.querySelectorAll(".footer input");
// inputs.forEach(input=>input.addEventListener("change", changeData));

setInterval(()=>setTime(), 1000);
// setInterval(function(){ alert("Hello"); }, 3000);
