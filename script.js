const search = document.querySelector(".search-input");
const button = document.querySelector(".search-btn");
const nameCity = document.querySelector(".name");
const tempCity = document.querySelector(".temp");
const gustCity = document.querySelector(".gust");
const speedCity = document.querySelector(".speed");
const iconWeather = document.querySelector(".icon");

const box = document.querySelector(".box");
const error = document.querySelector(".error");

const weather = {
  apiKey: "6b4c292e3e049dbf64d6c2441cc77864",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    console.log(data);
    nameCity.innerText = data.name;
    tempCity.innerText = data.main?.temp;
    gustCity.innerText = data.wind?.gust ? data.wind.gust : "0";
    speedCity.innerText = data.wind?.speed;
    iconWeather.src = "./cloud.png" + data.weather[0].icon + "@2x.png";
  },
};

search.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    weather.fetchWeather(e.target.value);
    search.value = "";
  } else if (search.value === undefined) {
    error.style.display = "block";
    box.style.display = "none";
  }
});

button.addEventListener("click", () => {
  weather.fetchWeather(search.value);
  search.value = "";

  if (search.value === undefined) {
    error.style.display = "block";
    box.style.display = "none";
  }
});

// weather.fetchWeather("Karakol");
