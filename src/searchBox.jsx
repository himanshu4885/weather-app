import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [loading, setLoading] = useState(false);

  const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
  const GEO_URL = "https://api.openweathermap.org/geo/1.0/direct";
  const API_KEY = "43b2a542ee012e26e14762eb437922b0";

  // Fetch Weather
  let getWeatherInfo = async () => {
    try {
      setLoading(true);

      // Step 1 → Get coordinates from city name
      let geoResponse = await fetch(`${GEO_URL}?q=${city}&limit=1&appid=${API_KEY}`);
      let geoData = await geoResponse.json();

      if (!geoData || geoData.length === 0) {
        alert("City not found! Please check the spelling.");
        setLoading(false);
        return;
      }

      let { lat, lon, name } = geoData[0];

      // Step 2 → Get weather using coordinates
      let weatherResponse = await fetch(
        `${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await weatherResponse.json();

      if (jsonResponse.cod !== 200) {
        alert("Unable to fetch weather data.");
        setLoading(false);
        return;
      }

      // ⭐ IMPORTANT: weatherId added
      let result = {
        city: name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        weatherId: jsonResponse.weather[0].id,
      };

      updateInfo(result);
      setLoading(false);

    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("Something went wrong while fetching data.");
      setLoading(false);
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      getWeatherInfo();
      setCity("");
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Enter City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type="submit" disabled={loading}>
          {loading ? "Fetching..." : "Search"}
        </Button>
      </form>
    </div>
  );
}

