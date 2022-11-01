import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, useRef } from "react";
import WeatherInfo from "./component/WeatherInfo";
import WeatherButton from "./component/WeatherButton";
function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [info, setInfo] = useState(null);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition);
  };
  const showPosition = (position) => {
    setLat(() => position.coords.latitude);
    setLon(() => position.coords.longitude);
  };
  const getCurrentWeather = async (lat, lon) => {
    const API_KEY = "f224b4bceab7f1da7f43966dc18bfa6d";
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    setInfo(data);
    console.log("테스트중");
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (lat) {
      getCurrentWeather(lat, lon);
    }
  }, [lat]);

  return (
    <div>
      <div className="container">
        <WeatherInfo info={info}></WeatherInfo>
        <WeatherButton
          lat={lat}
          lon={lon}
          setInfo={setInfo}
          getCurrentWeather={getCurrentWeather}
        ></WeatherButton>
      </div>
    </div>
  );
}

export default App;
