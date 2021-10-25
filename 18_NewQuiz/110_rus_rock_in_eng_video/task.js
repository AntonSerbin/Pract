//задания на уровень
let taskName = "";
const pauseAfterTask = 30; //sec пауза после уровня на подумать
// additionalTimerPath ="./video/"
// const delayBeforeAddtionalTimerForAnswers=150;

const tasks = [
 	task1 = {task:``,
			video:"./video/01",
			// videoAnswer: "./video/01_copy",
			secTask: 45,
			secAnswer:20,
			answer:"Король и Шут - Лесник",
			// timerAfter: 3
},
 	task2 = {task:``,
			secTask: 45,

			video:"./video/02",
			secAnswer:20,
			answer:"Агата Кристи - Как на войне ",
			// timerAfter: 4
},
 	task3 = {task:``,
			secTask: 45,

			video:"./video/03",
			secAnswer:20,
			answer:"БИ-2 - Полковнику Никто Не Пишет",
			// timerAfter: 2
},
 	task4 = {task:``,
			secTask: 45,

			video:"./video/04",
			secAnswer:20,
			answer:"Ария - Что вы сделали с вашей мечтой",
},
 	task5 = {task:``,
			secTask: 45,

			video:"./video/05",
			secAnswer:20,
			answer:"Эпидемия - Звон Монет",
},
 	task6 = {task:``,
			secTask: 45,

			video:"./video/06",
			secAnswer:20,
			answer:"Кино - Кукушка",
},
 	task7 = {task:``,
			secTask: 45,

			video:"./video/07",
			secAnswer:20,
			answer:"Сектор Газа - Гуляй, мужик!",
},
 	task8 = {task:``,
			secTask: 45,

			video:"./video/08",
			secAnswer:20,
			answer:"Машина Времени - Однажды Мир Прогнётся Под Нас",
},
 	task9 = {task:``,
			secTask: 45,

			video:"./video/09",
			secAnswer:20,
			answer:"Гражданская Оборона - Моя Оборонa",
},
 	task10 = {task:``,
			secTask: 45,

			video:"./video/10",
			secAnswer:20,
			answer:"Земляне - Трава у дома",
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


// durationVideo("./video/timer",i);
let timerVideo = document.createElement("VIDEO");
timerVideo.setAttribute("src", "./video/timer.mp4");
// timerVideo.onloadedmetadata = ()=> timerVideo;

tasks.map((e)=>console.log(e.answer))