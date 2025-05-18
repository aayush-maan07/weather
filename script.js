const apiKey = "99ac20d963f0b2a66e07236174063cec";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=99ac20d963f0b2a66e07236174063cec&units=metric&q=`

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");


        async function checkWeather(a) {
            const response = await fetch(apiUrl + a);

            if(a==""){
                document.querySelector(".weather").style.display = "none";
            }

            if (response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            } else {
                document.querySelector(".error").style.display = "none";
                var data = await response.json();

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
                document.querySelector(".humidity").innerHTML = `${data.main.humidity}% `;
                document.querySelector(".wind").innerHTML = `${data.wind.speed} Km/h `;
                document.querySelector(".about").innerHTML = `${data.weather[0].main}`;

                if (data.weather[0].main == "Clouds") {
                    weatherIcon.src = "images/clouds.png"
                }
                if (data.weather[0].main == "Clear") {
                    weatherIcon.src = "images/clear.png"
                }
                if (data.weather[0].main == "Drizzle") {
                    weatherIcon.src = "mages/drizzle.png"
                }
                if (data.weather[0].main == "Mist") {
                    weatherIcon.src = "images/mist.png"
                }
                if (data.weather[0].main == "Snow") {
                    weatherIcon.src = "images/snow.png"
                }

                document.querySelector(".weather").style.display = "block"

            }

        }


        searchBtn.addEventListener("click", (value) => {
            checkWeather(searchBox.value);
        })
