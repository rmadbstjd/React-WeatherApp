import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, useRef } from "react";
import WeatherInfo from "./component/WeatherInfo";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";
function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition);
  };
  const showPosition = (position) => {
    setLat(() => position.coords.latitude);
    setLon(() => position.coords.longitude);
  };
  const getCurrentWeather = async (lat, lon) => {
    const API_KEY = "f224b4bceab7f1da7f43966dc18bfa6d";
    setLoading(true);
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    setInfo(data);
    setLoading(false);
  };
  const getCityWeather = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f224b4bceab7f1da7f43966dc18bfa6d`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    data.main.temp = (data.main.temp - 273.15).toFixed(2);
    setInfo(data);
    setLoading(false);
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
    <div className="container">
      {loading ? (
        <ClipLoader color="#f88c6b" loading={loading} size={150}></ClipLoader>
      ) : (
        <div className="container">
          <WeatherInfo info={info}></WeatherInfo>
          <WeatherButton
            lat={lat}
            lon={lon}
            setInfo={setInfo}
            getCurrentWeather={getCurrentWeather}
            getCityWeather={getCityWeather}
          ></WeatherButton>
        </div>
      )}
    </div>
  );
}

export default App;
