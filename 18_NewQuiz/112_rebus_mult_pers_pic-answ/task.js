//задания на уровень
const tasks = [
 	task1 = {task:``,
			secTask:45,
			pict:"./images/01.jpg",
//			formatAnswer:"",
			pictAnswer: "./images/01a.jpg",
			secAnswer:15,
			answer:""
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
						pictAnswer: "./images/02a.jpg",

			answer:""
			},
 	task3 = {task:``,
			pict:"./images/03.jpg",
						pictAnswer: "./images/03a.jpg",

			answer:""
			},
 	task4 = {task:``, 	
			pict:"./images/04.jpg",
						pictAnswer: "./images/04a.jpg",

			answer:"",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
						pictAnswer: "./images/05a.jpg",

			answer:""
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
						pictAnswer: "./images/06a.jpg",

			answer:""
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
						pictAnswer: "./images/07a.jpg",

			answer:""
			// formatAnswer:""
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
						pictAnswer: "./images/08a.jpg",

			answer:""
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
						pictAnswer: "./images/09a.jpg",

			answer:""			
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
						pictAnswer: "./images/10a.jpg",

			answer:""
			}
];
const pauseAfterTask = 30; //sec пауза после уровня на подумать

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();