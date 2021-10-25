//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:50,
			pict:"./images/01.jpg",
// 			audio:"./images/01.mp3",
			secAnswer:15,
//			formatAnswer:"",
			answer:"Дед Мороз",
			// pictAnswer: false,
			},
 	task2 = {task:``,
			answer:"Хаки",
			}
			,
 	task3 = {task:``,
			answer:"Аргентина (манит негра)",
			},
 	task4 = {task:``,
			answer:"Красный (половое созревание)"
			},
 	task5 = {task:``,
			answer:"Пират",
			},
 	task6 = {task:``,
			answer:"Селедка под шубой",
			},
 	task7 = {task:``,
			answer:"Шашлычный (мясной)",
			},
 	task8 = {task:``,
			answer:"Пол Дожрдж / Дожрдж Пол (Имена четверки Битлс)",
			},
 	task9 = {task:``,
			answer:"сурдо"
			},
 	task10 = {task:``,
			answer:"композитор Максим Дунаевский"
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