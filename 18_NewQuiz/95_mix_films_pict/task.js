//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:35,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:10,
//			formatAnswer:"",
			answer:"Леон киллер / Гостья из будущего",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Сияние / Королевство кривых зеркал",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Терминатор/ Приключения Электроника",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Брат / Служебный роман",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Гарри Поттер / Вокзал на двоих"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Бойцовский клуб / Служебный роман",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Фантастические твари и где они обитают/ 17 мгновений весны",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Безумный Макс / Кин-Дза-Дза",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Титаник / Бриллиантовая рука",
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Вий / Пила"
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