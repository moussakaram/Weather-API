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

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  render() {
    return (
      <footer>
        <div>
          <p>03:00</p>
          <img src={cloudy} alt="" />
          <p>8°C</p>
        </div>
        <div>
          <p>06:00</p>
          <img src={drizzle} alt="" />
          <p>8°C</p>
        </div>
        <div>
          <p>09:00</p>
          <img src={fog} alt="" />
          <p>8°C</p>
        </div>
        <div>
          <p>12:00</p>
          <img src={rain} alt="" />
          <p>8°C</p>
        </div>
        <div>
          <p>15:00</p>
          <img src={snow} alt="" />
          <p>8°C</p>
        </div>
        <div>
          <p>18:00</p>
          <img src={storm} alt="" />
          <p>8°C</p>
        </div>
        <div>
          <p>21:00</p>
          <img src={cloudy} alt="" />
          <p>8°C</p>
        </div>
      </footer>
    );
  }
}
export default Footer;
