//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:75,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:10,
//			formatAnswer:"",
			answer:"интерПОЛоса",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"фаСАДист",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"поСТОЙкость, поГРОМкость",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"бурЛАКмус",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"гоВОРона"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"роТОРшер",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"разЛОМбард",
			// formatAnswer:""
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"тракТИРан",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"компресСОРтир",
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"банкРОТор"
			}
];

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();