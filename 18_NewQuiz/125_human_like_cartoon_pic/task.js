//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:20,
			pict:"./images/01.jpg",
			pictAnswer: "./images/01a.jpg",
			// audio:"./images/01.mp3",
			secAnswer:12,
//			formatAnswer:"",
			answer:"",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			pictAnswer: "./images/02a.jpg",
			answer:"",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			pictAnswer: "./images/03a.jpg",
			answer:"",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			pictAnswer: "./images/04a.jpg",
			answer:"",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			pictAnswer: "./images/05a.jpg",
			answer:"",
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			pictAnswer: "./images/06a.jpg",
			answer:"",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			pictAnswer: "./images/07a.jpg",
			answer:"",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			pictAnswer: "./images/08a.jpg",
			answer:"",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			pictAnswer: "./images/09a.jpg",
			answer:"",

			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			pictAnswer: "./images/10a.jpg",
			answer:"",
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