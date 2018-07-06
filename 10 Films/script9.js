const inputStr = document.querySelector("#inputStr");
const inputSearch = document.querySelector("#inputSearch");
const result = document.querySelector("#result");
const popularButton = document.querySelector("#popularButton");
const latestButton = document.querySelector("#latestButton");
const topRatedButton = document.querySelector("#topRatedButton");
const myonoffswitch = document.querySelector("#myonoffswitch");
const lighTheme=document.querySelector("#lighTheme");



//создаем строку запроса
const link="https://api.themoviedb.org/3";
const searchFolder="/search/movie"
const api_key= "f24a0fd18f52218851075901c5a108a0";
const request = "&query=";
const popular_request="/movie/popular";
const latest="/movie/upcoming";
const top_rated="/movie/top_rated";


//запрос API, получаем массив
const getJSON = (requestLink)=>
	fetch(requestLink)
		.then(response=> {
			if (response.ok) {
				return response.json(); //получаем строку
				}
			throw new Error(
			response.statusText
			);
		})
		.then(data=>data.results)  //получаем массив
		.catch(error => console.log(error)
		);


const makeGallery = (films)=> {
		let infoAllAboutFilm ="";
		films.map(film=>{
		infoAllAboutFilm += compiled(film);
		});
		result.innerHTML = infoAllAboutFilm;
		inputStr.value = "";
};


inputSearch.addEventListener("submit",(event)=>{
	event.preventDefault();
	const searchRequest = `${link}${searchFolder}?api_key=${api_key}&page=1&${request}${inputStr.value}`;
	if (inputStr.value) {
		getJSON(searchRequest)
			.then(data=>{
				let filmsRightObj = formatFilms(data);
				makeGallery(filmsRightObj)
			})
		}
	else inputStr.placeholder="Obligitory enter something!";
		
});

popularButton.addEventListener("click",(event)=>{
	const searchRequest = `${link}${popular_request}?api_key=${api_key}&page=1&`;
	getJSON(searchRequest)
			.then(data=>{
				let filmsRightObj = formatFilms(data);
				makeGallery(filmsRightObj)
			})
});

latestButton.addEventListener("click",(event)=>{
	const searchRequest = `${link}${latest}?api_key=${api_key}&language=en-US`;
	getJSON(searchRequest)
			.then(data=>{
				let filmsRightObj = formatFilms(data);
				makeGallery(filmsRightObj)
			})
});
topRatedButton.addEventListener("click",(event)=>{
	const searchRequest = `${link}${top_rated}?api_key=${api_key}&page=1`;
	getJSON(searchRequest)
			.then(data=>{
				let filmsRightObj = formatFilms(data);
				makeGallery(filmsRightObj)
			})
});


// Выбираем содержимое скрипта как строку
const source = document
  .querySelector("#pattern")
  .textContent
  .trim();

// используя _.template создаем функцию-шаблон из строки
const compiled = _.template(source);

// переводим JSON в объект согласно шаблона
const formatFilms = (data)=> data.map(item => {
			return {
   	 			img: `https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`,
   	 			rating: item.vote_average,
   	 			title: item.title,
   	 			date: item.release_date.slice(0,4),
   	 			overwiev: item.overview.slice(0,200)
  			};}
  		);

//начальная страница
const searchRequest = `${link}${latest}?api_key=${api_key}&language=en-US`;
getJSON(searchRequest)
	.then(data=>{
		let filmsRightObj = formatFilms(data);
		makeGallery(filmsRightObj)
	});
//Функции загрузки для LocalStorage
const loadLocalData = () => {
  try {
    const loacalData = localStorage.getItem('HomeWork9_Serbin');
    if (loacalData === null) {
      return undefined;
    }
    return JSON.parse(loacalData);
  } catch (err) {
    return undefined;
  }
};
//Функции сохранения для LocalStorage
const saveLocalData = (data) => {
  try {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem('HomeWork9_Serbin', dataJSON);
  } catch (err) {
    console.log('save state error: ', err);
  }
};


// функция переключение между светлой/темной темами
const toggleTheme = ()=>{
	if (myonoffswitch.checked==false) {
		const darkCss = document.createElement("link");
		darkCss.rel="stylesheet";
		darkCss.href="style9_dark_theme.css"
		darkCss.id="darkTheme";
		document.head.appendChild(darkCss);
		}	 
	else {
		const darkCss = document.querySelector("#darkTheme");
		if(darkCss) document.head.removeChild(darkCss);
		}
	saveLocalData({"theme":myonoffswitch.checked});
	};
myonoffswitch.addEventListener("click", toggleTheme);

//выставление начальной светлой/темной темы
loadLocalData()==undefined? staringTheme=true:staringTheme=loadLocalData().theme;
myonoffswitch.checked = staringTheme;
toggleTheme();
