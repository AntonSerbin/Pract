//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30,
			pict:"./images/01.jpg",
// 			audio:"./images/01.mp3",
			secAnswer:15,
//			formatAnswer:"",
			answer:"а Квирелл",
			// pictAnswer: false,
			},
 	task2 = {task:``,
			answer:"б Форд",
			}
			,
 	task3 = {task:``,
			answer:"г олень",
			},
 	task4 = {task:``,
			answer:"б ночной рыцарь"
			},
 	task5 = {task:``,
			answer:"б Долгопупс",
			},
 	task6 = {task:``,
			answer:"б квирелл",
			},
 	task7 = {task:``,
			answer:"б грюм",
			},
 	task8 = {task:``,
			answer:"в ладья",
			},
 	task9 = {task:``,
			answer:"в силки"
			},
 	task10 = {task:``,
			answer:"в сириусу"
			},
	task11 = {task:``,
			answer:"г норрис",
			},	
	task12 = {task:``,
			answer:"г дадли",
			},
 	task13 = {task:``,
			answer:"в шалость удалась",
			},
 	task14 = {task:``,
			answer:"б привидение"
			},
 	task15 = {task:``,
			answer:"б слизнорт",
			},
 	task16 = {task:``,
			answer:"а историю",
			},
 	task17 = {task:``,
			answer:"Б книга, Г фильм",
			},
 	task18 = {task:``,
			answer:"в пророк",
			},
 	task19 = {task:``,
			answer:"г хэллоуин"
			},
 	task20 = {task:``,
			answer:"б растение"
		},	
	task21 = {task:``,
			answer:"г удачи",
			},	
	task22 = {task:``,
			answer:"в владелец",
			},
 	task23 = {task:``,
			answer:"г чистая кровь",
			},
 	task24 = {task:``,
			answer:"б гриффона"
			},
 	task25 = {task:``,
			answer:"в гермиона",
			},
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