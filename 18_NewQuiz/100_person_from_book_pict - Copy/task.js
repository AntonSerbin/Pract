//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:40,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:30,
//			formatAnswer:"",
			answer:"Бендер Остап Ибрагимович (12 стульев)",
			pictAnswer: false
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Родион Раскольников (Преступление и наказание)",
			pictAnswer: false

			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Коровьев, Фагот (Мастер и Маргарита)",
			pictAnswer: false,

			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			pictAnswer: false,

			answer:"Тирион Ланнистер (Игра Перстолов)"
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			pictAnswer: false,

			answer:"Незнайка",
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			pictAnswer: false,

			answer:"Наташа Ростова",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			pictAnswer: false,

			answer:"Джеймс Бонд",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			pictAnswer: false,

			answer:"Эдвард Каллен (Сумерки)",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			pictAnswer: true,

			answer:"Джон Коффи (Зеленая Миля)"
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			pictAnswer: false,

			answer:"Гендельф (Властелин колец)"
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
		if (obj.pictAnswer!=false) {
			obj.pictAnswer= obj.pict.replace('.jpg','a.jpg').replace('.jpeg','a.jpeg');
			console.log(obj.pictAnswer);
		}
		if (obj.pictAnswer==false) {
			obj.pictAnswer= obj.pict.replace('.jpg','.jpg').replace('.jpeg','.jpeg');
			console.log(obj.pictAnswer);
		}
	});
};

addressAnswer(tasks);

tasks.map((e)=>console.log(e.answer))