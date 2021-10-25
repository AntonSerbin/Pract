//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:20,
			pict:"./images/01.jpg",
// 			audio:"./images/01.mp3",
			secAnswer:10,
//			formatAnswer:"",
			answer:"Дюна",
			// pictAnswer: false,
			},
 	task2 = {task:``,
			answer:"Наші котики",
			}
			,
 	task3 = {task:``,
			answer:"Джентльмены",
			},
 	task4 = {task:``,
			answer:"Соник в кино ('Соник' идет в зачёт)"
			},
 	task5 = {task:``,
			answer:"Борат 2",
			},
 	task6 = {task:``,
			answer:"Топ Ган 2",
			},
 	task7 = {task:``,
			answer:"Черная вдова",
			},
 	task8 = {task:``,
			answer:"Мулан",
			},
 	task9 = {task:``,
			answer:"Блад Шот"
			},
 	task10 = {task:``,
			answer:"Ведьмак"
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


tasks.map((el,num)=>{
	if (num<=8) tasks[num].pict = `./images/0${num+1}.jpg`;
	if (num>=9) tasks[num].pict = `./images/${num+1}.jpg`;

})

addressAnswer(tasks);

tasks.map((e)=>console.log(e.answer))

console.log('tasks',tasks);