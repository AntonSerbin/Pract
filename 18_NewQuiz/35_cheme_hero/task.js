//задания на уровень
const pauseAfterTask = 20; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:25,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:10,
//			formatAnswer:"",
			answer:"Халк (мир Марвелл)",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Джасмин(мультфильм Алладин)",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Человек Паук/Питер Парткер (Мир Марвелл)",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Иа (Винни-Пух)",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Волли"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Беззубик (Как приручить дракона)",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Ниндзя-черепашки",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Ариэль (мультфильм Русалочка)",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Соник (м/ф,комикс,фильм Ёж Соник)",
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Капитан Америка (мир Марвелл)"
			}
];

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();