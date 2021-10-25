//задания на уровень
const tasks = [
 	task1 = {task:``,
			secTask:45,
			pict:"./images/01.jpg",
//			formatAnswer:"",
			pictAnswer: "./images/01a.jpg",
			secAnswer:8,

			answer:"Бойцовский клуб"
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
						pictAnswer: "./images/02a.jpg",

			answer:"Чужой"
			},
 	task3 = {task:``,
			pict:"./images/03.jpg",
						pictAnswer: "./images/03a.jpg",

			answer:"Москва слезам не верит"
			},
 	task4 = {task:``, 	
			pict:"./images/04.jpg",
						pictAnswer: "./images/04a.jpg",

			answer:"Афоня",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
						pictAnswer: "./images/05a.jpg",

			answer:"Шестое чувство"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
						pictAnswer: "./images/06a.jpg",

			answer:"Обитаемый остров"
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
						pictAnswer: "./images/07a.jpg",

			answer:"Семь"
			// formatAnswer:""
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
						pictAnswer: "./images/08a.jpg",
			secTask:35,

			answer:"Пятый элемент"
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
						pictAnswer: "./images/09a.jpg",
			secTask:35,

			answer:"Всегда говори ДА"			
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
						pictAnswer: "./images/10a.jpg",
			secTask:35,

			answer:"Кунг-фу-панда"
			}
];
const pauseAfterTask = 30; //sec пауза после уровня на подумать

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();