let coordinatesField = document.querySelector("#coordinatesField");
let areaField = document.querySelector("#areaField");
let areaTemp = document.querySelector("#areaTemp");
let areaWeather = document.querySelector("#areaWeather");
let humidityField = document.querySelector("#humidityField");
let typeTemperature = document.querySelector("#typeTemperature");

let frostURL = `http://image.desk7.net/Landscape%20Wallpapers/9706_1280x800.jpg`;
let mistURL = `http://ak8.picdn.net/shutterstock/videos/3374228/thumb/1.jpg`;
let plus15URL = `https://cdn.linuxaria.com/wp-content/uploads/2011/04/a_day_in_the_life_by_barid42-d3dzbcc1.jpg`;
let hotURL = `https://ak5.picdn.net/shutterstock/videos/9336905/thumb/1.jpg`;

let container = document.querySelector(".container");
const APIKEY = `id=Default&APPID=cf11416338f311c559cf08a6b87bf4c6`;
let tempCurrent;


const getWeather = (url)=> {
	fetch(url)
  .then(response => {
    response.json().then(json => {
	    console.log(json);
      renderData(json);
    });
  })
  .catch(error => {
    console.log(error);
  });
};



typeTemperature.addEventListener("click",(event)=>
    {
    let newTempCurrent="";
    if (typeTemperature.checked) newTempCurrent=(Math.round((tempCurrent-273.15) * 10) / 10);
       else newTempCurrent=(Math.round((1.8*(tempCurrent-273)+32)*10)/10);
    areaTemp.innerHTML =`Temperature:  ${singTemp} ${newTempCurrent}`; //выводим новую тепературу

    }); 


const renderData=(json)=>{
 areaField.innerHTML +=" "+json.name; //выводим город
      singTemp = (json.main.temp-273.15)>0?"+": //выводим знак температуры
        (json.main.temp-273.15)==0?"":("-");
      tempCurrent = json.main.temp;
      areaTemp.innerHTML +=` ${singTemp} ${(Math.round((json.main.temp-273.15) * 10) / 10)}`; //выводим тепературу
      areaWeather.innerHTML +=(json.weather[0].main); //выводим погоду
      humidityField.innerHTML +=`${json.main.humidity}%`; //выводим влажность
      weatherURL= (json.main.temp-273.15< (-5))? frostURL:
        ((json.main.temp-273.15>=(-5))&&(json.main.temp-273.15<5))? mistURL:
          ((json.main.temp-273.15>=5)&&(json.main.temp-273.15<15))? plus15URL:hotURL;
        
        document.body.style.backgroundImage = `url(${weatherURL})`;
};


document.body.style.backgroundImage = `url("http://u01.appmifile.com/images/2016/06/19/d2f383a2-2e76-44b8-acab-283771f7be80.jpg")`; //начальный фон

if (navigator.geolocation) {
 	navigator.geolocation.getCurrentPosition(function(position) {
 		let x=position.coords.latitude;
 		let y=Math.round(position.coords.longitude * 10000) / 10000 ;
    	coordinatesField.innerHTML = `latitude: ${x} <br>longitude: ${y}`;
    	// let url =`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${x}&lon=${y}&cnt=3&${APIKEY}`; //прогноз на 10 дней

		let url =`https://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&${APIKEY}`;
		    	console.log(url);
    	getWeather(url);
  	});
// let url =`https://api.openweathermap.org/forecast/daily?lat=${x}&lon=${y}&cnt=10&${APIKEY}`; прогноз на 10 дней


};
