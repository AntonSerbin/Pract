//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
			//pictAnswer: false,
			// audio:"./images/01.mp3",
			secAnswer:12,
//			formatAnswer:"",
			answer:"М.Булгаков «Мастер и Маргарита»",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"М.Шолохов «Тихий Дон»",
			// pictAnswer: true
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"А.Островский «Бесприданница»",
						// pictAnswer: true
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"И.Ильф и Е.Петров «12 стульев»",
						// pictAnswer: true
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Л.Толстой «Война и мир»",
						// pictAnswer: true
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"М.Лермонтов «Герой нашего времени»",
						// pictAnswer: true
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"М.Достаевский «Идиот»",
						// pictAnswer: true
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Н.Гоголь «Вечера на хуторе близ Диканьки»",
						// pictAnswer: true
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"И.Крылов «Квартет»",
						// pictAnswer: true
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
						// pictAnswer: false,
			answer:"Братья Стругацкие «Обитаемый остров»"
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
			// console.log(obj.pictAnswer);
		};
	});
};

addressAnswer(tasks);

