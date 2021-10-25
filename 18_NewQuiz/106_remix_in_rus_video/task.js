//задания на уровень
let taskName = "";
const pauseAfterTask = 30; //sec пауза после уровня на подумать
// additionalTimerPath ="./video/"
const delayBeforeAddtionalTimerForAnswers=150;

const tasks = [
 	task1 = {task:``,
			video:"./video/01",
			// videoAnswer: "./video/01_copy",
			secTask: 40,
			secAnswer:20,
			answer:"Rammstein - Engel",
			// timerAfter: 3
},
 	task2 = {task:``,
			secTask: 40,
			video:"./video/02",
			secAnswer:20,
			answer:"Nirvana - Smells Like Teen Spirit",
			// timerAfter: 4
},
 	task3 = {task:``,
			secTask: 40,
			video:"./video/03",
			secAnswer:20,
			answer:"Image Dragons",
			// timerAfter: 2
},
 	task4 = {task:``,
			secTask: 40,
			video:"./video/04",
			secAnswer:20,
			answer:"EMINEM ft. RIHANNA - THE MONSTER",
},
 	task5 = {task:``,
			secTask: 40,
			video:"./video/05",
			secAnswer:20,
			answer:"METALLICA - The Unforgiven",
},
 	task6 = {task:``,
			secTask: 40,
			video:"./video/06",
			secAnswer:20,
			answer:"Roxette - Listen To Your Heart",
},
 	task7 = {task:``,
			secTask: 40,
			video:"./video/07",
			secAnswer:20,
			answer:"Sabaton - Bismarck",
},
 	task8 = {task:``,
			secTask: 40,
			video:"./video/08",
			secAnswer:20,
			answer:"AC⁄DC - Highway to Hell ",
},
 	task9 = {task:``,
			secTask: 40,
			video:"./video/09",
			secAnswer:20,
			answer:"Coolio - Gangsta's Paradise",
},
 	task10 = {task:``,
			secTask: 40,
			video:"./video/10",
			secAnswer:20,
			answer:"Zombie-The Cranberries",
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