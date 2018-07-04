// start tasks 1-3
var parentDiv1 = document.querySelector("#task1Div");
var radioTask2 = document.querySelectorAll("input.radio");
let counterDivTask1 = 0;

	// function to delete old "empty fields
function clearP(){
	var allP=parentDiv1.querySelectorAll('p');
	for (var i= 0; i<allP.length;i++) {
		allP[i].style.display = "none";
	};
};

	// function adding new possition
function addInputTask1(number){
			// add new div
	var divSmall = document.createElement('div');
	divSmall.classList.add("task1");
	divSmall.id = "divNumber"+number;
	parentDiv1.appendChild(divSmall);
		
	// add new inptup inside new div
	var inp = document.createElement('input');
	inp.classList.add("task1");
	inp.value = number;
	divSmall.appendChild(inp);

	//add new button inside new div
	var but = document.createElement('button');
	but.innerHTML="-";
	but.id="number"+number;
	divSmall.appendChild(but);
		
	//function to delete smallDiv(with input and button)
	but.addEventListener('click', function(){
		var nameDiv = "divNumber"+number;
		var divTask1 = document.getElementById(nameDiv);
		parentDiv1.removeChild(divTask1);
	});
};

	// function for the button plus and setting of limit of maximum inputs
var plusTask1 = document.querySelector("button.plus");
plusTask1.addEventListener("click", function(){
 	var inputTask1 = document.querySelectorAll("div.task1");
 	if (inputTask1.length<=7) {
		counterDivTask1++;
		addInputTask1(counterDivTask1);
	}
	else {document.getElementById("resultFieldTask1").innerHTML = `Limit`;
	};
});

	//function to calculate final result
var resultTask1 = document.getElementById("resultTask1");
resultTask1.onclick = function(){
	clearP(); //clean old alert "empty field"
	document.getElementById("resultFieldTask1").innerHTML = "";
	var divSmall = document.createElement('div');
	var inputTask1 = document.querySelectorAll("input.task1");
	
	//check the empty inputs and add new p "empty element"		
	for (var i = 0; i < inputTask1.length; i++) {
		if (inputTask1[i].value==""){
			inputTask1[i].style.borderColor = "red";
			var smallDiv = inputTask1[i].parentNode;
			var textP = document.createElement('p');
			textP.id = "empty";
			textP.innerHTML = "Empty input";
			textP.style.display = "inline";
			smallDiv.appendChild(textP);
		}
		else {inputTask1[i].style.borderColor = "initial"};
		if ((radioTask2[0].checked==true) && (i%2==0)) {
			document.getElementById("resultFieldTask1").innerHTML += `${inputTask1[i].value} `;
		};
		if ((radioTask2[1].checked==true) && (i%2!=0)) {
			document.getElementById("resultFieldTask1").innerHTML += `${inputTask1[i].value} `;
		};
		if (radioTask2[2].checked==true) {
			document.getElementById("resultFieldTask1").innerHTML += `${inputTask1[i].value} `;};
								};
							};
// end tasks 1-3
// task 4 start

var buttontask4 = document.querySelector("#buttonTask4");
var resultFieldTask4 = document.querySelector("#resultFieldTask4");
buttontask4.onclick = function() {
    var optionWindow = window.open("", "optionWindow", "width=250,height=150");
    optionWindow.document.writeln("<p>Choose option:  </p>");
    optionWindow.document.writeln("<button id='windowButton1'>Option1</button>");
    optionWindow.document.writeln("<button id='windowButton2'>Option2</button>");
    var windowButton1 = optionWindow.document.querySelector('#windowButton1');
    var windowButton2 = optionWindow.document.querySelector('#windowButton2');
			
	windowButton1.onclick = function()	{
		resultFieldTask4.innerHTML = "You have choosen option 1";
		optionWindow.close();		
	};

	windowButton2.onclick = function()	{
		resultFieldTask4.innerHTML = "You have choosen option 2";
		optionWindow.close();		
	};
};

// task 4 end; task 5 start								
var liTask5 = document.querySelectorAll(".liTask5");
for (var i=0; i<liTask5.length; i++) {
	liTask5[i].onclick = function(){this.classList.toggle("colorTask5");};
};
var buttonTask5 = document.querySelector("#buttonTask5");
var luTask5 = document.querySelector("#ulTask5");
buttonTask5.addEventListener("click", function(){
	var newLiTask5 = document.createElement('li');
	newLiTask5.onclick = function(){this.classList.toggle("colorTask5");};
	newLiTask5.classList.add = "liTask5";
	newLiTask5.innerHTML = "new element "+ (luTask5.children.length+1);
	luTask5.appendChild(newLiTask5);
});

// task 5 end; task 6 start								
var divTask6 = document.querySelector("#divTask6");
var divText6 = document.querySelector("#divText6");
var counterIn = 0;
var counterOut = 0;
var actionPermission = true;

divTask6.addEventListener("mouseenter", displayBlock);
divTask6.addEventListener("mouseleave", hideBlock);

	

function displayBlock(){
	counterIn++;
		if ((counterIn>counterOut) && (actionPermission==true)) {
			mogno=false;
			divText6.classList.add('displayBlock');
			setTimeout	(function(){	
				actionPermission=true;
				if ((counterIn==counterOut)) {
					counterOut--;
					hideBlock();
				};
			},1500
		);
	};
};

function hideBlock(){
	counterOut++;
		if ((counterIn==counterOut) && (actionPermission==true)){
			actionPermission=false;
			setTimeout	(function()	{
				if (counterIn==counterOut) {
					divText6.classList.remove('displayBlock')
				};
				actionPermission=true;
			},2500
		);
	};
};



// task 6 end; task 7,8 start	
var resultInfo7 = document.querySelector("#resultInfo7");

var images7 = document.querySelectorAll("img");
	for (var i = 0; i < images7.length; i++) {
		images7[i].addEventListener("mouseenter", function(){infoImage(this);});
	};
function infoImage(image){

	resultInfo7.innerHTML = `<b>image link:</b> ${image.currentSrc} <br> <b>image alternative name:</b> ${image.alt}`;
		if (image.currentSrc.length==0 || image.alt.length==0 ){
			resultInfo7.style.color = 'red'; 
			resultInfo7.innerHTML += "    !!!!some parametres are empty!"
		}
		else resultInfo7.style.color = "initial";
		if (image.alt.length==0 ){
			image.style.border = "solid 3px red";
			image.style.opacity = "0.75";
		};
};
var links7 = document.querySelectorAll("a");
for (var i = 0; i < links7.length; i++) {
	links7[i].addEventListener("mouseenter", function(){
		infoLink(this);
	});
};

function infoLink(link){
	resultInfo7.innerHTML = `<b>link title:</b> ${link.title} <br> <b>link target:</b> ${link.target}`;
	if (link.title.length==0 || link.target.length==0 ){
		resultInfo7.style.color = 'red'; 
		resultInfo7.innerHTML += "   !!!!some parametres are empty!"
	}
	else resultInfo7.style.color = "initial";
};
// task 7,8 end; task 9 start	

var buttontask9 = document.querySelector('#buttonTask9');
var buttonDeleteHTask9 = document.querySelector("#buttonDeleteHTask9");
buttontask9.onclick = function(){
	var quantityHTask9 = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
	if (quantityHTask9.length!=0) {
		resultFieldTask9.innerHTML = `Quantity of H : ${quantityHTask9.length} pcs`
	}
	else resultFieldTask9.innerHTML = `There is no H of a page`;
								};
buttonDeleteHTask9.onclick = function(){
	var quantityHTask9 = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
	for (var i = 0; i < quantityHTask9.length; i++) {
		var parent = quantityHTask9[i].parentNode;
		parent.removeChild(quantityHTask9[i]);
	};
};

// task 9 end; task 10 start	
var titleTask10 = document.head.querySelector('title')||false;
var resultTitleTask10 = document.querySelector("#resultTitleTask10");
if (titleTask10==false) 
	{resultTitleTask10.innerHTML = "Title ABSENT";
	resultTitleTask10.style.color = "red";}
	else 
	{resultTitleTask10.innerHTML += `${titleTask10.innerHTML}, length= ${titleTask10.innerHTML.length}` ;
	resultTitleTask10.style.color = "initial";};

var description10 = document.head.querySelector('meta[name=description]')||false;
var resultDescriptionTask10 = document.querySelector("#resultDescriptionTask10");
if (description10==false) 
	{resultDescriptionTask10.innerHTML = "Description ABSENT";
	resultDescriptionTask10.style.color = "red";}
	else 
	{resultDescriptionTask10.innerHTML += `${description10.content}, length= ${description10.content.length}`;
	resultDescriptionTask10.style.color = "initial";};

var keywords10 = document.head.querySelector('meta[name=keywords]')||false;
var resultKeywordsTask10 = document.querySelector("#resultKeywordsTask10");
resultKeywordsTask10.innerHTML += keywords10.content;

