const inputs = document.querySelectorAll("input");
const resultButton = document.querySelector("#resultButton");
const resultIndicator = document.querySelector("#resultIndicator");
const attempts = document.querySelector("#attempts");
let counterAttempts = 0;


massiveAnswers = {
Answer1: ["НАС НЕ ДОГОНЯТ","ТАТУ"],
Answer2: ["БЕЛЫЕ РОЗЫ","ЛАСКОВЫЙ МАЙ"],
Answer3: ["ГРИБЫ","МЕЖДУ НАМИ ТАЕТ ЛЕД","ТАЕТ ЛЕД","ТАЕТ ЛЁД","МЕЖДУ НАМИ ТАЕТ ЛЁД"],
Answer4: ["БАТАРЕЙКА","ЖУКИ"],
Answer5: ["КУКУШКА", "ВИКТОР ЦОЙ","ЦОЙ","ПОЛИНА ГАГАРИНА","ГАГАРИНА"],
Answer6: ["ЧЁРНЫЙ БУМЕР","ЧЕРНЫЙ БУМЕР","СЕРЕГА","СЕРЁГА"],
Answer7: ["ВИТЕ НАДО ВЫЙТИ","ESTRADARADA","ЭСТРАДАДА"],
Answer8: ["АЛЛИЛУЙЯ","АЛЛИЛУЯ","HALLELUJAH","HALELUJAH","КОЭН", "COHEN", "КЕЙЛ", "CALE", "БОБ ДИЛАН", "ДИЛАН", "БОН ДЖОВИ", "ДЖОВИ", "BON JOVI","JOVI"],
Answer9: ["СКАЙФОЛЛ","АДЕЛЬ","SKYFALL","ADELE"],
Answer10: ["ЭКСПОНАТ","ЛЕНИНГРАД","НА ЛАБУТЕНАХ"]};

massiveInputs = [];
resultButton.addEventListener("click", ()=>checkResults());

	
function checkResults(){
	massiveInputs = [];
	let res = 0;
	inputs.forEach((input)=>{
		let test = massiveAnswers[input.name].indexOf(input.value.toUpperCase()) != -1 ;
		console.log("classlist before", input);
		if (test) {
			input.classList.add("correctInput"); 
			res++}
			else input.classList.remove("correctInput");
	});
	console.log(resultIndicator);
	if (counterAttempts<=2) {
		counterAttempts++;
		resultIndicator.innerHTML=`Правильных ответов: ${res} из 10` 
		attempts.innerHTML= `Попытка: ${counterAttempts} из 3 `;
	}
	if (res==10) resultIndicator.innerHTML=`ВСЕ ОТВЕТЫ ВЕРНЫЕ!!!`;
};


console.table(massiveAnswers);


//