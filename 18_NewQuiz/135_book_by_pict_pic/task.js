//задания на уровень
const tasks = [
 	task1 = {task:``,
			secTask:40,
			pict:"./images/01.jpg",
			//formatAnswer:"Два слова на русском языке",
			pictAnswer: "./images/01a.jpg",
			secAnswer:10,
			
			answer:"Чёрный обелиск"
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			pictAnswer: "./images/02a.jpg",
			answer:"Толстый и тонкий"
			},
 	task3 = {task:``,
			pict:"./images/03.jpg",
			pictAnswer: "./images/03a.jpg",
			answer:"1984"
			},
 	task4 = {task:``, 	
			pict:"./images/04.jpg",
			pictAnswer: "./images/04a.jpg",
			answer:"Му-му",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			pictAnswer: "./images/05a.jpg",
			answer:"Лолита"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			pictAnswer: "./images/06a.jpg",
			answer:"Мать"
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			pictAnswer: "./images/07a.jpg",
			answer:"Оно"
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			pictAnswer: "./images/08a.jpg",
			formatAnswer:"Задания 8-9-10 связаны",

			answer:"Детство"
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			pictAnswer: "./images/09a.jpg",
			formatAnswer:"Задания 8-9-10 связаны",

			answer:"Отрочество"			
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			pictAnswer: "./images/10a.jpg",
			formatAnswer:"Задания 8-9-10 связаны",
			answer:"Юность"
			}
];
const pauseAfterTask = 30; //sec пауза после уровня на подумать

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();