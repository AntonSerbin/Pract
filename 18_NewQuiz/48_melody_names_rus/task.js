//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {task:``,
			secTask:30 ,
			audio:"./music/01.mp3",
			secAnswer:10,
			answer:"Стен"
},
 	task2 = {task:``,
			audio:"./music/02.mp3",
			// secAnswer: ,
			answer:"Катя"
},
 	task3 = {task:``,
			// secTask: 5,
			audio:"./music/03.mp3",
			answer:"Алина (Кабаева)"
},
 	task4 = {task:``,
			// secTask: 4,
			audio:"./music/04.mp3",
			answer:"Рома"
},
 	task5 = {task:``,
			// secTask: 2,
			audio:"./music/05.mp3",
			answer:"Сирёжа"
},
 	task6 = {task:``,
			// secTask: 10,
			audio:"./music/06.mp3",
			answer:"Алехандро, Фернандо, Роберто"
},
 	task7 = {task:``,
			// secTask: 10,
			audio:"./music/07.mp3",
			answer:"Виктор"
},
 	task8 = {task:``,
			// secTask: 15,
			audio:"./music/08.mp3",
			answer:"Алексей"
},
 	task9 = {task:``,
			// secTask:45,
			audio:"./music/09.mp3",
			answer:"Виктрория, Вика"
},
 	task10 = {task:``,
			// secTask: 15,
			audio:"./music/10.mp3",
			answer:"Антон"
}
];		

  //устанавливаем имя уровня в локал
let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();


tasks.map((e)=>console.log(e.answer))