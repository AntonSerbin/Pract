//задания на уровень
let taskName = "";
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const delayBeforeAddtionalTimerForAnswers=950;

const tasks = [
 	task1 = {task:``,
			// secTask: 45,
			video:"./video/01",
			secAnswer:15,
			answer:"Укращение стоптивого / Служебный роман",
			timerAfter: 15		}
		,
 	task2 = {task:``,
 			// secTask: 2,
			video:"./video/02",
			secAnswer:15,
			answer:"Любовь и голуби / Пункт назначения 2",
			timerAfter: 15
}
,
//  	task3 = {task:``,
// 			// secTask: 5,
// 			video:"./video/03",
// 			secAnswer:15,
// 			answer:"Иван Васильевич меняет профессию / Игры престолов",
// 						betweenTaskGap : 3

// },
 	task4 = {task:``,
			// secTask: 4,
			video:"./video/04",
			secAnswer:15,
			answer:"Место встречи изменить нельзя / Лицо со шрамом ",
			timerAfter: 15
},
 	task5 = {task:``,
			// secTask: 2,
			video:"./video/05",
			secAnswer:15,
			answer:"Игры престолов / Любовь и голуби",
						timerAfter: 15

},
//  	task6 = {task:``,
// 			// secTask: 10,
// 			video:"./video/06",
// 			secAnswer:15,
// 			answer:"Побег из Шоушенка / Джентльмены удачи"
// },
 	task7 = {task:``,
			// secTask: 10,
			video:"./video/07",
			secAnswer:15,
			answer:"Хищник / ДМБ",
			timerAfter: 15
},
 	task8 = {task:``,
			// secTask: 15,
			video:"./video/08",
			secAnswer:15,
			answer:"Терминатор 2 / Операция «Ы» и другие приключения Шурика",
			timerAfter: 15
},
 	task9 = {task:``,
			// secTask:15,
			video:"./video/09",
			secAnswer:15,
			answer:"Хищник / Собака Баскервилей",
			timerAfter: 15
},
//  	task10 = {task:``,
// 			// secTask: 15,
// 			video:"./video/10",
// 			secAnswer:15,
// 			answer:"Четыре комнаты / Иван Васильевич меняет профессию",
// 			timerAfter: 15
// },
 	task11 = {task:``,
			// secTask: 15,
			video:"./video/11",
			secAnswer:15,
			answer:"Бриллиантовая рука / Мистер Бин",
			timerAfter: 15
},
//  	task12 = {task:``,
// 			// secTask: 15,
// 			video:"./video/12",
// 			secAnswer:15,
// 			answer:"Формула любви/ Бэтмен (Тёмный рыцарь)",
// 			timerAfter: 15
// },
 	task13 = {task:``,
			// secTask: 15,
			video:"./video/13",
			secAnswer:15,
			answer:"Приключения Электроника / Терминатор 3",
			timerAfter: 15
},
 	task14 = {task:``,
			// secTask: 15,
			video:"./video/14",
			secAnswer:15,
			answer:"Гостья из будущего / 50 оттенков серого",
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
 } ;
};

tasks.forEach((item,i)=>{durationVideo(item.video,i)});

let timerVideo = document.createElement("VIDEO");
timerVideo.setAttribute("src", "./video/timer.mp4");

