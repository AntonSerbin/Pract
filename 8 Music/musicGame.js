let button=[];
let sounds=[];
let moves=[];
let counter;
let startMove;
let humanMove = 0;
let strMode = false;
let win=true;
let pause=1000;

const start = document.querySelector("#start");
let indicator = document.querySelector("#indicator");
let restart = document.querySelector("#restart");
let strictMode = document.querySelector("#strictMode");

button[0] = document.querySelector("#button0");
button[1] = document.querySelector("#button1");
button[2] = document.querySelector("#button2");
button[3] = document.querySelector("#button3");

sounds[0] = new Audio('https://dl-web.dropbox.com/get/fe/practice/MusicGame/sound1.wav?_subject_uid=695051359&amp;duc_id=dropbox_duc_id&amp;w=AACiHfNmfUhQ2mzAWdudl-6J0R4u-s1_mAv9Xim3RTooag');
sounds[1] = new Audio('https://dl-web.dropbox.com/get/fe/practice/MusicGame/sound2.wav?_subject_uid=695051359&duc_id=dropbox_duc_id&w=AADN9l0D3ijiIPXeeKTKij4kecqb4xrbm9GGsSSJ9dw4rQ');
sounds[2] = new Audio("https://dl-web.dropbox.com/get/fe/practice/MusicGame/sound3.wav?_subject_uid=695051359&duc_id=dropbox_duc_id&w=AADNI0vsrgRcPdlPNFRgYAooyteV6B3KIIbWIkF4GQZlyQ");
sounds[3] = new Audio('https://dl-web.dropbox.com/get/fe/practice/MusicGame/sound4.wav?_subject_uid=695051359&duc_id=dropbox_duc_id&w=AAAmq-KaXzMX4rJzhnV7m6uZS1rnwhaaDnyBO79VX0TbhA');

sounds.map((el)=>el.volume=0.6);
sounds.map((el)=>el.loop=false);

strictMode.addEventListener("click", ()=>{
	if (strMode==true) {
		strMode=false;
		indicator.innerHTML = "OFF";
	}
	else {
		strMode=true;
		indicator.innerHTML = "ON";
	};
	win=true;
});

button[0].addEventListener("click",()=>{if (!win) {sounds[0].play(); checkSound(0);}});
button[1].addEventListener("click",()=>{if (!win) {sounds[1].play(); checkSound(1);}});
button[2].addEventListener("click",()=>{if (!win) {sounds[2].play(); checkSound(2);}});
button[3].addEventListener("click",()=>{if (!win) {sounds[3].play(); checkSound(3);}});




function checkSound(el){

	if (moves[humanMove]==el&&win==false) {
		humanMove++;

	if ((+indicator.innerHTML<=humanMove)
		||(indicator.innerHTML=="Err")
		||(indicator.innerHTML=="ERR")
		&&(win==false)) indicator.innerHTML=humanMove+1;
	
		if ((counter+1)==humanMove) {
			counter++; 
			startMove = 0;
			humanMove = 0;
			
			if (counter>=10) {
				indicator.innerHTML="WIN"
				win=true;
			}
				else setTimeout(()=>{compMove(counter)},1000);
		}

	}
	else {
		if (strMode==false) indicator.innerHTML="Err";
			else {
				indicator.innerHTML="ERR";
				humanMove=0;
				startMove=0;
				counter=0;
				setTimeout(()=>{compMove(0)}, 1000);
		}
}};

//button Start
start.addEventListener("click", ()=>{
	win = true;
	renderMelody();
	restartFoo();
});

restart.addEventListener("click", ()=>{
	console.log(`counter=`,counter, "startMove=",startMove);
	startMove=0;
	compMove(counter);
});

function restartFoo() {
	indicator.innerHTML="01";
	startMove=0;
	counter=0;
	humanMove=0;
	setTimeout(()=>{win=false; compMove(0)},2000);
};


function renderMelody(){
	moves=[];
	for (let i=0; i<21; i++){
		randomElem= Math.floor(Math.random() * 4);
		moves.push(randomElem);
	};
	console.log(moves);
};

function compMove(el){
		button.map((el)=>el.classList.remove("opacity"));
		console.log("counter=", counter);
		if (!win) button[moves[startMove]].classList.add("opacity");	
		if (!win) sounds[moves[startMove]].play();
		if (!win) startMove++;		
		if (el>4) pause=700;
		if (el>10) pause=500;
		if (win) button.map((el)=>el.classList.remove("opacity"));
		if (startMove>el&&!win)  setTimeout(()=>{button.map((el)=>el.classList.remove("opacity"))},2000);
		if (startMove<=el&&!win) setTimeout(()=>{compMove(el)},pause);
};
