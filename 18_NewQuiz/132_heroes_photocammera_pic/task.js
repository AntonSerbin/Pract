//задания на уровень
const tasks = [
 	task1 = {task:``,
			secTask:25,
			pict:"./images/01.jpg",
			// formatAnswer:"Два слова на русском языке",
			pictAnswer: "./images/01a.jpg",
			secAnswer:12,
			answer:"Людмила Прокофьевна Калугина, «Служебный роман»"
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
						pictAnswer: "./images/02a.jpg",
			// formatAnswer:"Три слова на русском языке",
			answer:"Эдвард, «Эдвард руки-ножницы»"
			},
 	task3 = {task:``,
			pict:"./images/03.jpg",
						pictAnswer: "./images/03a.jpg",
			// formatAnswer:"Название произведения",
			answer:"Дейенерис Таргариен, «Игра престолов»"
			},
 	task4 = {task:``, 	
			pict:"./images/04.jpg",
			pictAnswer: "./images/04a.jpg",
			// formatAnswer:"Три слова на русском языке",
			answer:"T-800, «Терминатор»",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
						pictAnswer: "./images/05a.jpg",
			// formatAnswer:"Пропущена одна буква в назавнии, какая.",
			answer:"Бриджит Джонс, «Дневник Бриджит Джонс»"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
						pictAnswer: "./images/06a.jpg",
			// formatAnswer:"Еще и в СССР барабанщики питались отдельно от остального оркестра. Слово на русском языке",

			answer:"Диана Принс, «Чудо-женщина: 1984»"
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
						pictAnswer: "./images/07a.jpg",
			// formatAnswer:"Название произведения",

			answer:"Эллен Рипли, «Чужой»"
			// // formatAnswer:""
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
						pictAnswer: "./images/08a.jpg",
			// formatAnswer:"Кириллица",

			answer:"Арагорн, «Властелин колец: Братство Кольца»"
			},
 	 	task9 = {task:``,
			pict:"./images/09.jpg",
						pictAnswer: "./images/09a.jpg",
			// formatAnswer:"Название фильма, на языке оригинала",

			answer:"Ганнибал Лектор, «Молчание ягнят»"			
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			pictAnswer: "./images/10a.jpg",
			// formatAnswer:"Что отборажают цифры на карте",
			answer:"Геральд из Ривии,  «Ведьмак»"	
			}
];
const pauseAfterTask = 30; //sec пауза после уровня на подумать

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();