// import SearchBox from "./searchBox";
// import InfoBox from "./infoBox";
// import { useState } from "react";

// export default function WeatherApp(){
//     const[weatherInfo,setWeatherInfo]=useState(
//         {
//         city:"Delhi",
//         feelsLike:24.84,
//         temp:25.85,
//         tempMin: 25.05,
//         tempMax: 25.05,
//         humidity: 47,
//         weather: "haze",
//     });

//     let updateInfo=(result)=>{
//         setWeatherInfo(result);
//     };
//     return(

//       <div style={{textAlign:"center"}}>
//         <h2>Weather App </h2>
//         <SearchBox  updateInfo={updateInfo } setWeatherInfo={setWeatherInfo}/>
//         <InfoBox info={weatherInfo}/>
//       </div>
//     );
// }

import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp() {
  // ❌ Removed Delhi default
  // ✅ Start with null (no weather yet)
  const [weatherInfo, setWeatherInfo] = useState(null);

  // Function to update weather info when SearchBox fetches data
  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>

      {/* Search input */}
      <SearchBox updateInfo={updateInfo} />

      {/* Only show InfoBox after search */}
      {weatherInfo ? (
        <InfoBox info={weatherInfo} />
      ) : (
        <p style={{ color: "gray" }}>Enter a city to see its weather 🌤️</p>
      )}
    </div>
  );
}
