//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:10,
//			formatAnswer:"",
			answer:"Бетховен",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Бой с тенью",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Ванильное небо",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Форрет Гамп",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Иван Васильевич меняет профессию"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Мистер и миссис Смит",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"1+1",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Доктор Стрэндж",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"500 дней лета",
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Афоня"
			}
];

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();
