//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
			pictAnswer: true,
			// audio:"./images/01.mp3",
			secAnswer:12,
//			formatAnswer:"",
			answer:"Леонтьев",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"ВИА Гра",
			pictAnswer: true
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Лепс",
						pictAnswer: true
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Rolling Stones",
						pictAnswer: true
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Чистяков",
						pictAnswer: true
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"А.Барыкин",
						pictAnswer: true
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Ленинград",
						pictAnswer: true
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Б.Моисеев",
						pictAnswer: true
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Ария",
						pictAnswer: true
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
						pictAnswer: true,
			answer:"Red Hot Chilly Peppers"
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
