const search = document.querySelector('.search-btn');
const cityInput = document.querySelector('.city-input');
const title = document.querySelector('.title');
const discription = document.querySelector('.discription');
const icon = document.querySelector('.icon');
const max = document.querySelector('.max p');
const min = document.querySelector('.min p');
const wind = document.querySelector('.wind span');
const humidty = document.querySelector('.humidty span');
const pressure = document.querySelector('.pressure span');

const temp = document.getElementById('current');
const degree = document.getElementById('degree');


const fetchWeatherApi = () => {
  title.innerHTML = 'Loading..'
  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=259b6a69ebf88ecbf51aca2e8418db8e`
  // Fetching API index 
  fetch(weatherUrl)
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    title.innerHTML = data.name
    discription.innerHTML = data.weather[0].description
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    icon.setAttribute('src', iconUrl);
    temp.innerHTML = Math.round(data.main.temp)
    max.innerHTML = Math.round(data.main.temp_max)
    min.innerHTML = Math.round(data.main.temp_min)
    wind.innerHTML = data.wind.speed
    humidty.innerHTML = data.main.humidity
    pressure.innerHTML = data.main.pressure

   // Celsius to Fahrenheit formula
   var fahrenheit  = temp.innerHTML * 9 / 5 + 32 ;

   // Celsius to Fahrenheit formula
   var celsius = (fahrenheit - 32) * (5 / 9);
       
       // function converts celsius and fahrenheit
       temp.addEventListener('click', ()=>{
        if(degree.textContent === "C"){
          degree.textContent = "F";
          temp.textContent = Math.round(fahrenheit);
          
        }else if(degree.textContent === "F"){
         degree.textContent = "C";
         temp.textContent = Math.round(celsius);
        }
      });
  })
}

search.addEventListener('click', (e)=>{
  // below methode to prevent page to start refreshing 
  e.preventDefault();
  fetchWeatherApi();
})
