//задания на уровень
const tasks = [
 	task1 = {task:``,
			secTask:20,
			pict:"./images/01.jpg",
//			formatAnswer:"",
			// pictAnswer: "./images/01a.jpg",
			secAnswer:8,

			answer:"А"
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Г"
			},
 	task3 = {task:``,
 					secTask:15,
			pict:"./images/03.jpg",
			answer:"Б"
			},
 	task4 = {task:``, 	
 			secTask:15,
			pict:"./images/04.jpg",
			answer:"Б",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Б"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Б"
			},
 	// task7 = {task:``,
		// 	pict:"./images/07.jpg",
		// 	answer:"В"
		// 	// formatAnswer:""
		// 	},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			// formatAnswer:"Формат ответа: или Имя, или Фамилия",
			answer:"Г"
			},
 	// task9 = {task:``,
 	// 	 secTask:25,
		// 	pict:"./images/09.jpg",
		// 	answer:"В"			
		// 	},
 	// task10 = {task:``,
		// 	pict:"./images/10.jpg",
		// 	answer:"A"
		// 	},
 	// task11 = {task:``,
 	// 	 		 secTask:25,

		// 	pict:"./images/11.jpg",
		// 	answer:"A"			
		// 	},
 	task12 = {task:``,
 		 		 secTask:15,

			pict:"./images/12.jpg",
			answer:"Б"			
			},
 	// task13 = {task:``,
		// 	pict:"./images/13.jpg",
		// 	answer:"А"			
		// 	},			
 	task14 = {task:``,
			pict:"./images/14.jpg",
			answer:"А"			
			},
 	// task15 = {task:``,
		// 	pict:"./images/15.jpg",
		// 	answer:"Г"			
		// 	},
 	// task16 = {task:``,
		// 	pict:"./images/16.jpg",
		// 	answer:"В"			
		// 	},
 	// task17 = {task:``,
		// 	pict:"./images/17.jpg",
		// 	answer:"А"			
		// 	},			
 	task18 = {task:``,
 		 		 secTask:15,

			pict:"./images/18.jpg",
			answer:"В"			
			},
 	// task19 = {task:``,
 	// 	 		 secTask:25,

		// 	pict:"./images/19.jpg",
		// 	answer:"В"			
		// 	},			
 	// task20 = {task:``,
 	// 	 		 secTask:25,

		// 	pict:"./images/20.jpg",
		// 	answer:"А"			
		// 	}
];
const pauseAfterTask = 30; //sec пауза после уровня на подумать

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();