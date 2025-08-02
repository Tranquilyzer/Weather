const apiKey = "8f6a2ab2c307346371da66ed158f618e";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search-container input");
const searchButton = document.querySelector(".search-container button");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");



async function CheckWeather(city) 
{
 const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
 if(response.status == 404){
  error.style.display = "block";
  weather.style.display = "none";

}
 const data =await response.json();
 console.log(data, "data") ;
 
 document.querySelector(".name").innerHTML = data.name; 
 document.querySelector(".temp").innerHTML = "температура: " + Math.round(data.main.temp) + "&#8451"; 
 document.querySelector(".humidity").innerHTML = "влажность: " + data.main.humidity + "%";
 document.querySelector(".wind").innerHTML = "скорость ветра: " +  data.wind.speed + "km/h";

 weather.style.display = "block";
 error.style.display = "none";
}
searchButton.addEventListener("click",() =>{
  CheckWeather(searchInput.value);
  searchInput.value = "";
})

