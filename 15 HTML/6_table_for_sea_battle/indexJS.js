let wrapper= document.querySelector("#wrapper");

for (var i = 0; i <121; i++) {
	let index='';
	if (i%11==0) index=`&#${64+i/11}`;
	if (i<=10) index=i;
	if (i==0) index="";
	wrapper.innerHTML+=`<div id="cell${i}"><p>${index}</p></div>`;
}