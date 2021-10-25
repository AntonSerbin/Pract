//задания на уровень
let taskName = "";
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const delayBeforeAddtionalTimerForAnswers=950;

const tasks = [
 	task1 = {task:``,
			// secTask: 2,
			duration: 0,
			video:"./video/01",
			secAnswer:12,
			answer:"Новые приключения Шурика / Волк с УоллСтрит",
			timerAfter: 15

},
 	task2 = {task:``,
 			// secTask: 2,
			video:"./video/02",
			secAnswer:12,
			answer:"Джентльмены удачи / Убить Билла",
			timerAfter: 15
},
 	task3 = {task:``,
			// secTask: 5,
			video:"./video/03",
			secAnswer:12,
			answer:"Мимино / Рыба меч",
			timerAfter: 15
},
 	task4 = {task:``,
			// secTask: 4,
			video:"./video/04",
			secAnswer:12,
			answer:"Матрица / Аэроплан",
			timerAfter: 15
},
 	task5 = {task:``,
			// secTask: 2,
			video:"./video/05",
			secAnswer:12,
			answer:"Звёздная стража / Амелли",
			timerAfter: 15
},
 	task6 = {task:``,
			// secTask: 10,
			video:"./video/06",
			secAnswer:12,
			answer:"Белое солнце пустыни / Форрест Гамп",
			timerAfter: 15
},
 	task7 = {task:``,
			// secTask: 10,
			video:"./video/07",
			secAnswer:12,
			formatAnswer:"Название фильма / Название музыкальной группы",
			answer:"Джентльмены удачи / Pink Floyd - The Wall",
			timerAfter: 15
},
 	task8 = {task:``,
			// secTask: 15,
			video:"./video/08",
			secAnswer:12,
			answer:"Конан Варвар / Чудо Женщина",
			timerAfter: 15
},
 	task9 = {task:``,
			// secTask:15,
			video:"./video/09",
			secAnswer:12,
			answer:"Служебный роман / Игра престолов",
			timerAfter: 15
},
 	task10 = {task:``,
			// secTask: 15,
			video:"./video/10",
			secAnswer:12,
			answer:"Голодные игры / Парни в трико",
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


// durationVideo("./video/timer",i);
let timerVideo = document.createElement("VIDEO");
timerVideo.setAttribute("src", "./video/timer.mp4");
// timerVideo.onloadedmetadata = ()=> timerVideo;

tasks.map((e)=>console.log(e.answer))