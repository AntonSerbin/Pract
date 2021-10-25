//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:55,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:20,
//			formatAnswer:"",
			answer:"Скамейке запасных",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Дзюба",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Ощущается",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Хлопок",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Кончита Вурст"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Скоростной спуск",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			formatAnswer:"Буквы М и Л",
			answer:"Моника Левински",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"На балу",
			},
 	task9 = {task:``,
			pict:"./images/10.jpg",
			answer:"Жёны писателей, мужья дочерей писателей",

			},
 	task10 = {task:``,
			pict:"./images/09.jpg",
			answer:"Звонок другу",
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