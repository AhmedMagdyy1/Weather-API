async function getWeatherData() {
  var weatherData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=de57587e39ef40b6845215615221410&q=${
      search.value || "cairo"
    }&days=3`
  );
}

function getCityName(cairo) {
  var search = document.getElementById("searchInput");
  return search.value;
}
