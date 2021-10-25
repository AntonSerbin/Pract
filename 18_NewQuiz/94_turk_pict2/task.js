//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:10,
//			formatAnswer:"",
			answer:"Индиана Джонс и последний крестовый поход",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Марсианин",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Аватар",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Выживший",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Гарри Поттер"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Инопланетянин",
			pictAnswer:true
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Эдвард руки-ножницы",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"От заката до рассвета",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Изгой",
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Титаник"
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