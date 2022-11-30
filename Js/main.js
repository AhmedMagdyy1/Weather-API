async function getWeatherData() {
  var search = document.getElementById("searchInput");
  var response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=337ef240605d476c86f104355223011&q=${
      search.value || "cairo"
    }&days=3`
  );
  var weather = await response.json();
  let today = await weather.forecast.forecastday[0].date;
  today = await getDayName(today);
  let tomorrow = await weather.forecast.forecastday[1].date;
  tomorrow = await getDayName(tomorrow);
  let tomorrowIcon =
    (await "https://") + weather.forecast.forecastday[1].day.condition.icon;
  let tomorrowMax = await weather.forecast.forecastday[1].day.maxtemp_c;
  let tomorrowMin = await weather.forecast.forecastday[1].day.mintemp_c;
  let tomorrowCond = await weather.forecast.forecastday[1].day.condition.text;
  let dayAfterTomrrow = await weather.forecast.forecastday[2].date;
  dayAfterTomrrow = await getDayName(dayAfterTomrrow);
  let afterTomorrowIcon =
    (await "https://") + weather.forecast.forecastday[2].day.condition.icon;
  let afterTomorrowMax = await weather.forecast.forecastday[2].day.maxtemp_c;
  let afterTomorrowMin = await weather.forecast.forecastday[2].day.mintemp_c;
  let afterTomorrowCond = await weather.forecast.forecastday[2].day.condition
    .text;
  var temp_c = await weather.current.temp_c;
  var cityName = await weather.location.name;
  var weatherIcon = (await "https://") + weather.current.condition.icon;
  var weatherCondition = await weather.current.condition.text;
  var weatherHumidity = await weather.current.humidity;
  var weatherWind = await weather.current.wind_kph;
  var weatherWindDirec = await weather.current.wind_dir;
  document.getElementById("weatherDay").innerHTML = today;
  document.getElementById("weatherTomrrow").innerHTML = tomorrow;
  document.getElementById("tomorrowWeatherMax").innerHTML = `${tomorrowMax}°C`;
  document.getElementById("tomorrowWeatherMin").innerHTML = `${tomorrowMin}°C`;
  document.getElementById("tomorrowCondation").innerHTML = tomorrowCond;
  document.getElementById("weatherDayAfter").innerHTML = dayAfterTomrrow;
  document.getElementById(
    "afterTomorrowWeatherMax"
  ).innerHTML = `${afterTomorrowMax}°C`;
  document.getElementById(
    "afterTomorrowWeatherMin"
  ).innerHTML = `${afterTomorrowMin}°C`;
  document.getElementById("afterTomorrowCondation").innerHTML =
    afterTomorrowCond;
  document.getElementById("todayWeather").innerHTML = `${temp_c} °C`;
  document.getElementById("cityName").innerHTML = cityName;
  document.getElementById("weatherCondition").innerHTML = weatherCondition;
  document.getElementById("humdaity").innerHTML = `${weatherHumidity} %`;
  document.getElementById("Wind").innerHTML = `${weatherWind} km/h`;
  document.getElementById("windDirection").innerHTML = weatherWindDirec;
  var weatherImg = document.getElementById("weatherIcon");
  weatherImg.setAttribute("src", `${weatherIcon}`);
  var tomorrowImg = document.getElementById("tomorrow-img");
  tomorrowImg.setAttribute("src", `${tomorrowIcon}`);
  var afterTomorrowImg = document.getElementById("afterTomorrow-img");
  afterTomorrowImg.setAttribute("src", `${afterTomorrowIcon}`);
}
getWeatherData();

function getDayName(today) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(today);
  return days[d.getDay()];
}
