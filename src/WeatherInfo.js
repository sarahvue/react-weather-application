import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-4 d-flex align-items-center">
        <div className="col-sm-6 temp">
          <div className="icons">
            <WeatherIcon code={props.data.icon} />
          </div>

          <div className="temp-2 d-flex">
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°F</span>
          </div>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mp/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
