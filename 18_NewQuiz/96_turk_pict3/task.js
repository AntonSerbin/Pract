//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:10,
//			formatAnswer:"",
			answer:"Марс атакует!",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Звёздные воины",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Властелин колец",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Граф Дракула"
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Мортал Комбат",
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Космическая одиссея 2001",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Чужой",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Охотники за приведениями",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Семейка Адамсов"
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Большой Любовски"
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