function getWeatherByLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const apiKey = 'c2d25c5918af46a0892153828230406';
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

        fetch(url)
          .then(response => response.json())
          .then(data => {
            const city = data.location.name;
            const temperature = data.current.temp_c;
            const description = data.current.condition.text;

            let smiley = '';
            if (temperature > 30) {
              smiley = '☀️'; 
            } else if (temperature > 25) {
              smiley = '😎'; 
            } else if (temperature > 20) {
              smiley = '😊'; 
            } else if (temperature > 15) {
              smiley = '🌤️'; 
            } else if (temperature > 10) {
              smiley = '😐'; 
            } else {
              smiley = '❄️'; 
            }

            const result = `Weather in ${city}:<br>
                            Temperature: ${temperature}°C<br>
                            Description: ${description} ${smiley} <br>`;

            document.getElementById('result').innerHTML = result;
          })
          .catch(error => {
            console.error(error);
            document.getElementById('result').textContent = 'An error occurred.';
          });
      },
      function(error) {
        console.error(error);
        document.getElementById('result').textContent = 'Unable to retrieve your location.';
      }
    );
  } else {
    console.log('Geolocation is not supported by this browser.');
    document.getElementById('result').textContent = 'Geolocation is not supported by this browser.';
  }
}

function getWeatherBySearch() {
  const apiKey = 'c2d25c5918af46a0892153828230406';
  const city = document.getElementById('city').value;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        document.getElementById('result').textContent = 'City not found!';
      } else {
        const temperature = data.current.temp_c;
        const description = data.current.condition.text;

        let smiley = '';
        if (temperature > 30) {
          smiley = '☀️'; 
        } else if (temperature > 25) {
          smiley = '😎'; 
        } else if (temperature > 20) {
          smiley = '😊'; 
        } else if (temperature > 15) {
          smiley = '🌤️'; 
        } else if (temperature > 10) {
          smiley = '😐'; 
        } else {
          smiley = '❄️'; 
        }

        const result = `Weather in ${city}:<br>
                        Temperature: ${temperature}°C<br>
                        Description: ${description} ${smiley} <br>`;

        document.getElementById('result').innerHTML = result;
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById('result').textContent = 'An error occurred.';
    });
}


document.getElementById('searchButton').addEventListener('click', getWeatherBySearch);


document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  getWeatherBySearch();
});


getWeatherByLocation();
