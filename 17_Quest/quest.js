let secHTML = document.querySelector(".seconds");
let minHTML = document.querySelector(".minutes");
let numberOfTaskHTML = document.querySelector("#numberOfTask");
let textTaskHTML = document.querySelector("#textTask");
let inputAnswerHTML=document.querySelector("#inputAnswer");
let buttonAnswer = document.querySelector("#buttonAnswer");
let nameTeamHTML = document.querySelector("#nameTeam");
let totalSumGameSec = 0;
let currentSecTask;

//новое задание
function nextTask(number){
	console.log("tasks.length",tasks.length, "number", number);
	if (numberOfTask==0) numberOfTaskHTML.innerHTML = `Вводное`; // для вводного задания
	if (numberOfTask==tasks.length) numberOfTaskHTML.innerHTML = `Финиш` // для финишного задания
	else numberOfTaskHTML.innerHTML = `${numberOfTask}/(${tasks.length-1})`; //показывает какой уровнь из скольки
	
	//финишный результат
	if (numberOfTask==tasks.length) 
	{
		textTask.innerHTML = `Ваш результат - 
		${Math.floor(totalSumGameSec/60)}мин ${("0"+(totalSumGameSec-Math.floor(totalSumGameSec/60)*60)).slice(-2)} секунд`;
		return;
	}
	else
	{
	textTaskHTML.innerHTML = tasks[number].task;
	timer(currentSecTask, number ); //запускаем новый таймер; передаем секунды которые надо отсчитывать(взяти или из базы или из локала) и номер уровня, чтоб прерывать таймер
	};
}

//таймер вычитающий секунду, берет время из plot.js и текущего номера задания
function timer(sec, numberTaskInFunc){ 
	if (numberTaskInFunc!=numberOfTask) return; //если был правильный ответ - выходить из функции
	if (sec>=0) {
		minHTML.innerHTML = ("0"+(Math.floor(sec/60))).slice(-2); //слайсом добавляем 0 если требуется
		secHTML.innerHTML = ("0"+(sec-Math.floor(sec/60)*60)).slice(-2);
		sec-- //вычитаем секунду
		currentSecTask = sec;
		if (numberOfTask!=0) {
			totalSumGameSec++; //считаем общее время
			saveLocalData({  //записываем локал
					"name":nameTeam,
					"level":numberOfTask,
					"totalTimeLocal":totalSumGameSec,
					"currentSec":currentSecTask
				});
		};
	}
	if (sec==-1) {
		console.log("Текущие секунды",sec,"Номер задания при переходе", numberOfTask);
		numberOfTask++; //следующий уровень
		if (tasks[numberOfTask]) currentSecTask = tasks[numberOfTask].period_task; //добавляем секунды на следующий уровень, чтоб не было 0

			saveLocalData({
					"name":nameTeam,
					"level":numberOfTask,
					"totalTimeLocal":totalSumGameSec,
					"currentSec":currentSecTask
			});
		nextTask(numberOfTask);
		console.log("выключаем таймер", numberTaskInFunc);
		return; //выходим из цикла, чтоб не было нескольких таймеров
		};
	setTimeout(()=>timer(sec,numberTaskInFunc),1000);
};


//Функции загрузки для LocalStorage
const loadLocalData = () => {
  try {
    const loacalData = localStorage.getItem('Quest');
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
    localStorage.setItem('Quest', dataJSON);
  } catch (err) {
    console.log('save state error: ', err);
  }
};


let numberOfTask = -1;//придумываем название команды, 0 задание - вводное

//конпка ОК перключает задания и даёт название команде
buttonAnswer.addEventListener("click",()=>{ 
	
	//сброс локала reset
	if (inputAnswerHTML.value.toUpperCase()=="RESET") {
		saveLocalData({name:"RESET"});
		location.reload();
	};


	//загружаем локал, или даём название комнаде и стартуем
	if (numberOfTask==-1) {
		console.log("local: ", loadLocalData());
		nameTeam = inputAnswerHTML.value; //если в первый раз - записываем название
		

		if ((loadLocalData()==undefined)||(loadLocalData().name=="RESET")) {
			saveLocalData({"name":nameTeam,"level":0,"totalTimeLocal":0,"currentSec":tasks[0].period_task});
			console.log(loadLocalData());
			numberOfTask=0;
			console.log("запускаем задание 0", numberOfTask);
			nameTeam = inputAnswerHTML.value; //если в первый раз - записываем название
			currentSecTask = tasks[numberOfTask].period_task;
		}
		else
			{
			nameTeam = loadLocalData().name;
			numberOfTask = 	loadLocalData().level;
			totalSumGameSec = loadLocalData().totalTimeLocal;
			currentSecTask = loadLocalData().currentSec;
			}	

		nameTeamHTML.innerHTML = nameTeam; //выводим название на экран

		console.log("название команд в локале", loadLocalData().name);
		console.log("local after: ", loadLocalData());

		nextTask(numberOfTask);
	};

	// проверяем правльный ответ
	if ((numberOfTask>=0)&&(numberOfTask<=tasks.length)&&(tasks[numberOfTask].answer.toUpperCase()==inputAnswerHTML.value.toUpperCase())) 
	{
		numberOfTask++; //следующее задание
		if (tasks.length>numberOfTask) currentSecTask=tasks[numberOfTask].period_task; //для локала секунды текущего задания ставновятся согласно заданий
		saveLocalData({ //записываем в локал
			"name":nameTeam,
			"level":numberOfTask,
			"totalTimeLocal":totalSumGameSec,
			"currentSec":currentSecTask});
		nextTask(numberOfTask); //запускаем новое задание
	};

}
);