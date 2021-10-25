//задания на уровень
const tasks = [
 	task1 = {task:``,
			secTask:25,
			pict:"./images/01.jpg",
//			formatAnswer:"",
			// pictAnswer: "./images/01a.jpg",
			secAnswer:8,

			answer:"Надежда Крупская"
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Йоко Оно"
			},
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Джулье́тта Капуле́тти"
			},
 	task4 = {task:``, 	
			pict:"./images/04.jpg",
			answer:"Бонни Паркер",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Ненси"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Ева"
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Жозефина Богарне"
			// formatAnswer:""
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Эсмера́льда"
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Маргарита"			
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Скарлетт О'Хара"
			}
];
const pauseAfterTask = 30; //sec пауза после уровня на подумать

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();