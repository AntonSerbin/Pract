let string="";
let action ="";
let number1=0, nubmer2=0, afterEqual = true;

let stringCalc = document.querySelector("#stringCalc");
const button0 = document.querySelector("#button0");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");
const buttonDiv = document.querySelector("#buttonDiv");
const buttonMult = document.querySelector("#buttonMult");
const buttonMinus = document.querySelector("#buttonMinus");
const buttonReset = document.querySelector("#buttonReset");
const buttonPlus = document.querySelector("#buttonPlus");
const buttonEqual = document.querySelector("#buttonEqual");

button0.addEventListener("click", ()=>func_button(0));
button1.addEventListener("click", ()=>func_button(1));
button2.addEventListener("click", ()=>func_button(2));
button3.addEventListener("click", ()=>func_button(3));
button4.addEventListener("click", ()=>func_button(4));
button5.addEventListener("click", ()=>func_button(5));
button6.addEventListener("click", ()=>func_button(6));
button7.addEventListener("click", ()=>func_button(7));
button8.addEventListener("click", ()=>func_button(8));
button9.addEventListener("click", ()=>func_button(9));
buttonPlus.addEventListener("click", ()=>func_button("+"));
buttonMinus.addEventListener("click", ()=>func_button("-"));
buttonDiv.addEventListener("click", ()=>func_button("/"));
buttonMult.addEventListener("click", ()=>func_button("*"));
buttonEqual.addEventListener("click", ()=>func_button("="));

buttonReset.addEventListener("click", ()=>func_button("C"));



function func_button(el){
	


	if ((el<=9)&&(el>=0)&&(afterEqual==false)) {
		string=string+el;
	};
	
	if ((el<=9)&&(el>=1)&&(afterEqual==true)) {
		string=""+el;
		afterEqual = false;
	};


	if ((el=="=")&&(afterEqual==true)) {
		number1 = Number(string);
		if (action=="+") string = (number1+number2).toString();
		if (action=="-") string = (number1-number2).toString();			
		if (action=="*") string = (number1*number2).toString();			
		if (action=="/") string = (number1/number2).toString();
		afterEqual = true;			
	};
	
	if (((el=="=")||(el=="*")||(el=="/")||(el=="+")||(el=="-"))&&(afterEqual==false)) {
		number2 = Number(string);
		if (action=="+") string = (number1+number2).toString();
		if (action=="-") string = (number1-number2).toString();			
		if (action=="*") string = (number1*number2).toString();			
		if ((action=="/")&&(number2!=0)) string = (number1/number2).toString();
		if ((action=="/")&&(number2==0)) string = "devide 0";
		afterEqual = true;			
	};


	if (el=="C") {
		number1=0; number2=0; action=""; string=""; afterEqual = true;
	}

	if (string.length<=12) stringCalc.innerHTML = string
		else stringCalc.innerHTML = parseFloat(string).toFixed(12);
	if (Number(string)>999999999999) stringCalc.innerHTML = "Too big number";
	if (Number(string)<0.0000001) {string="";stringCalc.innerHTML ="0";number1=0; 
};



	if (el=="+") {
		number1 = Number(string);
		string = "";
		action = "+";
		afterEqual = false;
	};
	if (el=="-") {
		number1 = Number(string);
		string = "";
		action = "-";
		afterEqual = false;
	};	
	if (el=="*") {
		number1 = Number(string);
		string = "";
		action = "*";
		afterEqual = false;
	};
	if (el=="/") {
		number1 = Number(string);
		string = "";
		action = "/";
		afterEqual = false;
	};
};
