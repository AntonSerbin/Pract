//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.png",
			// audio:"./images/01.mp3",
			secAnswer:30,
//			formatAnswer:"",
			answer:"Изгой",
			pictAnswer: true
			},
 	task2 = {task:``,
			pict:"./images/02.png",
			answer:"В джазе только девушки",
			pictAnswer: true

			}
			,
 	task3 = {task:``,
			pict:"./images/03.png",
			answer:"Кавказская пленница",
			pictAnswer: true,

			},
 	task4 = {task:``,
			pict:"./images/04.png",
			pictAnswer: true,

			answer:"Интерстеллар"
			},
 	task5 = {task:``,
			pict:"./images/05.png",
			pictAnswer: true,

			answer:"В бой идут одни старики",
			},
 	task6 = {task:``,
			pict:"./images/06.png",
			pictAnswer: true,

			answer:"Криминальное чтиво",
			},
 	task7 = {task:``,
			pict:"./images/07.png",
			pictAnswer: true,

			answer:"Побег из Шоушенка",
			},
 	task8 = {task:``,
			pict:"./images/08.png",
			pictAnswer: true,

			answer:"Бойцовский клуб",
			},
 	task9 = {task:``,
			pict:"./images/09.png",
			pictAnswer: true,
			answer:"Гладиатор"
			},
 	task10 = {task:``,
			pict:"./images/10.png",
			pictAnswer: true,
			answer:"Пираты Карибского моря"
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
			obj.pictAnswer= obj.pict.replace('.png','a.png').replace('.jpeg','a.jpeg');
			// console.log(obj.pictAnswer);
		};
	});
};

addressAnswer(tasks);

tasks.map((e)=>console.log(e.answer))