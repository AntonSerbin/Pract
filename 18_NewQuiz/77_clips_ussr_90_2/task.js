//задания на уровень
let taskName = "";
const pauseAfterTask = 30; //sec пауза после уровня на подумать

const tasks = [
 	task1 = {task:``,
			// secTask: 45,
			video:"./video/01",
			secAnswer:10,
			answer:"Агутин"
		},
 	task2 = {task:``,
 			// secTask: 2,
			video:"./video/02",
			secAnswer:10,
			answer:"Хлебникова"
}
,
 	task3 = {task:``,
			// secTask: 5,
			video:"./video/03",
			secAnswer:10,
			answer:"Земфира"
},
 	task4 = {task:``,
			// secTask: 4,
			video:"./video/04",
			secAnswer:10,
			answer:"Губин"
},
 	task5 = {task:``,
			// secTask: 2,
			video:"./video/05",
			secAnswer:10,
			duration:30,	
			answer:"Анжелика Варум"
},
 	task6 = {task:``,
			// secTask: 10,
			video:"./video/06",
			secAnswer:10,
			answer:"Запрещенные барабанщики"
},
 	task7 = {task:``,
			// secTask: 10,
			video:"./video/07",
			secAnswer:10,
			answer:"Отпетые мошенники"
},
 	task8 = {task:``,
			// secTask: 15,
			video:"./video/08",
			secAnswer:10,
			answer:"Линда"
},
 	task9 = {task:``,
			// secTask:15,
			video:"./video/09",
			secAnswer:10,
			answer:"Унесенные ветром"
},
 	task10 = {task:``,
			// secTask: 15,
			video:"./video/10",
			secAnswer:10,
			answer:"Лицей"
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

