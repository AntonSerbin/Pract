//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:50,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:10,
			formatAnswer:"Два слова",
			answer:"Глаз-алмаз",
			},
 	task2 = {task:``,
 			formatAnswer:"Одно слово",
			pict:"./images/02.jpg",
			answer:"Лес рук",
			}
			,
 	task3 = {task:``,
 		 	formatAnswer:"3-4 слова",
			pict:"./images/03.jpg",
			answer:"Попал (прямо) в яблочко",
			},
 	task4 = {task:``,
			formatAnswer:"Два слова",
			pict:"./images/04.jpg",
			answer:"Москвич",
			},
 	task5 = {task:``,
 			formatAnswer:"Одно слово",
			pict:"./images/05.jpg",
			answer:"Испортился"
			},
 	task6 = {task:``,
 			formatAnswer:"Два слова",
			pict:"./images/06.jpg",
			answer:"Крутятся бабки",
			},
 	task7 = {task:``,
 			formatAnswer:"Два слова",
			pict:"./images/07.jpg",
			answer:"Зубки режутся",
			},
 	task8 = {task:``,
 			formatAnswer:"Три слова",
			pict:"./images/08.jpg",
			answer:"На короткой ноге",
			},
 	task9 = {task:``,
 			formatAnswer:"Два слова",
			pict:"./images/09.jpg",
			answer:"Большой человек",
			},
 	task10 = {task:``,
 			formatAnswer:"Два слова",
			pict:"./images/10.jpg",
			answer:"Молоко сбежало"
			}
];	

  //устанавливаем имя уровня в локал
let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();
