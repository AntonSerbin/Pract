//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:10,
			formatAnswer:"Два слова",
			answer:"В гробу",
			},
 	task2 = {task:``,
 			formatAnswer:"Одно слово",
			pict:"./images/02.jpg",
			answer:"Гудрон",
			},
 	task3 = {task:``,
 		 	formatAnswer:"Одно слово, имя",
			pict:"./images/03.jpg",
			answer:"Атос",
			},
 	task4 = {task:``,
			formatAnswer:"Три слова",
			pict:"./images/04.jpg",
			answer:"Рот в рот",
			},
 	task5 = {task:``,
 			formatAnswer:"Одно слово",
			pict:"./images/05.jpg",
			answer:"Жесть"
			},
 	task6 = {task:``,
 			formatAnswer:"Одно слово",
			pict:"./images/06.jpg",
			answer:"Снеговику",
			},
 	task7 = {task:``,
 			formatAnswer:"Одно слово",
			pict:"./images/07.jpg",
			answer:"Курил",

			},
 	task8 = {task:``,
 			formatAnswer:"Два слова",
			pict:"./images/08.jpg",
			answer:"За хной"
			},
	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Сверлить",
			formatAnswer:"Одно слово; подсказка: Стих посвящен соседям: "
			},
 	task10 = {task:``,
 			formatAnswer:"Одно слово, глагол",
			pict:"./images/10.jpg",
			answer:"Пьяна"
			}
];	

  //устанавливаем имя уровня в локал
let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();
