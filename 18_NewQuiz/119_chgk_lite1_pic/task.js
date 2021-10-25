//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:45,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:15,
//			formatAnswer:"",
			answer:"Почтальон Печкин",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Сэ́мюэл Мо́рзе ",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Тора",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Группа крови на рукаве",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Маршрутка"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Черный кофе",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Зербы",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Д",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Поле Чудес",

			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Нокдаун / Локдаун",
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