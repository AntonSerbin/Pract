var target1 = document.getElementById("squareTask1");

target1.addEventListener('mousemove', function(event){
	var x = event.clientX;
	var y = event.clientY;
	document.getElementById("coordinatesTask1").innerHTML= "Coordinates: x="+ x + "  y=" + y +" ;";
		});

// <!-- end Task1	 -->

document.getElementById('squareTask2').addEventListener(`dblclick`,function()
		{document.getElementById('squareTask2').classList.toggle('opened');
		});
				
// <!-- end Task2	 -->

function myFunction3() {
for (var counter3 = 0; (counter3*30*30) < (900*300); counter3++) {
document.getElementById("squareTask3").innerHTML += 
'<div id="squareSmallTask3" class="squareSmallTask3" onmousemove=myFunctionRound3(this)><div>'}
};
myFunction3();  
	function myFunctionRound3(square) {
		square.classList.add("roundSmallTask3");
			
							};
// <!-- end Task3	 -->

function ImageTask4(imgName){
		document.getElementById("square4").style.backgroundImage = "url('"+imgName+"')";
						};

// <!-- end Task4	 -->
var task5coordinateX=500;
var target5 = document.getElementById("square5");
target5.addEventListener("click", function(){
			if(task5coordinateX>=100) {task5coordinateX-= 100}
			else {task5coordinateX+=5};
		    target5.style.left = task5coordinateX+'px';
	});

target5.addEventListener("contextmenu", function(event){
 			event.preventDefault();
			if(task5coordinateX<=900) {task5coordinateX+= 100}
				else {task5coordinateX-=5};
		    target5.style.left = task5coordinateX+'px';	
		    }
		    		    );


// <!-- end Task 5	 -->
var counter6=0;
var target6  = document.getElementById("orangeBlock6");
target6.addEventListener("click", function(){
			counter6++;
			if (counter6==1) {target6.style.left = '75px';};
			if (counter6==2) {target6.style.left = '155px';};
			if (counter6==3) {target6.style.left = '5px';
			counter6=0};
			document.getElementById("result6").innerHTML = 'Result: ' + counter6;
		});
