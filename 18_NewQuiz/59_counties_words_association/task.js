//задания на уровень
const pauseAfterTask = 40; //sec пауза после уровня на подумать
const tasks = [
 	
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
			secAnswer:10,
			answer:"Колумбийский галстук",
			},
 	task4 = {task:``,
 			secTask:30,
			// formatAnswer:"Два слова",
			pict:"./images/04.jpg",
			answer:"Тайский массаж",
			},
	task5 = {task:``,
 			// formatAnswer:"Одно слово",
			pict:"./images/05.jpg",
			answer:"Швейцарский нож"
			},
	task9 = {task:``,
 			// formatAnswer:"Два слова",
			pict:"./images/09.jpg",
			answer:"Шведская стенка",
			},
	task3 = {task:``,
 		 	// formatAnswer:"3-4 слова",
			pict:"./images/03.jpg",
			answer:"Турецкий гамбит",
			},

 	task2 = {task:``,
 			// formatAnswer:"Одно слово",
			pict:"./images/02.jpg",
			answer:"Американские горки",
			},
 	task6 = {task:``,
 			// formatAnswer:"Два слова",
			pict:"./images/06.jpg",
			answer:"Болгарский перец",
			},
 	task7 = {task:``,
 			// formatAnswer:"Два слова",
			pict:"./images/07.jpg",
			answer:"Египетская пирамида",
			},
 	task8 = {task:``,
 			// formatAnswer:"Три слова",
			pict:"./images/08.jpg",
			answer:"Испанский сапог",
			},

 	task10 = {task:``,
 			// formatAnswer:"Два слова",
			pict:"./images/10.jpg",
			answer:"Стрельба по-македонски"
			},
	// task11 = {task:``,
 // 			// formatAnswer:"Два слова",
	// 		pict:"./images/all.jpg",
	// 		answer:""
	// 		}
];	

  //устанавливаем имя уровня в локал
let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();


// tasks.map((e)=>(console.log(e.answer)))