import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  // USESTATE
  const [weatherData, setWeatherData] = useState({ ready: false });

  //function to make response
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: "Wednesday",
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }

  //Once loaded, do this:
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City..."
                className="form-control"
                autoFocus="on"
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              ></input>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-4">
          <div className="col-6 temp">
            <div>
              <img src={weatherData.icon} alt={weatherData.description}></img>
            </div>
            <div className="temp-2 d-flex">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°F</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mp/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ao845a73f82d076c60a25fbb55dt1569";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial
`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
