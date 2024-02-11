const appid = "Your_API_ID";

function find() {
    // Get the user's input
    const city = document.getElementById("city").value;
  
    // Make the API request
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`)
      .then(response => response.json())
      .then(data => {
        // Display the weather information to the user
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const Cloud = `Weather in ${city}: ${weatherDescription}.`;
        const Temperature = `Temperature: ${temperature}°C.`;
        const Humidity= `Humidity: ${humidity}%. `;
        const Wind = `Wind speed: ${windSpeed} m/s.`;
        document.getElementsByClassName("Cloud")[0].textContent = Cloud;
        document.getElementsByClassName("Temperature")[0].textContent = Temperature;
        document.getElementsByClassName("Humidity")[0].textContent = Humidity;
        document.getElementsByClassName("Wind")[0].textContent = Wind;
      })
      .catch(error => {
        // Display an error message to the user
        document.getElementById("result").textContent = `Error: ${error.message}`;
      });
  }
