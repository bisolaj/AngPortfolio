//creating and initialize variables
let cityData;
let count = 0;
let dt = new Date();

//display today's date and time
document.getElementById("dateTime").innerHTML = dt.toLocaleTimeString();

//check if there is already data in Local storage if true assign it to cityData array, else make cityData array empty
if (localStorage.getItem('myWeatherData'))
 {
  cityData = JSON.parse(localStorage.getItem('myWeatherData'));
  console.log(cityData);
 }
else {
  cityData = [];
}

populateWeather();

//get elements
let addBtn = document.getElementById('addBtn');
let deleteBtn = document.getElementById('deleteBtn');
let previousBtn = document.getElementById('previousBtn');
let nextBtn = document.getElementById('nextBtn');

function newCityData() {
}

function populateWeather() {
//check if there is data in cityData array and display the first data
if (cityData.length > 0)
{
document.getElementById('cityName').innerText = cityData[0].cityName;
document.getElementById("dateDay").innerText = cityData[0].dateDay;
document.getElementById('temp').innerText = "Current Temperature: " + cityData[0].temp + "C";
document.getElementById('tempHigh').innerText = "High: " + cityData[0].tempHigh + "C";
document.getElementById('tempLow').innerText = "Low: " + cityData[0].tempLow + "C";
document.getElementById('description').innerText = "Weather Description: " + cityData[0].description;

document.getElementById('dateDay1').innerText = cityData[0].dateDay1;
document.getElementById('temp1').innerText = "Temperature: " + cityData[0].temp1 + "C";
document.getElementById('description1').innerText = "Weather Description: " + cityData[0].description1;

document.getElementById('dateDay2').innerText = cityData[0].dateDay2;
document.getElementById('temp2').innerText = "Temperature: " + cityData[0].temp2 + "C";
document.getElementById('description2').innerText = "Weather Description: " + cityData[0].description2;

document.getElementById('dateDay3').innerText = cityData[0].dateDay3;
document.getElementById('temp3').innerText = "Temperature: " + cityData[0].temp3 + "C";
document.getElementById('description3').innerText = "Weather Description: " + cityData[0].description3;

document.getElementById('dateDay4').innerText = cityData[0].dateDay4;
document.getElementById('temp4').innerText = "Temperature: " + cityData[0].temp4 + "C";
document.getElementById('description4').innerText = "Weather Description: " + cityData[0].description4;
}
//display default HTML text
else
{
document.getElementById('cityName').innerText = "City Name";
document.getElementById("dateDay").innerHTML = dt.toLocaleDateString();
document.getElementById('temp').innerText = "Current Temperature";
document.getElementById('tempHigh').innerText = "Highest Temperature";
document.getElementById('tempLow').innerText = "Lowest Temperature";
document.getElementById('description').innerText = "Weather Description";
document.getElementById('dateDay1').innerText = "Date";
document.getElementById('temp1').innerText = "Temperature" ;
document.getElementById('description1').innerText = "Weather Description" ;
document.getElementById('dateDay2').innerText = "Date";
document.getElementById('temp2').innerText = "Temperature" ;
document.getElementById('description2').innerText = "Weather Description" ;
document.getElementById('dateDay3').innerText = "Date";
document.getElementById('temp3').innerText = "Temperature" ;
document.getElementById('description3').innerText = "Weather Description" ;
document.getElementById('dateDay4').innerText = "Date";
document.getElementById('temp4').innerText = "Temperature" ;
document.getElementById('description4').innerText = "Weather Description" ;
}
}

//save data to local storage
function saveData() {
  localStorage.setItem('myWeatherData', JSON.stringify(cityData));
}

//add event listeners
addBtn.addEventListener('click', function (e) {
  let city = prompt("Enter City Name: ");
  let url = "https://api.openweathermap.org/data/2.5/forecast?q="
  let urlW = "https://api.openweathermap.org/data/2.5/weather?q="
  let cityString = city;
  let tempUnit = "&units=imperial";
  let key = "&appid=99b569475e28fde804ea41e2146d577b";
  let fullURL = url + cityString + tempUnit + key;
  let weatherURL = urlW + cityString + tempUnit + key;
  let cityExist = true;
  
  if (cityData.length > 0)
  {
    for (let i = 0; i < cityData.length; i++) 
    {
      if (cityExist)
     {
        if (cityData[i].cityName.toLowerCase() === city.toLowerCase()) 
        {
          alert(city.toUpperCase() + " already exist");
          cityExist = false;
        }
      }
    }
  if (cityExist)
    {
      loadData(fullURL);
      
      alert(city.toUpperCase() + " weather data Successfully added!");
    }
    else
    {
      cityExist=true;
    }
  }
  else
  {
    loadData(fullURL);
    
      alert(city.toUpperCase() + " weather data Successfully added!");
  }
});

deleteBtn.addEventListener('click', function (e) 
{
  if (cityData.length === 0)
  {
    alert("No City Weather Data to delete!");
  }
  let delCity = document.getElementById('cityName').innerText;
  for (let i = 0; i < cityData.length; i++) 
  {
      console.log(cityData[i].cityName + ": " + delCity);
    if (cityData[i].cityName === delCity) 
    {
      cityData.splice(i, 1);
      saveData();
      alert(delCity.toUpperCase() + " weather data was Successfully deleted!");
    }
  }
  populateWeather();
});

//naviage to the previous city weather data
previousBtn.addEventListener('click', function (e) {
  if (cityData.length > 1)
  {
    clearDisplay();
    prevCityData();
  }
  else
  {
    alert("No Previous City Data to Display!");
  }
});

//navigate to the next city weather data
nextBtn.addEventListener('click', function (e) {
  if (cityData.length > 1)
  {
    clearDisplay();
    nextCityData();
  }
  else
  {
    alert("No Next City Data to Display!");
  }
});

//clears weather data display area for new weather data information
function clearDisplay() {
  cityName.innerHTML = "";
  dateDay.innerHTML = "";
  temp.innerHTML = "";
  tempHigh.innerHTML = "";
  tempLow.innerHTML = "";
  description.innerHTML = "";
  temp1.innerHTML = "";
  description1.innerHTML = "";
  dateDay1.innerHTML = "";
  temp2.innerHTML = "";
  description2.innerHTML = "";
  dateDay2.innerHTML = "";
  temp3.innerHTML = "";
  description3.innerHTML = "";
  dateDay3.innerHTML = "";
  temp4.innerHTML = "";
  description4.innerHTML = "";
  dateDay4.innerHTML = "";
}

//get and displys next city weather data
function nextCityData() {
  if (count >= cityData.length) {
    count = 0;
  }
  document.getElementById('cityName').innerText = cityData[count].cityName;
  document.getElementById('dateDay').innerText = cityData[count].dateDay;
  document.getElementById('temp').innerText = "Current Temperature: " + cityData[count].temp + "C";
  document.getElementById('tempHigh').innerText = "High: " + cityData[count].tempHigh + "C";
  document.getElementById('tempLow').innerText = "Low: " + cityData[count].tempLow + "C";
  document.getElementById('description').innerText = "Weather Description: " + cityData[count].description;
  document.getElementById('dateDay1').innerText = cityData[count].dateDay1;
  document.getElementById('temp1').innerText = "Temperature: " + cityData[count].temp1 + "C";
  document.getElementById('description1').innerText = "Weather Description: " + cityData[count].description1;
  document.getElementById('dateDay2').innerText = cityData[count].dateDay2;
  document.getElementById('temp2').innerText = "Temperature: " + cityData[count].temp2 + "C";
  document.getElementById('description2').innerText = "Weather Description: " + cityData[count].description2;
  document.getElementById('dateDay3').innerText = cityData[count].dateDay3;
  document.getElementById('temp3').innerText = "Temperature: " + cityData[count].temp3 + "C";
  document.getElementById('description3').innerText = "Weather Description: " + cityData[count].description3;
  document.getElementById('dateDay4').innerText = cityData[count].dateDay4;
  document.getElementById('temp4').innerText = "Temperature: " + cityData[count].temp4 + "C";
  document.getElementById('description4').innerText = "Weather Description: " + cityData[count].description4;

  count++;
}

//get and displys previous city weather data
function prevCityData() {
  if (count < 0) {
    count = cityData.length - 1;
  }
 document.getElementById('cityName').innerText = cityData[count].cityName;
  document.getElementById('dateDay').innerText = cityData[count].dateDay;
  document.getElementById('temp').innerText = "Current Temperature: " + cityData[count].temp + "C";
  document.getElementById('tempHigh').innerText = "High: " + cityData[count].tempHigh + "C";
  document.getElementById('tempLow').innerText = "Low: " + cityData[count].tempLow + "C";
  document.getElementById('description').innerText = "Weather Description: " + cityData[count].description;
  document.getElementById('dateDay1').innerText = cityData[count].dateDay1;
  document.getElementById('temp1').innerText = "Temperature: " + cityData[count].temp1 + "C";
  document.getElementById('description1').innerText = "Weather Description: " + cityData[count].description1;
  document.getElementById('dateDay2').innerText = cityData[count].dateDay2;
  document.getElementById('temp2').innerText = "Temperature: " + cityData[count].temp2 + "C";
  document.getElementById('description2').innerText = "Weather Description: " + cityData[count].description2;
  document.getElementById('dateDay3').innerText = cityData[count].dateDay3;
  document.getElementById('temp3').innerText = "Temperature: " + cityData[count].temp3 + "C";
  document.getElementById('description3').innerText = "Weather Description: " + cityData[count].description3;
  document.getElementById('dateDay4').innerText = cityData[count].dateDay4;
  document.getElementById('temp4').innerText = "Temperature: " + cityData[count].temp4 + "C";
  document.getElementById('description4').innerText = "Weather Description: " + cityData[count].description4;

  count--;
}

function loadData(url) {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myArr = JSON.parse(this.responseText);
      getWeather(myArr);
      setWeather(myArr);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
//update & display city weather data array
function setWeather(info) {
  console.log(info);
  //console.log(info.name);
  //console.log(info.main.temp);
  //console.log(info.main.temp_max);
  //console.log(info.main.temp_min);d
  //console.log(info.weather[0].description);

  //console.log(info.list[i].main.temp);
  //console.log(info.list[i].weather[0].description);
  //console.log(info.list[i].main.temp_min);
  //console.log(info.list[i].main.temp_max);

  let obj = {
       cityName: info.city.name,
    dateDay: info.list[0].dt_txt.split(" ")[0],
     temp: info.list[0].main.temp,
    tempHigh: info.list[0].main.temp_max,
    tempLow: info.list[0].main.temp_min,
    description: info.list[0].weather[0].description,
    dateDay1: info.list[8].dt_txt.split(" ")[0],
    temp1: info.list[8].main.temp,
    description1: info.list[8].weather[0].description,
    dateDay2: info.list[16].dt_txt.split(" ")[0],
    temp2: info.list[16].main.temp,
    description2: info.list[16].weather[0].description,
    dateDay3: info.list[24].dt_txt.split(" ")[0],
    temp3: info.list[24].main.temp,
    description3: info.list[24].weather[0].description,
    dateDay4: info.list[32].dt_txt.split(" ")[0],
    temp4: info.list[32].main.temp,
    description4: info.list[32].weather[0].description,
}
  cityData.push(obj)
  saveData();
  let i = 0;
  document.getElementById('cityName').innerText = info.city.name;

  document.getElementById('temp').innerText = "Current Temperature: " + info.list[i].main.temp + "C";
  document.getElementById('tempHigh').innerText = "High: " + info.list[i].main.temp_max + "C";
  document.getElementById('tempLow').innerText = "Low: " + info.list[i].main.temp_min + "C";
  document.getElementById('description').innerText = "Weather Description: " + info.list[i].weather[0].description;
  document.getElementById('dateDay').innerText = info.list[i].dt_txt.split(" ")[0];
  i = i + 8;
  document.getElementById('temp1').innerText = "Temperature: " + info.list[i].main.temp + "C";
  document.getElementById('description1').innerText = "Weather Description: " + info.list[i].weather[0].description;
  document.getElementById('dateDay1').innerText = info.list[i].dt_txt.split(" ")[0];
  i = i + 8;
  document.getElementById('temp2').innerText = "Temperature: " + info.list[i].main.temp + "C";
  document.getElementById('description2').innerText = "Weather Description: " + info.list[i].weather[0].description;
  document.getElementById('dateDay2').innerText = info.list[i].dt_txt.split(" ")[0];
  i = i + 8;
  document.getElementById('temp3').innerText = "Temperature: " + info.list[i].main.temp + "C";
  document.getElementById('description3').innerText = "Weather Description: " + info.list[i].weather[0].description;
  document.getElementById('dateDay3').innerText = info.list[i].dt_txt.split(" ")[0];
  i = i + 8;
  document.getElementById('temp4').innerText = "Temperature: " + info.list[i].main.temp + "C";
  document.getElementById('description4').innerText = "Weather Description: " + info.list[i].weather[0].description;
  document.getElementById('dateDay4').innerText = info.list[i].dt_txt.split(" ")[0];
}

function getWeather(info) {
  console.log(info);

  //let myDt = new Date();
  //myDt = info.list[0].dt_txt;
  //console.log(info.list[0].dt_txt);
  //console.log(myDt.toLocaleDateString());
}