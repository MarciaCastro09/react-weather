import React from "react";
import "./styles.css";
import WeatherForecast from "./WeatherForecast";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search</h1>
      <WeatherForecast />
    </div>
  );
}
