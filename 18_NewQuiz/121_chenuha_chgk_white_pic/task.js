//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:60,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:20,
//			formatAnswer:"",
			answer:"Лопата",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Эйфелевая башня",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Нераскрытым",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Свинья",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Бильярдный стол"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Кровью",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"В темноте",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Колокольня (мы не сеем, мы не пашем, с колокольни х машем)",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Три груди",

			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Робин Гуд",
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