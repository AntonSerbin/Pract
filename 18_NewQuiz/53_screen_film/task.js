//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:10,
//			formatAnswer:"",
			answer:"Мерри Попинс",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Человек паук, Человек-паук: Возвращение домой",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Паддингтон",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Стражи Галактики",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Звёздные войны"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Гарри Поттер",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Трансформеры",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Один дома",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Бетховен",
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Пираты карибского моря"
			}
];

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();