//задания на уровень
const tasks = [
 	task1 = {task:``,
			secTask:20,
			pict:"./images/01.jpg",
			// formatAnswer:"первая буква ответа К",
			// pictAnswer: "./images/01a.jpg",
			secAnswer:10,
			answer:"Матрица"
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
						// pictAnswer: "./images/02a.jpg",
			// formatAnswer:"первая буква ответа К",

			answer:"Иван Васильевич меняет профессию"
			},
 	task3 = {task:``,
			pict:"./images/03.jpg",
						// pictAnswer: "./images/03a.jpg",
			// formatAnswer:"первая буква ответа Х",

			answer:"Ужасающие приключения Сабрины"
			},
 	task4 = {task:``, 	
			pict:"./images/04.gif",
						// pictAnswer: "./images/04a.jpg",
			// formatAnswer:"первая буква ответа В",

			answer:"Шерк 2, Кот в сапогах",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
						// pictAnswer: "./images/05a.jpg",
			// formatAnswer:"первая буква ответа С",

			answer:"Мастер и маргарита"
			},
 	task6 = {task:``,
			pict:"./images/06.png",
						// pictAnswer: "./images/06a.jpg",
			// formatAnswer:"первая буква ответа Б",

			answer:"Сейлор Мун"
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
						// pictAnswer: "./images/07a.jpg",

			// formatAnswer:"первая буква ответа С",
			answer:"Пёс в сапогах"
			// // formatAnswer:""
			},
 	task8 = {task:``,
			pict:"./images/08.gif",
						// pictAnswer: "./images/08a.jpg",
			// formatAnswer:"первая буква ответа П",

			answer:"Чужой"
			},
 	task9 = {task:``,
			pict:"./images/09.gif",
						// pictAnswer: "./images/09a.jpg",
			// formatAnswer:"первая буква ответа Ш",

			answer:"Гарфилд"			
			},
 	task10 = {task:``,
			pict:"./images/10.gif",
						// pictAnswer: "./images/10a.jpg",
			// formatAnswer:"первая буква ответа С",

			answer:"Мстители (вселенная Марвел)"
			}
];
const pauseAfterTask = 30; //sec пауза после уровня на подумать

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();