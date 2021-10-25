//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:40,
			pict:"./images/01.jpg",
			secAnswer:12,
			answer:"Логика",
			pictAnswer: true,
			formatAnswer:"одно слово на русском языке",

			},
 	task2 = {task:``,
			pict:"./images/02.jpg",
			answer:"Глазульня",
			pictAnswer: true,
			formatAnswer:"Одно слово на русском, название блюда"

			}
			,
 	task3 = {task:``,
			pict:"./images/03.jpg",
			answer:"Летним",
			pictAnswer: true,
			formatAnswer:"Одно слово на русском языке"
			},
 	task4 = {task:``,
			pict:"./images/04.jpg",
			answer:"Голова, рука принцессы",
			pictAnswer: true,
			formatAnswer:"Три слова на русском языке"
			},
 	task5 = {task:``,
			pict:"./images/05.jpg",
			answer:"Черный квадрат",
			pictAnswer: true,
			formatAnswer:"Графический символ"
			},
 	task6 = {task:``,
			pict:"./images/06.jpg",
			answer:"Меня нет",
			pictAnswer: true,
			formatAnswer:"Два слова на русском языке"
			},
 	task7 = {task:``,
			pict:"./images/07.jpg",
			answer:"Яблоко",
			pictAnswer: true,
			formatAnswer:"Что на подносе? Одно слово на русском языке"
			},
 	task8 = {task:``,
			pict:"./images/08.jpg",
			answer:"вылитый",
			pictAnswer: true,
			formatAnswer:"Cловo на русском языке"
			},
 	task9 = {task:``,
			pict:"./images/09.jpg",
			answer:"under Control, под контролем",
			pictAnswer: true,
			formatAnswer:"Два слова на АНГЛИЙСКОМ языке"
			},
 	task10 = {task:``,
			pict:"./images/10.jpg",
			pictAnswer: true,
			formatAnswer:"Два глагола на русском языке",
			answer:"пишет, потанцевать"
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