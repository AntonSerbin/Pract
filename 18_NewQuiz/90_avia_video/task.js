//задания на уровень
let taskName = "";
const pauseAfterTask = 30; //sec пауза после уровня на подумать
// additionalTimerPath ="./video/"
const delayBeforeAddtionalTimerForAnswers=150;


const tasks = [
 	task1 = {task:``,
			video:"./video/01",
			secAnswer:15,
			answer:"Bastille 'Things We Lost In The Fire'",
			// secTask: 4,
			duration: 0,
			timerAfter: 3
},
 	task2 = {task:``,
 			// secTask: 2,
			video:"./video/02",
			secAnswer:15,
			answer:"ЧиЖ 'Бомбардировщики'",
			// timerAfter: 4
},
 	task3 = {task:``,
			secTask: 40,
			video:"./video/03",
			secAnswer:15,
			answer:"Пикник 'Вертолет'",
			// timerAfter: 2
},
 	task4 = {task:``,
			secTask: 40,
			video:"./video/04",
			secAnswer:15,
			answer:"Мерл Тревис и др исполнители '16 тонн'"
},
 	task5 = {task:``,
			secTask: 30,
			video:"./video/05",
			secAnswer:15,
			answer:"Sabaton - The Last Stand"
},
 	task6 = {task:``,
			secTask: 20,
			video:"./video/06",
			secAnswer:15,
			answer:"Браво `Любите, девушки`"
},
 	task7 = {task:``,
			secTask: 40,
			video:"./video/07",
			secAnswer:15,
			answer:"Ария '1100'"
},
 	task8 = {task:``,
			secTask: 35,
			video:"./video/08",
			secAnswer:15,
			answer:"Iron Maiden 'Aces High'"
},
 	task9 = {task:``,
			secTask:35,
			video:"./video/09",
			secAnswer:15,
			answer:"Nightwish 'Wishmaster'"
},
 	task10 = {task:``,
			secTask: 35,
			video:"./video/10",
			secAnswer:15,
			answer:"Чиж/RADIO TAPOK 'Фантом'"
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


