//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:40,
			pict:"./images/01.jpg",
			pictAnswer: true,
			// audio:"./images/01.mp3",
			secAnswer:12,
//			formatAnswer:"",
			answer:"Вьетнамки/ А или Б",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Болгарка / А или Г",
			pictAnswer: true
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Эпидемия Испанка / А или Б",
						pictAnswer: true
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Ткань шотландка / В",
						pictAnswer: true
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Панама / А или В",
						pictAnswer: true
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Финка / В",
						pictAnswer: true
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Танец Полька / А",
						pictAnswer: true
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Турка / А",
						pictAnswer: true
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Бильярд Американка (Россия не засчитывается) / А или В",
						pictAnswer: true
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
						pictAnswer: true,
			answer:"Стрижка Канадка / А"
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