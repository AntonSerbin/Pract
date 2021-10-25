//задания на уровень
const tasks = [
 	task1 = {task:``,
			secTask:25,
			pict:"./images/01.jpg",
			// formatAnswer:"Два слова на русском языке",
			//pictAnswer: "./images/01a.jpg",
			secAnswer:12,
			answer:"Чапаев"
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
						//pictAnswer: "./images/02a.jpg",
			// formatAnswer:"Три слова на русском языке",
			answer:"3+2"
			},
 	task3 = {task:``,
			pict:"./images/03.jpg",
						//pictAnswer: "./images/03a.jpg",
			// formatAnswer:"Название произведения",
			answer:"Старик Хоттабыч"
			},
 	task4 = {task:``, 	
			pict:"./images/04.jpg",
			//pictAnswer: "./images/04a.jpg",
			// formatAnswer:"Три слова на русском языке",
			answer:"Приключения Электроника",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
						//pictAnswer: "./images/05a.jpg",
			// formatAnswer:"Пропущена одна буква в назавнии, какая.",
			answer:"Кин-дза-дза!"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
						//pictAnswer: "./images/06a.jpg",
			// formatAnswer:"Еще и в СССР барабанщики питались отдельно от остального оркестра. Слово на русском языке",

			answer:"Здравствуйте, я ваша тётя!"
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
						//pictAnswer: "./images/07a.jpg",
			// formatAnswer:"Название произведения",

			answer:"Д’Артаньян и три мушкетёра"
			// // formatAnswer:""
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
						//pictAnswer: "./images/08a.jpg",
			// formatAnswer:"Кириллица",

			answer:"Броненосец «Потёмкин»"
			},
 	 	task9 = {task:``,
			pict:"./images/09.jpg",
						//pictAnswer: "./images/09a.jpg",
			// formatAnswer:"Название фильма, на языке оригинала",

			answer:"Человек-амфибия"			
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			//pictAnswer: "./images/10a.jpg",
			// formatAnswer:"Что отборажают цифры на карте",
			answer:"Формула любви"	
			}
];
const pauseAfterTask = 30; //sec пауза после уровня на подумать

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();