//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:20,
			pict:"./images/01.jpg",
//			formatAnswer:"",
			// pictAnswer: "./images/01a.jpg",
			secAnswer:10,

			answer:"Гарри Поттер"
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Бетмен"
			},
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Железный человек"
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Чаки",
			pictAnswer: "./images/04a.jpg",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Рафаэль"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			formatAnswer:"Имя, или Название фильма(франшизы)",
			answer:"Бобба Фет, Звездные войны",
			pictAnswer: "./images/06a.jpg",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Робокоп"
			// formatAnswer:""
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			// formatAnswer:"Формат ответа: или Имя, или Фамилия",
			answer:"Тирион Ланнистер"
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Алекс, Заводной апельсин",
			formatAnswer:"Имя, или Название фильма(франшизы)"
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Терминатор"
			}
];

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();