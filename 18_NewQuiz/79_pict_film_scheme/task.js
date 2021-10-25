//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.png",
			// audio:"./images/01.mp3",
			secAnswer:10,
//			formatAnswer:"",
			answer:"Мумия",
			},
 	task2 = {task:``,
			pict:"./images/02.png",
			answer:"Леон",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.png",
			answer:"Назад в будущее",
			},
 	task4 = {task:``,
			pict:"./images/04.png",
			answer:"Бойцовский клуб",
			},
 	task5 = {task:``,
			pict:"./images/05.png",
			answer:"Пятый элемент"
			},
 	task6 = {task:``,
			pict:"./images/06.png",
			answer:"Побег из Шоушенка",
			},
 	task7 = {task:``,
			pict:"./images/07.png",
			answer:"Парк Юрского периода",
			formatAnswer:"Подсказка: режисёр Спилберг"
			},
 	task8 = {task:``,
			pict:"./images/08.png",
			answer:"Заводной апельсин",
			},
 	task9 = {task:``,
			pict:"./images/09.png",
			answer:"Планета обезьян",
			},
 	task10 = {task:``,
			pict:"./images/10.png",
			answer:"Приключения Паддингтона"
			},
 	task11 = {task:``,
			pict:"./images/11.jpg",
			answer:"Криминальное чтиво"
			},
 	task12 = {task:``,
			pict:"./images/12.png",
			answer:"Принц Персии"
			},
 	task13 = {task:``,
			pict:"./images/13.png",
			answer:"Красная жара"
			},
 	task14 = {task:``,
			pict:"./images/14.jpg",
			answer:"Газонокосильщик"
			},
 	task15 = {task:``,
			pict:"./images/15.png",
			answer:"Звёздные врата"
			}
];

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();