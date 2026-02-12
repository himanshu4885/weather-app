# 🌦️ React Weather Application

A responsive weather web application built using **React (Vite)** and **OpenWeatherMap API** that provides real-time weather details for any city worldwide.

The application first converts a city name into geographical coordinates using the **Geocoding API**, then fetches accurate weather information using the **Weather API**.

---

## 🚀 Features

* Search weather by city name
* Accurate location-based weather (Latitude & Longitude)
* Displays temperature, min & max temperature
* Humidity and "feels like" temperature
* Dynamic weather images based on official weather condition codes
* Loading indicator while fetching data
* Error handling for invalid city
* Clean UI using Material UI (MUI)
* Responsive design

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Language:** JavaScript (ES6)
* **UI Library:** Material UI (MUI)
* **API:** OpenWeatherMap API
* **Styling:** CSS

---

## 🌐 API Used

**OpenWeatherMap**

* Geocoding API → Convert city name → coordinates
* Weather API → Fetch real-time weather data

---

## ⚙️ How It Works

1. User enters a city name.
2. App requests coordinates from the OpenWeather Geocoding API.
3. Using those coordinates, the Weather API is called.
4. Weather data is processed and displayed on screen.
5. Weather condition codes determine which image (clear, rain, snow, mist, clouds) is shown.

---

## 📂 Project Structure

```
weather-app
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── WeatherApp.jsx
│   ├── SearchBox.jsx
│   ├── InfoBox.jsx
│   ├── searchBox.css
│   ├── infoBox.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── package-lock.json
```

---

## 🧠 Concepts Implemented

* React Functional Components
* Props & State Management
* API Fetching (async/await)
* Conditional Rendering
* Event Handling
* Dynamic UI Rendering
* Weather condition code mapping

---

## ▶️ Running Locally

1. Install dependencies

```
npm install
```

2. Start development server

```
npm run dev
```

3. Open browser

```
http://localhost:5173
```

---

## 👨‍💻 Author

**Himanshu Shandilya**
