//задания на уровень
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task13 = {task:``,
			pict:"./images/13.jpg",
			answer:"Судья Дред",
			secAnswer:10,
			secTask:20
			},
 	task14 = {task:``,
			pict:"./images/14.jpg",
			answer:"Кошмар на улице Вязов",
			},
 	task15 = {task:``,
			pict:"./images/15.jpg",
			answer:"Брат"
			},
 	task16 = {task:``,
			pict:"./images/16.jpg",
			answer:"Бегущий по лезвию",
			},
 	task17 = {task:``,
			pict:"./images/17.jpg",
			answer:"Джентльмены удачи",
			},
 	task18 = {task:``,
			pict:"./images/18.jpg",
			answer:"Ночной дозор",
			},
 	task19 = {task:``,
			pict:"./images/19.jpg",
			answer:"Терминатор",
			},
 	task20 = {task:``,
			pict:"./images/20.jpg",
			answer:"Кикбоксер"
			},
	task21 = {task:``,
			pict:"./images/21.jpg",
			answer:"Парк Юрского периода"
			},
	task22 = {task:``,
			pict:"./images/22.jpg",
			answer:"Красная жара",
			},
 	task23 = {task:``,
			pict:"./images/23.jpg",
			answer:"Мортал комбат",
			},
 	task24 = {task:``,
			pict:"./images/24.jpg",
			answer:"Мгла(туман)",
			}
];

let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
  if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
  else i=i+2;
})();

