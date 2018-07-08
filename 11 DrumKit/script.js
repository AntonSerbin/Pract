window.addEventListener('keydown', (e)=>sound(e.keyCode));

let allButtons=document.querySelectorAll(".buttonKey");
allButtons.forEach(
	butt=>butt.addEventListener(`transitionend`, endTransaction));

function sound(e) { //playing sound, input code of key
	let keyCode = e;
	let audioPlay = document.querySelector(`audio[key-code="${keyCode}"]`);
	if (!audioPlay) return;
	audioPlay.currentTime = 0;
	activeButton(keyCode);
	audioPlay.volume=0.1;
	audioPlay.play();
};

function activeButton(elem){ //make pressed button active
	let keyPlay = document.querySelector(`.buttonKey[key-code="${elem}"]`);
	keyPlay.classList.add("action");
}

function endTransaction(e) { //switch off active button
	if (e.propertyName!="transform") return;
	this.classList.remove("action");
};

//add mouse control
let audioA = document.querySelector(`.buttonKey[key-code="65"]`);
let audioS = document.querySelector(`.buttonKey[key-code="83"]`);
let audioD = document.querySelector(`.buttonKey[key-code="68"]`);
let audioF = document.querySelector(`.buttonKey[key-code="70"]`);
let audioG = document.querySelector(`.buttonKey[key-code="71"]`);
let audioH = document.querySelector(`.buttonKey[key-code="72"]`);
let audioJ = document.querySelector(`.buttonKey[key-code="74"]`);
let audioK = document.querySelector(`.buttonKey[key-code="75"]`);
let audioL = document.querySelector(`.buttonKey[key-code="76"]`);

audioA.addEventListener("click", ()=>sound(65));
audioS.addEventListener("click", ()=>sound(83));
audioD.addEventListener("click", ()=>sound(68));
audioF.addEventListener("click", ()=>sound(70));
audioG.addEventListener("click", ()=>sound(71));
audioH.addEventListener("click", ()=>sound(72));
audioJ.addEventListener("click", ()=>sound(74));
audioK.addEventListener("click", ()=>sound(75));
audioL.addEventListener("click", ()=>sound(76));

