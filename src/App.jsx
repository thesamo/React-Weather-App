import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=048a7ca406024669e69342eda7ee933d`;

  const fetchAPI = async (e) => { 
    if (e.key === "Enter") { 
      if (location.trim() === "") {
        alert("Enter a city name ");
      } else {
        const response = await axios.get(weatherUrl);
        setData(response.data);
        console.log(response.data);
      }
    }
  };

  return (
    <div className="custom-container flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover">
      <div className="weather-app rounded-lg p-[90px] flex flex-col items-center">
        <div className="top text-4xl mb-6 font-bold">
          <h1>Weather-App</h1>
        </div>

        <div className="mb-6">
          <input
            className="py-2 border-0 outline-none bg-[transparent] text-lg capitalize text-center"
            type="text"
            placeholder="Enter a city name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={fetchAPI}
          />
        </div>
       
        <div className="loaction text-2xl mt-4">
          <p>
            City: <strong>{data.name}</strong>
          </p>
        </div>
        <div className="temp mt-4 text-xl">
           <p>Temperature: <strong>{data && data.main && data.main.temp.toFixed() + ("°")} </strong></p> 
        </div>

        <div className="humidity text-xl">
          <p>
            Humidity: <strong>{data && data.main && data.main.humidity.toFixed() + ("%") } </strong>
          </p>
        </div>
        <div className="wind text-xl">
          <p>
            Wind: <strong>{data && data.wind && data.wind.speed.toFixed() + ("MPH")} </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
