//задания на уровень
let lang="eng";
const pauseAfterTask = 30; //sec пауза после уровня на подумать
const tasks = [
 	task1 = {
			secTask:20,
			audio:"./music/01.mp3",
			secAnswer:10,
			answer:"Pretty woman"},
 	task2 = {
			audio:"./music/02.mp3",
			answer:"Star Wars"}
]			

	//устанавливаем имя уровня в локал
let taskName="";
(()=>{
for (var i = 0; i <document.currentScript.src.length-8; i++) 
	if (document.currentScript.src[i]!="%") taskName+=document.currentScript.src[i]
	else i=i+2;
})();
//устанавливаем title уровня последние 2 символа имени локала
if (!document.querySelector("title").innerHTML) document.querySelector("title").innerHTML="AreYouReady"+taskName.slice(-2);