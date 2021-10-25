//задания на уровень
const tasks = [
 	task1 = {task:``,
			secTask:25,
			pict:"./images/01.jpg",
//			formatAnswer:"",
			// pictAnswer: "./images/01a.jpg",
			secAnswer:8,

			answer:"Nadezhda Krupskaya"
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Yoko Ono"
			},
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Juliet Capuletti"
			},
 	task4 = {task:``, 	
			pict:"./images/04.jpg",
			answer:"Bonnie Parker",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Nancy"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Eve"
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Josephine Beauharnais"
			// formatAnswer:""
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Esmeralda"
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Margarita"			
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Scarlett O'Hara"
			}
];
const pauseAfterTask = 30; //sec пауза после уровня на подумать

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();

tasks.map((e)=>console.log(e.answer));