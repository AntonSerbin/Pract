//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:35,
			pict:"./images/01.jpg",
// 			audio:"./images/01.mp3",
			secAnswer:15,
//			formatAnswer:"",
			answer:"Танцы минус",
			// pictAnswer: false,
			},
 	task2 = {task:``,
			answer:"Ногу свело",
			}
			,
 	task3 = {task:``,
			answer:"Муми тролль",
			},
 	task4 = {task:``,
			answer:"Би-2"
			},
 	task5 = {task:``,
			answer:"Високосный год",
			},
 	task6 = {task:``,
			answer:"Аквариум",
			},
 	task7 = {task:``,
			answer:"Пикник",
			},
 	task8 = {task:``,
			answer:"Красная плесень",
			},
 	task9 = {task:``,
			answer:"Вопли Видоплясова"
			},
 	task10 = {task:``,
			answer:"Машина времени"
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