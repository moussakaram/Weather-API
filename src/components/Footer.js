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
/*
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    }
  }
  render() {
*/
const Footer = (props) => {
  const convert = (x) => {
    return (x - 273.15).toFixed(2);
  };

  const MinTemp = props.Data.list[0].main.temp_min;
  const MaxTemp = props.Data.list[0].main.temp_max;
  const Humidity = props.Data.list[0].main.humidity;
  const Pressure = props.Data.list[0].main.pressure;
  const Description = props.Data.list[0].weather.description;

  let imageSource;
  let tempInfo;
  if (Description === "clear sky") {
    imageSource = clear;
    tempInfo = "clear sky";
  } else if (Description === "snow") {
    imageSource = snow;
    tempInfo = "snow";
  } else if (Description === "storm") {
    imageSource = storm;
    tempInfo = "storm";
  } else if (Description === "light rain") {
    imageSource = rain;
    tempInfo = "light rain";
  } else if (Description === "broken clouds") {
    imageSource = mostlycloudy;
    tempInfo = "broken clouds";
  } else if (Description === "moderate rain") {
    imageSource = rain;
    tempInfo = "moderate rain";
  } else if (Description === "few clouds") {
    imageSource = partlycloudy;
    tempInfo = "few clouds";
  } else if (Description === "fog") {
    imageSource = fog;
    tempInfo = "fog";
  } else if (Description === "drizzle") {
    imageSource = drizzle;
    tempInfo = "drizzle";
  } else if (Description === "cloudy") {
    imageSource = cloudy;
    tempInfo = "cloudy";
  } else {
    imageSource = unknown;
    tempInfo = "unknown";
  }

  return (
    <footer>
      <div>
        <p>03:00</p>
        <img src={imageSource} alt="" />
        <p>{tempInfo}°C</p>
      </div>
      <div>
        <p>06:00</p>
        <img src={imageSource} alt="" />
        <p>{tempInfo}°C</p>
      </div>
      <div>
        <p>09:00</p>
        <img src={imageSource} alt="" />
        <p>{tempInfo}°C</p>
      </div>
      <div>
        <p>12:00</p>
        <img src={imageSource} alt="" />
        <p>{tempInfo}°C</p>
      </div>
      <div>
        <p>15:00</p>
        <img src={imageSource} alt="" />
        <p>{tempInfo}°C</p>
      </div>
      <div>
        <p>18:00</p>
        <img src={imageSource} alt="" />
        <p>{tempInfo}°C</p>
      </div>
      <div>
        <p>21:00</p>
        <img src={imageSource} alt="" />
        <p>{tempInfo}°C</p>
      </div>
    </footer>
  );
};
/* }*/
export default Footer;
