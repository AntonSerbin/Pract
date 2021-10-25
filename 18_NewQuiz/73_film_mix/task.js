//задания на уровень
let taskName = "";
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const delayBeforeAddtionalTimerForAnswers=950;

const tasks = [
 	task1 = {task:``,
			// secTask: 45,
			duration: 41,
			video:"./video/01",
			secAnswer:15,
			answer:"Аватар/Особенности национальной охоты",
			timerAfter: 15
},
 	task2 = {task:``,
 			// secTask: 2,
			video:"./video/02",
			secAnswer:15,
			answer:"Человек с бульвара Капуцинов/Звонок",
			timerAfter: 15
},
 	task3 = {task:``,
			// secTask: 5,
			video:"./video/03",
			secAnswer:15,
			answer:"Афоня/Кикбоксер",
			timerAfter: 15
},
 	task4 = {task:``,
			// secTask: 4,
			video:"./video/04",
			secAnswer:15,
			answer:"Бобро пожаловать / Мистер и миссис Смит",
			timerAfter: 15
},
 	task5 = {task:``,
			// secTask: 2,
			video:"./video/05",
			answer:"Выживший / Сталкер (Пикник на обочине)",
			formatAnswer:"Название игры или произведения/ Название фильма ",
			timerAfter: 15
},
 	task6 = {task:``,
			// secTask: 10,
			video:"./video/06",
			secAnswer:15,
			answer:"Мстители / Кавказская пленница",
			timerAfter: 15
},
 	task7 = {task:``,
			// secTask: 10,
			video:"./video/07",
			secAnswer:15,
			answer:"Матрица / Операция «Ы» и другие приключения Шурика",
			timerAfter: 15
},
 	task8 = {task:``,
			// secTask: 15,
			video:"./video/08",
			secAnswer:15,
			answer:"Афоня / Марсианин",
			timerAfter: 15
},
 	task9 = {task:``,
			// secTask:15,
			video:"./video/09",
			secAnswer:15,
			answer:"Мимино / Правдивая ложь",
			timerAfter: 15
},
 	task10 = {task:``,
			// secTask: 15,
			video:"./video/10",
			secAnswer:15,
			answer:"Золотой теленок / Матрица",
			timerAfter: 15
}
]			


function durationVideo(link,idx) {
  var x = document.createElement("VIDEO");
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src",link+".mp4");
    } else {
      x.setAttribute("src",link+".avi");
    }
 x.onloadedmetadata = function() {
	tasks[idx]["duration"]=Math.round(x.duration);
	// console.log(tasks[idx]["duration"]);
 } ;
};

tasks.forEach((item,i)=>{durationVideo(item.video,i)});



tasks.map((e)=>console.log(e.answer))