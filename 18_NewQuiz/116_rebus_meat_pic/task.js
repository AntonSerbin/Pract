//задания на уровень
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
			formatAnswer:"первая буква ответа К",
			// pictAnswer: "./images/01a.jpg",
			secAnswer:15,
			answer:"Кебаб"
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
						// pictAnswer: "./images/02a.jpg",
			formatAnswer:"первая буква ответа К",

			answer:"Колбаса"
			},
 	task3 = {task:``,
			pict:"./images/03.jpg",
						// pictAnswer: "./images/03a.jpg",
			formatAnswer:"первая буква ответа Х",

			answer:"Хамон"
			},
 	task4 = {task:``, 	
			pict:"./images/04.jpg",
						// pictAnswer: "./images/04a.jpg",
			formatAnswer:"первая буква ответа В",

			answer:"Ветчина",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
						// pictAnswer: "./images/05a.jpg",
			formatAnswer:"первая буква ответа С",

			answer:"Сарделька"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
						// pictAnswer: "./images/06a.jpg",
			formatAnswer:"первая буква ответа Б",

			answer:"Бастурма"
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
						// pictAnswer: "./images/07a.jpg",

			formatAnswer:"первая буква ответа С",
			answer:"Сервелат"
			// formatAnswer:""
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
						// pictAnswer: "./images/08a.jpg",
			formatAnswer:"первая буква ответа П",

			answer:"Паштет"
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
						// pictAnswer: "./images/09a.jpg",
			formatAnswer:"первая буква ответа Ш",

			answer:"Шницель"			
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
						// pictAnswer: "./images/10a.jpg",
			formatAnswer:"первая буква ответа С",

			answer:"Сосиска"
			}
];
const pauseAfterTask = 30; //sec пауза после уровня на подумать

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();