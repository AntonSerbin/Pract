//задания на уровень
let taskName = "";
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30 ,
			audio:"./music/01.mp3",
			secAnswer:10,
			answer:"Самолёт"
},
 	task2 = {task:``,
			audio:"./music/02.mp3",
			secTask:30,
			answer:"Бумер"
},
 	task3 = {task:``,
			secTask:30,
			audio:"./music/03.mp3",
			answer:"Велосипед (Bicycle)"
},
 	task4 = {task:``,
			secTask:30,
			audio:"./music/04.mp3",
			answer:"Веслосипед"
},
 	task5 = {task:``,
			secTask:30,
			audio:"./music/05.mp3",
			answer:"Байк(мотоцикл), Лимузин"
},
 	task6 = {task:``,
			secTask:30,
			audio:"./music/06.mp3",
			answer:"Паровоз"
},
 	task7 = {task:``,
			secTask:30,
			audio:"./music/07.mp3",
			answer:"Ковер-самолет, Ковер-вертолет"
},
 	task8 = {task:``,
			secTask:30,
			audio:"./music/08.mp3",
			answer:"Такси"
},
 	task9 = {task:``,
			secTask:30,
			audio:"./music/09.mp3",
			answer:"Лада Седан"
},
 	task10 = {task:``,
			secTask:30,
			audio:"./music/10.mp3",
			answer:"Подводная лодка"
}
]			

tasks.map((e)=>console.log(e.answer))