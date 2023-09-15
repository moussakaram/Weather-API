import React, { Component } from "react";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import unknown from "../img/weather-icons/unknown.svg";
import FakeWeather from "../data/FakeWeather.json";

/* class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  */

const Body = (props) => {
  const convert = (x) => {
    return (x - 273.15).toFixed(2);
  };

  const MinTemp = props.Data.list[0].main.temp_min;
  const MaxTemp = props.Data.list[0].main.temp_max;
  const Humidity = props.Data.list[0].main.humidity;
  const Pressure = props.Data.list[0].main.pressure;
  const main = props.Data.list[0].weather[0].main;

  let tempInfo;

  function checkImage(image) {
    switch (image) {
      case "Clear":
        return clear;
        break;
      case "Rain":
        return rain;
        break;
      case "Clouds":
        return cloudy;
        break;
      case "Unknown":
        return unknown;
        break;
    }
  }
  /* render() {*/
  return (
    <div className="content-app">
      <img
        className="img-app-main"
        src={checkImage(props.Data.list[0].weather[0].main)}
        alt=""
      />
      <p className="temp-info">{tempInfo}</p>
      <p className="temp1">
        Temperature&nbsp;&nbsp;
        <span>
          &nbsp;{convert(MinTemp)}°C to {convert(MaxTemp)}°C{" "}
        </span>
      </p>
      <p className="humidity">
        Humidity&nbsp;&nbsp;&nbsp;<span>{Humidity}%&nbsp;&nbsp;&nbsp;</span>
        Pressure&nbsp;&nbsp;&nbsp;<span>{Pressure}</span>
      </p>
    </div>
  );
};
/* }  */
export default Body;
