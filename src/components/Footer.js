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

const Footer = (props) => {
  const convert = (x) => {
    return (x - 273.15).toFixed(2);
  };

  const temp1 = props.Data.list[0].main.temp;
  const MinTemp = props.Data.list[0].main.temp_min;
  const MaxTemp = props.Data.list[0].main.temp_max;
  const Humidity = props.Data.list[0].main.humidity;
  const Pressure = props.Data.list[0].main.pressure;
  const main = props.Data.list[0].weather[0].main;

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
    /* for step 6
    function getWeatherIcon(id) {
      switch (true) {
        case id < 300:
          return storm;
        case id >= 300 && id < 500:
          return drizzle;
        case id >= 500 && id < 600:
          return rain;
        case id >= 600 && id < 700:
          return snow;
        case id >= 700 && id < 800:
          return fog;
        case id === 800:
          return clear;
        case id === 801:
          return partlycloudy;
        case id > 801 && id <= 805:
          return mostlycloudy;
        default:
          return unknown;
      }
    }
*/
  }
  return (
    <footer>
      <div>
        <p>03:00</p>
        <img src={checkImage(props.Data.list[5].weather[0].main)} alt="" />
        <p>{convert(props.Data.list[5].main.temp)}°C</p>
      </div>
      <div>
        <p>06:00</p>
        <img src={checkImage(props.Data.list[6].weather[0].main)} alt="" />
        <p>{convert(props.Data.list[6].main.temp)}°C</p>
      </div>
      <div>
        <p>09:00</p>
        <img src={checkImage(props.Data.list[7].weather[0].main)} alt="" />
        <p>{convert(props.Data.list[7].main.temp)}°C</p>
      </div>
      <div>
        <p>12:00</p>
        <img src={checkImage(props.Data.list[8].weather[0].main)} alt="" />
        <p>{convert(props.Data.list[8].main.temp)}°C</p>
      </div>
      <div>
        <p>15:00</p>
        <img src={checkImage(props.Data.list[9].weather[0].main)} alt="" />
        <p>{convert(props.Data.list[9].main.temp)}°C</p>
      </div>
      <div>
        <p>18:00</p>
        <img src={checkImage(props.Data.list[10].weather[0].main)} alt="" />
        <p>{convert(props.Data.list[10].main.temp)}°C</p>
      </div>
      <div>
        <p>21:00</p>
        <img src={checkImage(props.Data.list[11].weather[0].main)} alt="" />
        <p>{convert(props.Data.list[10].main.temp)}°C</p>
      </div>
    </footer>
  );
};

export default Footer;