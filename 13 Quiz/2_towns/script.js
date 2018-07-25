
const inputs = document.querySelectorAll("input");
const resultButton = document.querySelector("#resultButton");
const resultIndicator = document.querySelector("#resultIndicator");
const attempts = document.querySelector("#attempts");
let counterAttempts = 0;


massiveAnswers = {
Answer1: ["ПОРТУ"],
Answer2: ["АНТАЛИЯ"],
Answer3: ["РИМ"],
Answer4: ["СТАМБУЛ"],
Answer5: ["АФИНЫ"],
Answer6: ["МЕЛЬБУРН"],
Answer7: ["ВАРНА"],
Answer8: ["БЕРЛИН"],
Answer9: ["ПОЛТАВА"],
Answer10: ["ДЖАКАРТА"]};

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
