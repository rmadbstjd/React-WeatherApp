import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";

function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const getCurrentLocation = () => {
    console.log("1");
    navigator.geolocation.getCurrentPosition(showPosition);
    console.log("3");
  };
  const showPosition = (position) => {
    console.log("2");

    setLat(() => position.coords.latitude);
    setLon(() => position.coords.longitude);
  };
  const getCurrentWeather = (lat, lon) => {
    const API_KEY = "f224b4bceab7f1da7f43966dc18bfa6d";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        const temp = data.main.temp;
        const weathers = data.weather[data.weather.length - 1];
        console.log(temp, weathers);
      });
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (lat) {
      getCurrentWeather(lat, lon);
    }
  }, [lat]);
  return <div></div>;
}

export default App;
