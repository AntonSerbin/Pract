let symbol = "X";
let symbolComp = "O";
let field=[];
let endOfGame=false;
draw=false;

let gong = document.getElementById("myAudio");  gong.volume=0.5;//звук гонга

const symbolButton = document.querySelector("#symbolButton");
const status = document.querySelector("#status");
const restart = document.querySelector("#restart");

field[0] = document.querySelector("#field0");
field[1] = document.querySelector("#field1");
field[2] = document.querySelector("#field2");
field[3] = document.querySelector("#field3");
field[4] = document.querySelector("#field4");
field[5] = document.querySelector("#field5");
field[6] = document.querySelector("#field6");
field[7] = document.querySelector("#field7");
field[8] = document.querySelector("#field8");


let statesOfMoves = [null,null,null,null,null,null,null,null,null];
let compMovesStand = [4,0,2,6,8,1,3,5,7];
let winPossition= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let compMoves;
let randomElem; let inputElem;


symbolButton.addEventListener("click",()=>{
	switch (symbol){
		case "X": symbol="O";
				symbolComp="X";
				symbolButton.innerHTML="O";
				break;
		case "O": symbol="X";
				symbolComp="O";
				symbolButton.innerHTML="X";
				break;
	};
	restartFoo();
});

function newCompMoves(){
	compMoves = [4];
	while (compMoves.length<=8) {
		randomElem= Math.floor(Math.random() * 12);
		switch(randomElem) {  //что больше занимал угловых
			case 9: randomElem=0; break;
			case 10: randomElem=2; break;
			case 11: randomElem=6; break;
			case 12: randomElem=8; break;
		};
		inputElem=true;
		compMoves.map((el)=>{
			if (el==randomElem) inputElem=false
		});
		if (inputElem) compMoves.push(randomElem);
	}

};
//рендерим ходы
newCompMoves();
console.log("compMoves",compMoves);

//прописываем события на все клавиши через цикл
for (let j=0; j<=8; j++) {
	field[j].addEventListener("click", ()=>{
	if (statesOfMoves[j]==null&&!endOfGame) {
		field[j].innerHTML=symbol;
		statesOfMoves[j]=10;
		computerMove();
		}
	});
}


//кнопка резет
restart.addEventListener("click", ()=>restartFoo());

function restartFoo(){
	newCompMoves();
	console.log("compMoves",compMoves);


	endOfGame=false;
	status.innerHTML = "Your move"
	field.map((o,i)=>{
		statesOfMoves[i]=null;
		field[i].innerHTML="&nbsp;";
	});
	if (symbolComp=="X") computerMove();

};


function computerMove() {
	checkWin ();
	lastMoveLoose();
	lastMoveWin();
	moveOn=true;
	console.log("compMoves",compMovesStand);

	compMoves.map((el)=>{
		if (statesOfMoves[el]==null&&moveOn==true&&!endOfGame) {
			field[el].innerHTML=symbolComp;
			statesOfMoves[el]=3;
			moveOn=false;
		}; 
	});
	checkWin ();
};


function lastMoveLoose(){
	winPossition.map((mas)=>{
		let sum = 0;
		mas.map((data)=>sum += statesOfMoves[data]);
		if (sum==20) {
			mas.map((data)=>compMoves.unshift(data));
			console.log("compMovesStand",compMovesStand);
		};
	});
};

function lastMoveWin(){
	winPossition.map((mas)=>{
		let sum = 0;
		mas.map((data)=>sum += statesOfMoves[data]);
		if (sum==6) {
			mas.map((data)=>compMoves.unshift(data));
			console.log("compMovesStand",compMovesStand);
		};
	});
};


function checkWin () {
	winPossition.map((mas)=>{
		let sum = 0;
		mas.map((data)=>sum += statesOfMoves[data]);
		if (sum==30) {
			status.innerHTML="You win!";
			endOfGame = true;
		};
		if (sum==9) {
			status.innerHTML="Comp win!";
			endOfGame=true;
		};

		draw=true;
		statesOfMoves.map((el)=> {if (el==null) draw=false});
		if (draw&&!endOfGame) {
			status.innerHTML="Draw!";
			endOfGame=true;
		};
	})

	if (endOfGame) {
		setTimeout(()=>restartFoo(),1500);
		setTimeout(()=>gong.play(),1000);;

	};

};
