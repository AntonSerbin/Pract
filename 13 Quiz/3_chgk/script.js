//-------------timer ------------//
let sec =60;
let startTimer = false;
let endTime=false;
let countdown;

const form = document.querySelector(`form`);
form.addEventListener("submit", (e)=>{e.preventDefault()});
const secondsTable = document.querySelector("#secondsTable");
const timerTable = document.querySelector("#timerTable");
const timerTableInfo = document.querySelector("#timerTableInfo");

function startTimerFoo(){
      endTime=false;
      sec=60;
      console.log("startTimer", startTimer, sec);
      minusSecond();   
};


function minusSecond(){
      startTimer= true;
      // console.log("startTimer minusSecond", startTimer, sec);
      timerTableInfo.innerHTML = "Досрочный ответ";
      secondsTable.style.display = "inline";
      if (sec>=0) {
        secondsTable.innerHTML = addZero(sec);
        sec-- 
        if (sec==-1) endTime=true;
      countdown = setTimeout(()=>minusSecond(),100);

        };
        //окончиние таймера1
        if (endTime) endOfTimer();
      };

function endOfTimer() {
        clearInterval(countdown);
        sec = 0;
        startTimer= false;
        timerTable.style.background = "Grey";
        numberOfTask++;
        indicateResult(numberOfTask-1);


};
      //функция добавляет 0 в циферблат при однозначном числе
function addZero (num){ return ('0'+num).slice(-2)};

//-------------------end of timer -------------------//

let input = document.querySelector("#input1");
let taskTable__taskText = document.querySelector("#taskTable__taskText");
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
      panels.forEach(panel => panel.classList.remove('open'));
      this.classList.add('open');
};

function toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
       }
};

    // panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    // panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


let numberOfTask=0;
//Досрочный ответ
timerTable.addEventListener("click", ()=>{
  
  if (startTimer==true&&endTime==false&&numberOfTask!=0) { 
    endOfTimer();
    // indicateResult(numberOfTask);
    // numberOfTask++; 
   };

  if (numberOfTask==0) {
    numberOfTask++;
    newTask(numberOfTask);
  }
});
//старт таймера
timerTable.addEventListener("click", ()=>(!startTimer)&&(sec>0)&&startTimerFoo());


function newTask(number){
  let a = questions.filter((elem)=>elem.idNumber==number);
  console.log(`Новое задание - `, a[0]);
  taskTable__taskText.innerHTML = a[0].question;
  // setTimeout(()=>console.log("Номер задания - ", number),2000);
};

function indicateResult(number){
  let res = checkAnswer(number);
  timerTableInfo.innerHTML = "Следующее задание";
  secondsTable.innerHTML ="";

  if (res) {
    input.classList.add(`green`);
  } else {
    let answerCurrent = questions.filter((elem)=>elem.idNumber==number)[0].answer[0];
    taskTable__taskText.innerHTML += `<br> <span style="color:blue">Правильный ответ: ${answerCurrent} </span>`;

  }
  console.log("result indicateResult",res);

};

function checkAnswer(number) {
  let currentAnswer = questions.filter((elem)=>elem.idNumber==number)[0].answer;
  let newA = currentAnswer.map((e)=>e.toUpperCase());
  return newA.indexOf(input.value.toUpperCase()) != -1 ;
 };