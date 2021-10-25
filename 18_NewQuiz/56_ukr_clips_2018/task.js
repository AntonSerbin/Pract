//задания на уровень
let taskName = "";
const pauseAfterTask = 30; //sec пауза после уровня на подумать

const tasks = [
 	task1 = {task:``,
			secTask: 45,
			video:"./video/01",
			secAnswer:10,
			answer:"#2Маши - Босая"
		},
 	task2 = {task:``,
 			// secTask: 2,
			video:"./video/02",
			secAnswer:10,
			answer:"Макс Барских — Вспоминать"
}
,
 	task3 = {task:``,
			// secTask: 5,
			video:"./video/03",
			secAnswer:10,
			answer:"Время и Стекло - ТОП"
},
 	task4 = {task:``,
			// secTask: 4,
			video:"./video/04",
			secAnswer:10,
			answer:"MONATIK - «То, от чего без ума» "
},
 	task5 = {task:``,
			// secTask: 2,
			video:"./video/05",
			secAnswer:10,
			answer:"Сергій Бабкін - Дихай повільно"
},
 	task6 = {task:``,
			// secTask: 10,
			video:"./video/06",
			secAnswer:10,
			answer:"Jamala - Крила"
},
 	task7 = {task:``,
			// secTask: 10,
			video:"./video/07",
			secAnswer:10,
			answer:"NK - НАСТЯ КАМЕНСКИХ - ДAЙ МНЕ"
},
 	task8 = {task:``,
			// secTask: 15,
			video:"./video/08",
			secAnswer:10,
			answer:"Оля Полякова — Королева Ночи"
},
 	task9 = {task:``,
			// secTask:15,
			video:"./video/09",
			secAnswer:10,
			answer:"MOZGI - Влажный Пляжный Движ"
},
 	task10 = {task:``,
			// secTask: 15,
			video:"./video/10",
			secAnswer:10,
			answer:"Жадан і Собаки - Кобзон"
}
]			

// console.log(`<link rel="prerender" href="${tasks[0].video}.mp4" >`);
// document.querySelector("head").innerHTML+=`<link rel="prerender" href="${tasks[0].video}.mp4">`;
// document.querySelector("title").innerHTML+="AreYouReady";


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

