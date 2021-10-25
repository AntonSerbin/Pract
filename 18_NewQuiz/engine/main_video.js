let pauseCounter = false;
let startTimer=false;
let sec = tasks[0].duration;
let endTime=false;
let currentTask=0;
let backButtonPressed =false;
let stopMinusSecond = false;
let startedAdditionalTimer = false;
let statusAnswer = false;
if (typeof(lang)!="string") lang="rus";
let needAdditionaTimer;

const buttonCloseRules =document.querySelector(".buttonMenuRules");
const rulesTotallWindow = document.querySelector("#rulesTotallWindow");
const parrent = document.querySelector(".parrent");
const timerTable = document.querySelector(".timerTable");
const buttonPause = document.querySelector("#buttonPause");
const buttonPauseImage = document.querySelector("#buttonPauseImage");
const buttonBackTask = document.querySelector("#buttonBackTask");
const buttonForwardTask = document.querySelector("#buttonForwardTask");
const finalTotalWindow =document.querySelector("#finalTotalWindow");
const numberOfTaskP = document.querySelector("#numberOfTaskP");
const buttonAnswers = document.querySelector("#buttonAnswers");
const buttonRestart = document.querySelector("#buttonRestart");

const buttonAnswersHidden = document.querySelector("#buttonAnswersHidden");
const textFinalWindow = document.querySelector("#textFinalWindow");
const header = document.querySelector("header");
let indicatorRepeatTasks = false;

//кнопка ПОВТОР
buttonRestart.addEventListener("click",()=>{

	startTimer = false; endTime=false;
	currentTask=0;
	header.classList.add("headerMainTask");
	rulesTotallWindow.style.visibility="hidden"; //убираем окно с правилами
	finalTotalWindow.style.visibility="hidden";
	parrent.style.visibility = "visible";
	indicatorRepeatTasks =true; //убрать секунды доп времени после каждого уровня
	pauseCounter=false;
	video = setVideo(tasks[0].video);
	if(startedAdditionalTimer) stopMinusSecond=true;
	startTask();
});

//кнопка на выход в главное меню
document.querySelector("#headerLogo").addEventListener("click",()=>history.back())

buttonCloseRules.addEventListener("click",()=>{
	if (tasks[0].duration>0) {
		buttonCloseRules.innerHTML="СТАРТ";
		setTimeout(()=>startTask(),500);
		} 
		else {
			buttonCloseRules.innerHTML="Loading...Try agian";
			setTimeout(()=>buttonCloseRules.innerHTML="СТАРТ",3000);
		};
});
buttonAnswersHidden.addEventListener("click", ()=>startAnswers());
buttonAnswers.addEventListener("click", ()=>{
	if(startedAdditionalTimer) stopMinusSecond=true;
	startAnswers();
});
document.querySelector("head").innerHTML+=`<link rel="prerender" id="prerenderMP4" href="${tasks[currentTask].video}.mp4">`;
document.querySelector("head").innerHTML+=`<link rel="prerender" id="prerenderAVI"href="${tasks[currentTask].video}.avi">`;

function startTask() {
		statusAnswer = false;
	saveLocalData({taskName:true});//записываем в локал
	header.classList.add("headerMainTask");
	// buttonAnswersHidden.style.display = "block"; //показываем клавишу ОТВЕТЫ
	rulesTotallWindow.style.visibility="hidden"; //убираем окно с правилами
	parrent.style.visibility = "visible"; //показываем блок с уровнями
	pauseCounter=false;
	taskOrAnswer = "secTask"; //устанавливаем переменную ответы или вопросы
		// console.log("taskOrAnswer",taskOrAnswer, "new");
	if (tasks[0].secTask>0)  tasks[0].duration = tasks[0].secTask; //проверяем, задано ли искусствено время задания
	if (!tasks[0].taskOrAnswer) sec=tasks[0].duration 
		else sec = tasks[0].taskOrAnswer;
	video = setVideo(tasks[0].video);
	//старт таймера				
	if (startTimer===false) {
		startTimer=true;
		numberOfTaskP.innerHTML=`№${currentTask+1}/${tasks.length}`;
		if (typeof(sec)=="NaN") sec=18;
		if (tasks[currentTask].formatAnswer!=undefined) numberOfTaskP.innerHTML+=`<br>${tasks[currentTask].formatAnswer}`;
		if (tasks[currentTask].timerAfter) needAdditionaTimer=true
			else needAdditionaTimer=false;
		minusSecond(taskOrAnswer);
	}
};


function startAnswers(){
	startTimer = false; endTime=false;
	statusAnswer = true;
	currentTask=0;	
	header.classList.add("headerMainTask");
	rulesTotallWindow.style.visibility="hidden"; //убираем окно с правилами
	finalTotalWindow.style.visibility="hidden";
	parrent.style.visibility = "visible";
	numberOfTaskP.innerHTML=`№${currentTask+1}/${tasks.length}<br>Ответ: ${tasks[currentTask].answer}`;
	pauseCounter=false;
	if (tasks[0].videoAnswer) video = setVideo(tasks[0].videoAnswer); //если есть второй клип с ответом устанавливаем его
	if (!tasks[0].videoAnswer) video = setVideo(tasks[0].video); //если есть второй клип с ответом устанавливаем его
	taskOrAnswer = "secAnswer";

	//старт таймера ответы
	if (startTimer===false) {
		// taskOrAnswer = "secAnswer";
		sec=tasks[0][taskOrAnswer];
		startTimer=true;				
console.log(taskOrAnswer,"доп пауза");
		minusSecond(taskOrAnswer);
	}
}

function minusSecond(taskOrAnswer){
		if (statusAnswer==true) taskOrAnswer="secAnswer";
		startTimer= true;
		if (stopMinusSecond==true) {
			taskOrAnswer = "secAnswer";
			startedAdditionalTimer=false;	
			pauseCounter===false;
			stopMinusSecond=false;
			return};
				
		// if (tasks[currentTask].formatAnswer!=undefined) numberOfTaskP.innerHTML=`<br><br>Формат ответа:<br>${tasks[currentTask].formatAnswer}`;

		if (pauseCounter===true) video.pause();

		if (pauseCounter===false) {
				if (video.paused&&tasks.length>currentTask) video.play();
				timerTable.innerHTML = `${addZero(Math.floor(sec/60))}:${addZero(sec%60)}`;
				if (tasks.length==currentTask) {
					textFinalWindow.innerHTML = `У Вас есть ${sec} секунд, чтоб завершить уровень`;//добавляем счетчик секунд для сбора бланков по центру экрана
					startedAdditionalTimer=true;
				};
				if (!stopMinusSecond) sec-- ;//если не пауза то вычитаем секунду
				
				//включаем дополнительный таймер после задания

				if (sec<=0&&needAdditionaTimer==true&&indicatorRepeatTasks==false&&taskOrAnswer=="secTask") {
					needAdditionaTimer=false;
					sec=tasks[currentTask].timerAfter;
					setTimeout(()=>video =setVideo("./video/timer"),delayBeforeAddtionalTimerForAnswers);
					startedAdditionalTimer=true;

				};
				if (sec<=0) {endTime=true;startedAdditionalTimer=false};

		};

		if (!endTime) setTimeout( ()=>minusSecond(taskOrAnswer),1000);

		//окончиние таймера1
	   	if (endTime) {

			video.pause();
	   		currentTask++;
			endTime=false;
			//если не кончились уровни, проверямем нужна ли доп пауза
			if (tasks.length>currentTask) 
				if (tasks[currentTask].timerAfter) needAdditionaTimer=true
					else needAdditionaTimer=false;

			//собрать бланки
	   		if (tasks.length==currentTask) {
				sec = pauseAfterTask;
	   			timerTable.innerHTML = "";
	   			finalTotalWindow.style.visibility = "visible";
	   			if (parrent.querySelector("video"))  parrent.querySelector("video").remove();
				

				if 	(taskOrAnswer != "secAnswer") textFinalWindow.innerHTML = `У Вас есть ${sec} секунд, чтоб завершить уровень`;
				if 	(taskOrAnswer == "secAnswer") {
		   			currentTask++;
		   			timerTable.innerHTML = "";
		   			startedAdditionalTimer==true;
		   			textFinalWindow.innerHTML = "Для выходна в основное меню нажмите соответсвующую клавишу";

		   			return;
		   			//окончание всего уровня
				};

				setTimeout(()=>minusSecond(taskOrAnswer),1000);
	   		};
	   		if (tasks.length+1==currentTask) {//окончание всего уровня
	   			// finalTotalWindow.style.display = "block";
	   							

	   			parrent.visibility="hidden";
	   			finalTotalWindow.style.visibility = "visible";
	   			timerTable.innerHTML = "";
	   			numberOfTaskP.innerHTML = ``;
	   			textFinalWindow.innerHTML = "Для выходна в основное меню нажмите соответсвующую клавишу.";
		   		// taskOrAnswer = "secAnswer";

	   			return
	   		}; //окончание всего уровня

			if (tasks.length>currentTask) {
				
				video = setVideo(tasks[currentTask].video);
				setTimeout(setOnePreLoadVideo(currentTask+2), 2000);


	if (tasks[currentTask].videoAnswer&&taskOrAnswer=="secAnswer") video = setVideo(tasks[currentTask].videoAnswer); //если есть второй клип с ответом устанавливаем его


				if (tasks[currentTask][taskOrAnswer] == undefined) sec= tasks[currentTask].duration
				 else sec=tasks[currentTask][taskOrAnswer];
				
				if 	(taskOrAnswer == "secAnswer") numberOfTaskP.innerHTML=`№${currentTask+1}/${tasks.length}<br>Ответ: ${tasks[currentTask].answer}`;
				if 	(taskOrAnswer != "secAnswer") numberOfTaskP.innerHTML=`№${currentTask+1}/${tasks.length}`;
				if (tasks[currentTask].formatAnswer!=undefined) numberOfTaskP.innerHTML+=`<br>${tasks[currentTask].formatAnswer}`;

				setTimeout(()=>minusSecond(taskOrAnswer),1000);
				return;
			};

		return;
			// video.pause();

		};

};


//функция добавляет 0 в циферблат при однозначном числе
function addZero (num){ return ('0'+num).slice(-2)};

//Функции загрузки для LocalStorage
const loadLocalData = () => {
  try {
    const loacalData = localStorage.getItem(taskName);
    if (loacalData === null) {
      return undefined;
    }
    return JSON.parse(loacalData);
  } catch (err) {
    return undefined;
  }
};
//Функции сохранения для LocalStorage
const saveLocalData = (data) => {
  try {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem(taskName, dataJSON);
  } catch (err) {
    console.log('save state error: ', err);
  }
};

//добовляем клавишу ответы для второго просмотра
if ((loadLocalData()==undefined)||(loadLocalData().taskName!=true)) {
	buttonAnswersHidden.style.display = "none";
}
//меню управления 


function setPause(){
	  	if (!pauseCounter) {
	  		buttonPauseImage.src = "../engine/play-button.png";
	  		video.pause();	
	  	}
  		else {
  			buttonPauseImage.src = "../engine/pause-button.png";
  			video.play();	
  		};
	    return pauseCounter=!pauseCounter;	
};
//делаем паузу по клику
buttonPause.addEventListener("click",setPause);
//делаем паузу по пробелу
document.addEventListener("keydown", (e)=>{if(e.keyCode == 32) setPause()}, false);
		
function returnTaskButton(){
	  	if (currentTask!=0&&backButtonPressed==false&&endTime==false) {
		  	endTime=true;
	  		currentTask--; 
	  		currentTask--; 		
		};
		if (tasks[currentTask].timerAfter) needAdditionaTimer=true
			else needAdditionaTimer=false;
}

function forwardTaskButton(){
			if (tasks[currentTask].timerAfter) needAdditionaTimer=false;

	if (currentTask+1==tasks.length) {sec=0;console.log('currentTask+1==tasks.length'); return};
	if (currentTask!=tasks.length+1&&sec!=0&&(tasks[currentTask+1].duration!=undefined)) sec=0;
}
	buttonBackTask.addEventListener("click",returnTaskButton);
	buttonForwardTask.addEventListener("click",forwardTaskButton);


// подключаем видео
function setVideo(link) {
if (tasks.length-1 > currentTask) document.querySelector('#prerenderMP4').href=`${tasks[currentTask+1].video}.mp4`;
if (tasks.length-1 > currentTask) document.querySelector('#prerenderAVI').href=`${tasks[currentTask+1].video}.avi`;
  var x = document.createElement("VIDEO");
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src",link+".mp4");
    } else {
      x.setAttribute("src",link+".avi");
    }
 x.setAttribute("autoplay", true);
 x.controls = false;

 if (parrent.querySelector("video")) parrent.querySelector("video").remove();
 parrent.appendChild(x);
 return x;
 // } ;
};

        //функция для предзагрузки видео на экран
        let preLoadVid = document.querySelector("video");
         function preLoadVideos (num=2, link="."){

            for (var i = 1; i <= num; i++) {
              if (i<=9)  i = "0"+i;
              preLoadVid.innerHTML+=`    
              <video controls preload buffered autoplay muted>
              <source src="${link}/video/${i}.mp4" type='video/mp4'>
                </video> `;
            }};
        function setOnePreLoadVideo (number){
        	console.log('start setOnePreLoadVideo');
        	let strInput = `<video controls preload buffered autoplay muted>
              <source src="video/0${number}.mp4" type='video/mp4'>
                </video> `;

              if (number<=9)  number = "0"+number;
              preLoadVid.innerHTML=`<video controls preload buffered autoplay muted>
              <source src="video/${number}.mp4" type='video/mp4'>
                </video> `;

            };