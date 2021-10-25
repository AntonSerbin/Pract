//задания на уровень
let taskName = "";
const pauseAfterTask = 3; //sec пауза после уровня на подумать

const tasks = [
 	task1 = {task:``,
			// secTask: 45,
			video:"./video/01",
			secAnswer:15,
			answer:"Агент 007, Джеймс Бонд"
		}
		,
 	task2 = {task:``,
 			// secTask: 2,
			video:"./video/02",
			secAnswer:15,
			answer:"Люди Икс"
}
,
 	task3 = {task:``,
			// secTask: 5,
			video:"./video/03",
			secAnswer:15,
			answer:"Властелин колец, Хоббиты"
},
 	task4 = {task:``,
			// secTask: 4,
			video:"./video/04",
			secAnswer:15,
			answer:"Трансформеры"
},
 	task5 = {task:``,
			// secTask: 2,
			video:"./video/05",
			secAnswer:15,
			answer:"Криминальное чтиво"
},
 	task6 = {task:``,
			// secTask: 10,
			video:"./video/06",
			secAnswer:15,
			answer:"Звездные войны"
},
 	task7 = {task:``,
			// secTask: 10,
			video:"./video/07",
			secAnswer:15,
			answer:"Индиана Джонс"
},
 	task8 = {task:``,
			// secTask: 15,
			video:"./video/08",
			secAnswer:15,
			answer:"Терминатор"
},
 	task9 = {task:``,
			// secTask:15,
			video:"./video/09",
			secAnswer:15,
			answer:"Доктор Стрейнджлав, или Как я перестал бояться и полюбил бомбу"
},
 	task10 = {task:``,
			// secTask: 15,
			video:"./video/10",
			secAnswer:15,
			answer:"Игра престолов"
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

