//задания на уровень
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
//			formatAnswer:"",
			//pictAnswe: "./images/01a.jpg",
			secAnswer:15,
			answer:"Б, по сусекам"
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
						//pictAnswe: "./images/02a.jpg",
			answer:"В, Тирана"

			},
 	task3 = {task:``,
			pict:"./images/03.jpg",
						//pictAnswe: "./images/03a.jpg",
			answer:"Б, апельсин",

			},
 	task4 = {task:``, 	
 					pict:"./images/04.jpg",

					answer:"А, коррида"
				//pictAnswe: "./images/04a.jpg",

			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
						//pictAnswe: "./images/05a.jpg",
			answer:"Г, афроамериканец"

			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
						//pictAnswe: "./images/06a.jpg",
			answer:"В, спутники Урана все в честь персонажей Шекспира и Поупа"

			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
						//pictAnswe: "./images/07a.jpg",
			answer:"Г, ни одного"

			// formatAnswer:""
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
						//pictAnswe: "./images/08a.jpg",
			answer:"Б, пуговицы"			

			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
						//pictAnswe: "./images/09a.jpg",
			answer:"Г, балалайка"

			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
						//pictAnswe: "./images/10a.jpg",
			answer:"В, актер афроамериканец"

			},
 	task11 = {task:``,
			pict:"./images/11.jpg",
						//pictAnswe: "./images/10a.jpg",
			answer:"Б, баскетбол 1972г серебро США"

			},
 	task12 = {task:``,
			pict:"./images/12.jpg",
						//pictAnswe: "./images/10a.jpg",

			answer:"В, добывание воды"
			}
];
const pauseAfterTask = 30; //sec пауза после уровня на подумать

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();