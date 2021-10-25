//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:40,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:20,
//			formatAnswer:"",
			answer:"Жемчужное ожерелье (по форме брызг на партнерше)",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Убить дракона",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Горячий ужин",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Лото-трон (вращаются шары)"
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Делать Сталина (растительность создаёт видимость усов Сталина)",
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Шлёпнуть приведение (похож из-за накидки на приведение)",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Человек-паук",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Делать Бисмарка (его известная фраза 'Железом и кровью')",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Авария на снегоходе"
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Бостонское чаепитие (Teabagging — разновидность орального секса)"
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