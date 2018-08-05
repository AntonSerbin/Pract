let startSecEqual = 5; //кратно каким секундам начинать


let timeTable = document.querySelector("#timeTable");
const parrent= document.querySelector(".parrent"); //поле чтобы останавливать и др счетчик
let gong = document.getElementById("myAudio");  gong.volume=0.05;//звук гонга
let fieldTaskNumber = document.querySelector("#fieldTaskNumber");
let stringTask = document.querySelector("#stringTask");
let taskField = document.querySelector("#taskField");
let quizImage = document.querySelector("#quizImage");
let fieldAnswerFormat = document.querySelector("#fieldAnswerFormat");
let tasksButton = document.querySelector("#tasksButton");
let answersButton = document.querySelector("#answersButton");
const lastPossitionButton =document.querySelector("#lastPossitionButton");
const slowerButton =document.querySelector("#slowerButton");
const pauseButton =document.querySelector("#pauseButton");
const fasterButton =document.querySelector("#fasterButton");
const nextPossitionButton =document.querySelector("#nextPossitionButton");


let pauseCounter = false;
let counterOfTasks = false;
let pauseOfCounter = true;


//пауза перез стартом

function pauseBeforeStart() {
	
	let startSec = new Date;
	console.log("startSec.getSeconds():", startSec.getSeconds());
	console.log("IF", (startSec.getSeconds()%startSecEqual));


	
	if ((pauseOfCounter)&&(startSec.getSeconds()%startSecEqual)==0) {
				pauseOfCounter = false;
				setTimeout(()=>{
					console.log("start");
					CountdownTimer(tasks)
				},parseInt(additionalPause.value*100));
				
		};
	if (pauseOfCounter) {
			setTimeout(()=>pauseBeforeStart(),100);
			setTimeout(()=>stringTask.innerHTML = startSecEqual-startSec.getSeconds()%startSecEqual,parseInt(additionalPause.value));
			;
		};
};



//функция счетчик
function CountdownTimer(arr){
	  	let stepOfTimer = 1000; 
	  	let sec=0;
	  	counterOfTasks = 0;
		console.log("Pause",pauseCounter,"counterOfTasks",counterOfTasks );
		taskField.style = 'display:block';


		//добавляем секунду
		  	function plusSecond(){
		  			let time=0; 
					if (sec>0){
					  	// gong.play();
			  			console.log("Seconds",sec,"stepOfTimer",stepOfTimer/1000,"counterofTasks",counterOfTasks);
				   		setTimeout(()=>plusSecond(),stepOfTimer);
				   		time = `<span class="number-wrapper"><div class="line"></div><span class="number">${addZero(Math.floor(sec/60))}</span></span>`;
				   		time +=`<span class="number-wrapper"><div class="line"></div><span class="number">${addZero(sec%60)}</span></span>`;
				   		timeTable.innerHTML = time;
				   		if (pauseCounter===false) sec-- //если не пауза то вычитаем секунду
				   					else timeTable.innerHTML = "pause"; 
				  		}
					else {
						if (arr[counterOfTasks].pict=="") arr[counterOfTasks].pict=tasks[counterOfTasks].pict;
						if(!arr[counterOfTasks]) {
							taskField.style = 'display:none';
							counterOfTasks=false;
							return};
						fieldTaskNumber.innerHTML = `Задание №${counterOfTasks+1}`;
						quizImage.src = arr[counterOfTasks].pict;
						if (arr[counterOfTasks].sizeTask) stringTask.style.fontSize=arr[counterOfTasks].sizeTask;
						stringTask.innerHTML = arr[counterOfTasks].task;
						if (arr[counterOfTasks].sizeFormatAnswer) fieldAnswerFormat.style.fontSize=arr[counterOfTasks].sizeFormatAnswer;
						fieldAnswerFormat.innerHTML = arr[counterOfTasks].formatAnswer;
						sec=arr[counterOfTasks].sec; 
						// console.log(arr[counterOfTasks], arr[counterOfTasks].pict);
						counterOfTasks++;
						// console.log("Seconds",sec,"stepOfTimer",stepOfTimer/1000,"counterofTasks",counterOfTasks);
						plusSecond();
		   			};
	   		// звук гонга , в блоке условаия: текущее время в которое включится звук  и текущая скорость таймера
	   		if ((sec==16)&&(stepOfTimer>=500)) gong.play(); //запускаем гонг если шаг 1секунда или более
			};
			//функция добавляет 0 в циферблат при однозначном числе
			function addZero (num){ return ('0'+num).slice(-2)};
			//пускаем по кругу таймер
		  	plusSecond();
			

  	//блок для управления временем 

	lastPossitionButton.addEventListener("click",(event)=>
		{event.preventDefault();
		if (counterOfTasks<=1)  return	counterOfTasks=1;
		counterOfTasks = counterOfTasks - 2;	
		return sec=0;
		});
	slowerButton.addEventListener("click",(event)=>
		{event.preventDefault();
		return stepOfTimer=stepOfTimer*2;
		});
	pauseButton.addEventListener("click",()=>{
  		return pauseCounter=!pauseCounter;
		});
	parrent.addEventListener("click",()=>{
  		return pauseCounter=!pauseCounter;
		});
	fasterButton.addEventListener("click",(event)=>
		{event.preventDefault();
		return stepOfTimer=stepOfTimer/2;
		});
	nextPossitionButton.addEventListener("click",(event)=>
		{event.preventDefault();
		return sec=0;
		});
	
}; // конец функции CountdownTimer

//запуск функции задания первый аргумент = массив заданий, второй размер шрифта
tasksButton.addEventListener("click",()=>{
	
	let additionalPause = document.querySelector("#additionalPause");
	additionalPause.setAttribute("type", "hidden");

	if (!counterOfTasks) {
		console.log("start1, ",additionalPause.value);
		setTimeout(()=>pauseBeforeStart(),0);
	}
	else alert("Закончите задания");
});
//запуск функции ответы, первый аргумент = массив заданий, второй размер шрифта
answersButton.addEventListener("click",()=> {
	if (confirm("Ответы уверен?")&&(!counterOfTasks)) CountdownTimer(answers)
});

