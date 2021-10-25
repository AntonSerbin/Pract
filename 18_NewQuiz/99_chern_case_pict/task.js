//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:70,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:30,
//			formatAnswer:"",
			answer:"Пустыня",
			pictAnswer: true
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Сахар",
			pictAnswer: true

			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"t",
			pictAnswer: true,

			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			pictAnswer: true,

			answer:"деньги"
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			pictAnswer: true,

			answer:"",
			secTask:80,
			secAnswer:10,
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			pictAnswer: true,
			secTask:10,
			secAnswer:10,
			answer:"",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			pictAnswer: true,
			secTask:10,
			secAnswer:10,
			answer:"",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			pictAnswer: true,
			secTask:10,
			secAnswer:10,
			answer:"",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			pictAnswer: true,
			secTask:10,
			secAnswer:10,
			answer:""
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			pictAnswer: true,
			secTask:10,
			secAnswer:10,
			answer:""
		},
 	task11 = {task:``,
			pict:"./images/11.jpg",
			pictAnswer: true,
			secTask:10,
			secAnswer:10,
			answer:""
		},
 	task12 = {task:``,
			pict:"./images/12.jpg",
			pictAnswer: true,
			secTask:10,
			secAnswer:10,
			answer:""
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