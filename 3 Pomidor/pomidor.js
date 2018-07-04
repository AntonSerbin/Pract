
let sec, min ;
let pauseCounter = false;
let startTimer = false;
let endTime=false;
let tempPauseSec, tempPauseMin;
let restOrWork = "work";


let gong = document.getElementById("myAudio");  gong.volume=0.5;//звук гонга

const restart = document.querySelector("#restart");
const minutesTable = document.querySelector("#minutesTable");
const secondsTable = document.querySelector("#secondsTable");
const timerTable = document.querySelector("#timerTable");

const addRestMinTimer = document.querySelector("#addRestMinTimer");
const minusRestMinTimer = document.querySelector("#minusRestMinTimer");
const addWorkMinTimer = document.querySelector("#addWorkMinTimer");
const minusWorkMinTimer = document.querySelector("#minusWorkMinTimer");

let timerRestValue = document.querySelector("#timerRestValue");
let timerWorkValue = document.querySelector("#timerWorkValue");

let restValue = timerRestValue.innerHTML;
let workValue = timerWorkValue.innerHTML;




//перезапуск программы
restart.addEventListener("click", ()=>{
	// location.reload();
	sec=-1; min=-1;
	restOrWork=="rest"
	setTimeout(()=>{ 
		sec=-1;
		min=-1;
		startTimer= false;
		pauseCounter = false;
		console.log("starttimer", startTimer);},200);
	console.log("starttimerReset", startTimer, min, sec);
	minutesTable.innerHTML = "00";
	secondsTable.innerHTML= "00";

});


//выставление начальных данных
addRestMinTimer.addEventListener("click", ()=>{
	 if (!startTimer) restValue++;
	 console.log("+Rest");
 	 console.log("+startTimer",startTimer);

	 timerRestValue.innerHTML=restValue;
	}
);
minusRestMinTimer.addEventListener("click", ()=>{
	  if (!startTimer&&restValue>0)restValue--;
	 timerRestValue.innerHTML=restValue;
	}
);

addWorkMinTimer.addEventListener("click", ()=>{
	 if (!startTimer) workValue++;
	 timerWorkValue.innerHTML=workValue;
	}
);

minusWorkMinTimer.addEventListener("click", ()=>{
	  if (!startTimer&&workValue>0) workValue--;
	 timerWorkValue.innerHTML=workValue;
	}
);



// пауза таймера
timerTable.addEventListener("click", ()=>{ 
	if (endTime==false&&startTimer==true) {
		switch (pauseCounter) {
			case false:		
				console.log("Pause started", min," ",sec);
				minutesTable.innerHTML = "Pause";
				secondsTable.innerHTML="";
				pauseCounter=true;
				break;
			case true:
				pauseCounter=false; 
				minutesTable.innerHTML = addZero(min);
				secondsTable.innerHTML = addZero(sec);
				console.log("Pause finished", min," ",sec);
				if((sec+min)!=counterPause) {console.log("counterPause false", counterPause,"; " , min," ",sec);};
				if((sec+min)==counterPause) minusSecond();
				break;
		}
	}
});

//старт таймера
timerTable.addEventListener("click", ()=>{
	if ((startTimer===false)&&(restValue>=0)&&(workValue>=0)) {
		restOrWork = "work";
		min = workValue; sec = 0;
		minusSecond();
		console.log("startTimer", startTimer)
	}
});




function minusSecond(){
			startTimer= true;
			console.log("starttimer minusSecond", startTimer);
			counterPause= sec+min;

			if ((sec>=0)&&(pauseCounter===false)) {
				minutesTable.innerHTML = addZero(min);
				secondsTable.innerHTML = addZero(sec);
				sec-- //если не пауза то вычитаем секунду
				if ((sec==-1)&&(pauseCounter===false)) {
					if (min==0) endTime=true
						else {min--;
							sec=59;
						};
				};
			setTimeout(()=>minusSecond(),100);

		   	};
		   	//окончиние таймера1
	   		if (endTime&&restOrWork=="work") {
	   			gong.play();
				min = restValue;
				sec = 00;
				startTimer= false;
				restOrWork = "rest";
				endTime=false;
				timerTable.style.background = "Grey";
			};
		   	//окончиние таймера1
 	   		if (endTime&&restOrWork=="rest") {
 	   			gong.play();
 	   			timerTable.style.background = "LightGray";
 	   		};

	
};
			//функция добавляет 0 в циферблат при однозначном числе
function addZero (num){ return ('0'+num).slice(-2)};
