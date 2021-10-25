//задания на уровень
const tasks = [
 	task1 = {task:``,
			secTask:25,
			pict:"./images/01.jpg",
			formatAnswer:"Два слова на русском языке",
			pictAnswer: "./images/01a.jpg",
			secAnswer:12,
			
			answer:"Подводные камни"
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
						pictAnswer: "./images/02a.jpg",
			formatAnswer:"Три слова на русском языке",
			answer:"Убить двух зайцев"
			},
 	task3 = {task:``,
			pict:"./images/03.jpg",
						pictAnswer: "./images/03a.jpg",
			secTask:40,
			formatAnswer:"Название произведения",
			answer:"Три мушкетера"
			},
 	task4 = {task:``, 	
			pict:"./images/04.jpg",
			pictAnswer: "./images/04a.jpg",
			formatAnswer:"Три слова на русском языке",
			answer:"никогда не сядет",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
						pictAnswer: "./images/05a.jpg",
			formatAnswer:"Пропущена одна буква в назавнии, какая.",
			answer:"Капитанская дРочка"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
						pictAnswer: "./images/06a.jpg",
			formatAnswer:"Еще и в СССР барабанщики питались отдельно от остального оркестра. Слово на русском языке",

			answer:"ударников"
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
						// pictAnswer: "./images/07a.jpg",
			formatAnswer:"Название произведения",

			answer:"Виновата ли я"
			// formatAnswer:""
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
						pictAnswer: "./images/08a.jpg",
			formatAnswer:"Кириллица",

			answer:"Ечетыре"
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
						// pictAnswer: "./images/09a.jpg",
			formatAnswer:"Название фильма, на языке оригинала",

			answer:"Sin City"			
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			// pictAnswer: "./images/10a.jpg",
			formatAnswer:"Что отборажают цифры на карте",
			answer:"Количество мусульман"
			},
 	task11 = {task:``,
			pict:"./images/11.jpg",
			pictAnswer: "./images/11a.jpg",
			formatAnswer:"Одно слово на русском языке",
			answer:"Анонимных"
			},
	task12 = {task:``,
			pict:"./images/12.jpg",
			pictAnswer: "./images/12a.jpg",
			formatAnswer:"Слово на русском или английсокм языке",
			answer:"Кол"
			},
	task13 = {task:``,
			pict:"./images/13.jpg",
			pictAnswer: "./images/13a.jpg",
			formatAnswer:"Название музыкальной группы",
			answer:"Ганз энд Роузез"
			},
	task14 = {task:``,
			pict:"./images/14.jpg",
			pictAnswer: "./images/14a.jpg",
			formatAnswer:"На русском языке",
			answer:"ОНО"
			},
 	// task15 = {task:``,
		// 	pict:"./images/15.jpg",
		// 				secTask:60,
		// 	pictAnswer: "./images/15a.jpg",
		// 	formatAnswer:"Семь имен (отвечать номер - имя)",
		// 				secAnswer:25,
		// 	answer:"1.Циклоп, 2.Ахиллес, 3.Сизиф, 4.Сирен, 5.Икар, 6.Нептун, 7.Ариадна",
		// 	}
];
const pauseAfterTask = 30; //sec пауза после уровня на подумать

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();