//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:10,
//			formatAnswer:"",
			answer:"Звездные воины",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Убить Билла",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Заводной апельсин",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Чужой",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Начало"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Сияние",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Лицо со шрамом",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Крестный отец",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Маленький принц",
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Интерстеллар"
			}
];

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();
