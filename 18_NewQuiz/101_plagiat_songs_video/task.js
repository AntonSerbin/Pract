//задания на уровень
let taskName = "";
const pauseAfterTask = 30; //sec пауза после уровня на подумать
// additionalTimerPath ="./video/"
const delayBeforeAddtionalTimerForAnswers=150;

const tasks = [
 	task1 = {task:``,
			video:"./video/01_orig",
			videoAnswer: "./video/01_copy",
			// secTask: 4,
			secAnswer:20,
			formatAnswer: "Shocking Blue - Long And Lonesome Road",
			answer:"Quest Pistols 'Я устал, хочу любви`",
			// timerAfter: 3
},
 	task2 = {task:``,
 			// secTask: 2,
			video:"./video/02_orig",
			videoAnswer: "./video/02_copy",
			secAnswer:20,
			formatAnswer: "SPACE - Symphonic Space Dream",
			answer:"Филипп Киркоров - Жестокая Любовь",
			// timerAfter: 4
},
 	task3 = {task:``,
			// secTask: 40,
			video:"./video/03_orig",
			videoAnswer: "./video/03_copy",
			secAnswer:20,
			formatAnswer: "The Day Finger Pickers Took Over The World · Chet Atkins",
			answer:"Машина Времени - Однажды мир прогнётся под нас",
			// timerAfter: 2
},
 	task4 = {task:``,
			// secTask: 40,
			video:"./video/04_orig",
			videoAnswer: "./video/04_copy",
			secAnswer:20,
			formatAnswer: "Good Charlotte - No Communication",
			answer:"Тату - Я сошла с ума",
},
 	task5 = {task:``,
			// secTask: 30,
			video:"./video/05_orig",
			videoAnswer: "./video/05_copy",
			secAnswer:20,
			formatAnswer: "Killing Joke - Eighties",
			answer:"Nirvana - Come As You Are",
},
 	task6 = {task:``,
			// secTask: 20,
			video:"./video/06_orig",
			videoAnswer: "./video/06_copy",
			secAnswer:20,
			formatAnswer: "Major Lazer – Light it Up",
			answer:"Время и Стекло - Навернопотомучто",
},
 	task7 = {task:``,
			// secTask: 40,
			video:"./video/07_orig",
			videoAnswer: "./video/07_copy",
			secAnswer:20,
			formatAnswer: "Sara Bareilles - Brave",
			answer:"Katy Perry - Roar",
},
 	task8 = {task:``,
			// secTask: 35,
			video:"./video/08_orig",
			videoAnswer: "./video/08_copy",
			secAnswer:20,
			formatAnswer: "Shame On You - Hot Hot Heat",
			answer:"Ёлка - Прованс",
},
 	task9 = {task:``,
			// secTask:35,
			video:"./video/09_orig",
			videoAnswer: "./video/09_copy",
			secAnswer:20,
			formatAnswer: "Black Sabbath - Heaven And Hell",
			answer:"АриЯ - Волонтёр",
},
 	task10 = {task:``,
			// secTask: 35,
			video:"./video/10_orig",
			videoAnswer: "./video/10_copy",
			secAnswer:20,
			formatAnswer: "Young Buck - Don't Need No Help",
			answer:"Потап и Настя - Внатуре",
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
	console.log(tasks[idx]);
 } ;
};

tasks.forEach((item,i)=>{durationVideo(item.video,i)});


// durationVideo("./video/timer",i);
let timerVideo = document.createElement("VIDEO");
timerVideo.setAttribute("src", "./video/timer.mp4");
// timerVideo.onloadedmetadata = ()=> timerVideo;

tasks.map((e)=>console.log(e.answer))