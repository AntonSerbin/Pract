//задания на уровень
const tasks = [
 	task1 = {task:``,
			secTask:25,
			pict:"./images/01.jpg",
//			formatAnswer:"",
			pictAnswer: "./images/01a.jpg",
			secAnswer:12,
			
			answer:"Носок"
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
						pictAnswer: "./images/02a.jpg",

			answer:"На Распределяющую шляпу"
			},
 	task3 = {task:``,
			pict:"./images/03.jpg",
						pictAnswer: "./images/03a.jpg",

			answer:"Напоминалку"
			},
 	task4 = {task:``, 	
			pict:"./images/04.jpg",
						pictAnswer: "./images/04a.jpg",

			answer:"Чайник",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
						pictAnswer: "./images/05a.jpg",

			answer:"Заяц"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
						pictAnswer: "./images/06a.jpg",

			answer:"Журавлик"
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
						pictAnswer: "./images/07a.jpg",

			answer:"7"
			// formatAnswer:""
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
						pictAnswer: "./images/08a.jpg",

			answer:"Знак Даров Смерти"
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
						pictAnswer: "./images/09a.jpg",

			answer:"Паука"			
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
						pictAnswer: "./images/10a.jpg",

			answer:"Снитч"
			},
	task11 = {task:``,
			pict:"./images/11.jpg",
						pictAnswer: "./images/11a.jpg",

			answer:"На перо"
			},
 	task12 = {task:``,
			pict:"./images/12.jpg",
						pictAnswer: "./images/12a.jpg",

			answer:"В форме головы змеи"			
			},
 	task13 = {task:``,
			pict:"./images/13.jpg",
						pictAnswer: "./images/13a.jpg",

			answer:"Гиппогрифа"
			}
];
const pauseAfterTask = 30; //sec пауза после уровня на подумать

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();