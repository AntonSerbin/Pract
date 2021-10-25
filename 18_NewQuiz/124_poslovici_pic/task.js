//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:55,
			pict:"./images/01.jpg",
			// audio:"./images/01.mp3",
			secAnswer:20,
//			formatAnswer:"",
			answer:"Бог не выдаст, свинья не съест",
			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Любишь кататься, люби и саночки возить",
			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Собака лает - ветер носит",
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Дуракам закон не писан",
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Терпение и труд всё перетрут"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Если бы да кабы, да во рту выросли грибы",
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Смотрю книгу - вижу фигу",
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"Первый блин - комом",
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"Жёны писателей, мужья дочерей писателей",

			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			answer:"Не всё то золото, что блестит",
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