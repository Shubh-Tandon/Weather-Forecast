const showWeather = (city) => {
  let weatherHtml = "";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a6d70cf5b0msh787a1ebf4670e71p1e0f7djsn97c78a2cfb27",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((res) => res.json())
    .then((value) => {
      console.log(value);

      weatherHtml += value.temp
        ? `<div class= "cityAllData">
      <div class="card w-50 my-4 cityCard mx-2">
        <h3 class="card-title d-flex justify-content-center my-2">${city.toUpperCase()}</h3>
        <div class="card-body cityInside">
      <div class="cityBox">
      <h4 class="card-text">Temperature ${value.temp}&#8451;</h4>
      <h4 class="card-text">Feels Like ${value.feels_like}&#8451;</h4>
      </div>
      <div class="cityBox">
      <h4 class="card-text">Minimum ${value.min_temp}&#8451;</h4>
      <h4 class="card-text">Maximum ${value.max_temp}&#8451;</h4>
        </div>
  
    </div>
    </div>
        
    
    <div class="card cityCard my-4 mx-5 w-50">
    <h3 class="card-title d-flex justify-content-center my-2">WIND</h3>
      <div class="card-body cityInside">
      <div>
      <h4 class="card-text">Humidity ${value.humidity}</h4>
      <h4 class="card-text">Cloud Pct ${value.cloud_pct}</h4>
      </div>
      <div>
      <h4 class="card-text">Wind Degree ${value.wind_degrees}</h4>
      <h4 class="card-text">Wind Speed ${value.wind_speed}</h4>
      </div>
      </div>
      </div>

      `
        : "";

      let inpCityWeather = document.getElementById("inpCity");
      //   console.log("inpCityWeather", inpCityWeather);
      inpCityWeather.innerHTML = weatherHtml;
      //   console.log("weatherHtml", weatherHtml);
    });
};

const fet = async () => {
  let iHtml = "";
  let cityHtml = "";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a6d70cf5b0msh787a1ebf4670e71p1e0f7djsn97c78a2cfb27",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  let P1 = new Promise((resolve, reject) => {
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi`,
      options
    )
      .then((res) => res.json())
      .then((value) => {
        // console.log(value);
        resolve(value);
      });
  });

  let P2 = new Promise((resolve, reject) => {
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai`,
      options
    )
      .then((res) => res.json())
      .then((value) => {
        // console.log(value);
        resolve(value);
      });
  });

  let P3 = new Promise((resolve, reject) => {
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai`,
      options
    )
      .then((res) => res.json())
      .then((value) => {
        // console.log(value);
        resolve(value);
      });
  });

  let allData = Promise.allSettled([P1, P2, P3]);

  allData.then((res) => {
    console.log(res);
    for (i in res) {
      iHtml += `<div class="card mx-4 my-2 cityCard" style="width: 16rem;">
              <div class="card-body">
              ${
                i == 0
                  ? "<h2>Delhi</h2>"
                  : i == 1
                  ? "<h2>Pune</h2>"
                  : "<h2>Chennai</h2>"
              }
                <h5 class="card-title">Temperature ${
                  res[i].value.temp
                }&#8451;</h5>
                <p class="card-text"> Feels Like ${
                  res[i].value.feels_like
                }&#8451; </p>
                <p class="card-text">Humidity ${res[i].value.humidity}</p>
                
              </div>
            </div>`;
    }
    let cityWeather = document.getElementById("city");
    cityWeather.innerHTML = iHtml;
  });
};

fet();

function showData() {
  console.log("show data clicked");
  let city = document.getElementById("inp");
  console.log(city.value);

  showWeather(city.value);
}

function changeColor() {
  console.log("color clicked");
  let myContainer = document.getElementById("myContainer");
  console.log(myContainer.style);
  let colorMode = document.getElementById("colorMode").value;
  console.log(colorMode);

  myContainer.style.backgroundColor = colorMode;
}
