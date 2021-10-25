    var updownElem = document.getElementById('updown');
    var pageYLabel = 0;
console.log(document.referrer);
let referrer = document.referrer;
let links = document.querySelectorAll("a");

  var innerHeight = document.documentElement.clientHeight;
  var listOfTasksHight= document.querySelector(".listOfTasks").clientHeight;

    var scroll = window.scrollY;


//старотвая позиция скроллинговой кнопки
if (document.documentElement.scrollHeight!=document.documentElement.clientHeight) {
    	updownElem.style.display="block";
    	updownElem.className="down";
};
//убрать-показать скроллинговой кнопки при изменении масштаба
window.onresize = function(){
if (document.documentElement.scrollHeight!=document.documentElement.clientHeight) {
      updownElem.style.display="block";
      updownElem.className="down";
}
else
  updownElem.style.display="none";
};

//скроллинговая кнопка
window.addEventListener("scroll", function (event) {

    if (document.documentElement.scrollHeight<1+document.documentElement.scrollTop+document.documentElement.clientHeight) {
    	updownElem.style.display="block";
    	updownElem.className="up";
    	};

    if (document.documentElement.scrollTop==0) {
    	updownElem.className="down";

    };
		});


updownElem.onclick = function() {
  switch (this.className) {
    case 'up':
      window.scrollTo(0, 0);
      this.className = 'down';
      break;

    case 'down':
      window.scrollTo(0, document.documentElement.scrollHeight);
      this.className = 'up';
  }

}



//Функции загрузки для LocalStorage
const loadLocalData = (key) => {
  try {
    const loacalData = localStorage.getItem(key);
    if (loacalData === null) {
      return undefined;
    }
    return JSON.parse(loacalData);
  } catch (err) {
    return undefined;
  }
};
//Функции сохранения для LocalStorage
const saveLocalData = (key,data) => {
  try {
    const dataJSON = JSON.stringify(key&data);
    localStorage.setItem(key, data);
  } catch (err) {
    console.log('save state error: ', err);
  }
};


// определение геолокации

// if ((loadLocalData("data")==undefined)||(loadLocalData("data")!=x+y)) {
//   if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     let xgps=Math.round(position.coords.latitude);
//     let ygps=Math.round(position.coords.longitude);
//       console.log(`latitude: ${x-xgps} <br>longitude: ${y-ygps}`);
//       if (Math.abs(x-xgps)<2&&Math.abs(y-ygps)<2)  saveLocalData("data",x+y);//записываем в локал
//       console.log(loadLocalData("data"));
//     });

//   };
// };

        //функция для предзагрузки видео на экран
        let preLoadVid = document.querySelector("#preloadindVideo");
         function preLoadVideos (num=10, link){

            for (var i = 1; i <= num; i++) {
              if (i<=9)  i = "0"+i;
              preLoadVid.innerHTML+=`    
              <video controls preload buffered autoplay muted style="outline: 1px brown solid; width:20px; height:20px">
              <source src="${link}/video/${i}.mp4" type='video/mp4'>
                </video> `;
            }}


//функция добавления заданий в HTML
function newTask (nameDir, nameTask) {
 let listOfTasksUl = document.querySelector(".listOfTasks ul");
 listOfTasksUl.insertAdjacentHTML("beforeend",` 
<li>
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
          <div class="front">
          <img src="${nameDir}/logo.jpg" alt="logo">
        </div>
        <div class="back">
          <div class="backTextList">
            <a href="${nameDir}/index.html">
              <p>${nameTask}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </li>
 `);
 }
