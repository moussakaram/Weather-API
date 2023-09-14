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

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  render() {
    return (
      <div className="content-app">
        <img className="img-app-main" src={clear} alt="clear" />
        <p className="overcast">overcast clouds</p>
        <p className="temp1">
          Temperature <span> 10 to 11C </span>
        </p>
        <p className="humidity">
          Humidity <span>78%</span> Pressure <span>1008.48</span>
        </p>
      </div>
    );
  }
}
export default Body;
