
//защита по ссылке с сайта картинки/музыка

if (document.referrer.indexOf("quiz.agency/quiz/quiz01/1start.html")==-1) {
	alert("Просьба зайти через личный кабинет www.quiz.agency");
 	throw new Error("Stop script");
 };

//для основного
let resAccess=false;

let referrer = document.referrer;
let links = document.querySelectorAll("a");
let access = [
"quiz.agency/quiz/quiz04game/21_chgk_white/21.html",
"quiz.agency/quiz/quiz04game/22_sharg/22.html",
"quiz.agency/quiz/quiz04game/23_film_cheme/23.html",
"quiz.agency/quiz/quiz04game/24_melody_film/24.html",
"quiz.agency/quiz/quiz04game/25_abbreviation_phrase/25.html",
"quiz.agency/quiz/quiz04game/26_video_and_music1/26.html",
"quiz.agency/quiz/quiz04game/00_rules/00.html",
"quiz.agency/my-account/downloads",
"quiz.agency/my-account/view-order"
];
access.forEach((el)=>{
  if (referrer.indexOf(el)!=-1)  resAccess=true;
});
  if (!resAccess) {
    Array.prototype.slice.call(links).forEach((el)=>el.href="www.quiz.agency");
    alert("Просьба зайти через личный кабинет www.quiz.agency");
    throw new Error("Stop script");
};