import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition);
  };
  const showPosition = (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log("현재 위치", lat, lon);
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);
  return <div></div>;
}

export default App;
