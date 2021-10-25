//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:70,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:30,
//			formatAnswer:"",
			answer:"Cмотреть трейлер фильма 'Гарри Поттер и тайная комната'",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Сова",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Фантастические твари и места где они обитают",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Полукровка"
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Отправлял почту (Пол совятника в Хогвартсе был усеян костями мелких животных, которыми питались почтовые совы)",
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Пушок",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Архимед (заклинание - Эврика)",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Мантию невидимки",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Шахматы"
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Победа сборной Англии в чемпионате мира по футболу"
		}
];

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();

function addressAnswer(arr){
	arr.map((obj)=> {
		if (obj.pictAnswer==true) {
			obj.pictAnswer= obj.pict.replace('.jpg','a.jpg').replace('.png','a.png').replace('.jpeg','a.jpeg');
			console.log(obj.pictAnswer);
		};
	});
};

addressAnswer(tasks);

tasks.map((e)=>console.log(e.answer))