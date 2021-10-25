//задания на уровень
const tasks = [
 	task1 = {task:``,
			secTask:240,
			pict:"./images/001.jpg",
//			formatAnswer:"",
			pictAnswer: "./images/01a.jpg",
			secAnswer:15,
			answer:""
			},
 	task2 = {task:``,
			pict:"./images/001.jpg",
						pictAnswer: "./images/02a.jpg",
			answer:"",
			secTask:0
			},
 	task3 = {task:``,
			pict:"./images/001.jpg",
						pictAnswer: "./images/03a.jpg",
			answer:"",
			secTask:0

			},
 	task4 = {task:``, 	
 					pict:"./images/001.jpg",

					answer:"",
				pictAnswer: "./images/04a.jpg",
			secTask:0

			},
 	task5 = {task:``,
			pict:"./images/001.jpg",
						pictAnswer: "./images/05a.jpg",
			answer:"",
			secTask:0

			},
 	task6 = {task:``,
			pict:"./images/001.jpg",
						pictAnswer: "./images/06a.jpg",
			answer:"",
			secTask:0

			},
 	task7 = {task:``,
			pict:"./images/001.jpg",
						pictAnswer: "./images/07a.jpg",
			answer:"",
			secTask:0

			// formatAnswer:""
			},
 	task8 = {task:``,
			pict:"./images/001.jpg",
						pictAnswer: "./images/08a.jpg",
			answer:"",			
			secTask:0

			},
 	task9 = {task:``,
			pict:"./images/001.jpg",
						pictAnswer: "./images/09a.jpg",
			answer:"",
			secTask:0

			},
 	task10 = {task:``,
			pict:"./images/001.jpg",
						pictAnswer: "./images/10a.jpg",
			answer:"",
			secTask:0

			}
			
];
const pauseAfterTask = 30; //sec пауза после уровня на подумать

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();