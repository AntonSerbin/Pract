//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:10,
//			formatAnswer:"",
			answer:"Призрак",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"9 с половиной недель",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Адреналин",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Красотка",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Пятьдесят оттенков серого"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Титаник",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Калигула",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Сумерки",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Игра престолов",
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Новые приключения Шурика"
			}
];

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();

// tasks.map((e)=>console.table(e.answer))