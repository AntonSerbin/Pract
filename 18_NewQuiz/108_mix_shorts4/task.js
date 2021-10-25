//задания на уровень
let taskName = "";
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const delayBeforeAddtionalTimerForAnswers=850;

const tasks = [
 	task1 = {task:``,
			// secTask: 2,
			duration: 2,
			video:"./video/01",
			secAnswer:12,
			answer:"Сияние / Трое из Простоквашино",
			timerAfter: 07

},
 	task2 = {task:``,
 			// secTask: 2,
			video:"./video/02",
			secAnswer:12,
			answer:"День Сурка / Вокзал для двоих",
			timerAfter: 07
},
 	task3 = {task:``,
			// secTask: 5,
			video:"./video/03",
			secAnswer:12,
			answer:"Самогонщики / Игра престолов",
			timerAfter: 07
},
 	task4 = {task:``,
			// secTask: 4,
			video:"./video/04",
			secAnswer:12,
			answer:"Москва слезам не верит / Криминальное чтиво",
			timerAfter: 07
},
 	task5 = {task:``,
			// secTask: 2,
			video:"./video/05",
			secAnswer:12,
			answer:"Красная жара / Афоня",
			timerAfter: 07
},
 	task6 = {task:``,
			// secTask: 10,
			video:"./video/06",
			secAnswer:12,
			answer:"Друзья / С лёгким паром",
			timerAfter: 07
},
 	task7 = {task:``,
			// secTask: 10,
			video:"./video/07",
			secAnswer:12,
			answer:"17 мгновений весны / Основной инстинкт",
			timerAfter: 07
},
 	task8 = {task:``,
			// secTask: 15,
			video:"./video/08",
			secAnswer:12,
			answer:"Побег из Шоушенка / Крепкий орешек",
			timerAfter: 07
},
 	task9 = {task:``,
			// secTask:15,
			video:"./video/09",
			secAnswer:12,
			answer:"Мимино / Славные парни",
			timerAfter: 07
},
 	task10 = {task:``,
			// secTask: 15,
			video:"./video/10",
			secAnswer:12,
			answer:"С лёгким паром / Шерлок Холмс",
			timerAfter: 07
},
 	task11 = {task:``,
			// secTask: 15,
			video:"./video/11",
			secAnswer:12,
			answer:"Человек с бульвара капуцинов / Ёжик в тумане",
			timerAfter: 07
},
 	task12 = {task:``,
			// secTask: 15,
			video:"./video/12",
			secAnswer:12,
			answer:"Собака Баскервилей / Бетмен",
			timerAfter: 07
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
	// tasks[0]["duration"]=2;

	console.log(tasks[idx]);
 } ;
};

tasks.forEach((item,i)=>{durationVideo(item.video,i)});

// durationVideo("./video/timer",i);
let timerVideo = document.createElement("VIDEO");
timerVideo.setAttribute("src", "./video/timer.mp4");
// timerVideo.onloadedmetadata = ()=> timerVideo;

tasks.map((e)=>console.log(e.answer))

