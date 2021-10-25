//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:30,
//			formatAnswer:"",
			answer:"Улица разбитых фонарей",
			pictAnswer: this.pict
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Ходячие мертвецы",
			pictAnswer: this.pict
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Настоящий детектив",
			pictAnswer: this.pict,

			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			pictAnswer: this.pict,

			answer:"Черное зеркало"
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			pictAnswer: this.pict,

			answer:"Теория большого взрыва",
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			pictAnswer: this.pict,

			answer:"Отчаянные домохозяйки",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			pictAnswer: this.pict,

			answer:"Как я встретил вашу маму",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			pictAnswer: this.pict,

			answer:"Очень странные дела",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			pictAnswer: this.pict,
			answer:"Доктор Хаус"
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			pictAnswer: this.pict,
			answer:"Карточный домик"
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
			obj.pictAnswer= obj.pict.replace('.jpg','a.jpg').replace('.jpeg','a.jpeg');
			// console.log(obj.pictAnswer);
		};
	});
};

addressAnswer(tasks);

tasks.map((e)=>console.log(e.answer))