import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";


import clear from "./img/weather-icons/clear.svg"
import cloudy from "./img/weather-icons/cloudy.svg"
import drizzle from "./img/weather-icons/drizzle.svg"
import fog from "./img/weather-icons/fog.svg"
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"
import partlycloudy from "./img/weather-icons/partlycloudy.svg"
import rain from "./img/weather-icons/rain.svg"
import snow from "./img/weather-icons/snow.svg"
import storm from "./img/weather-icons/storm.svg"
import unknown from "./img/weather-icons/unknown.svg"
import "./App.css";


// import FakeWeather from "./fake weather /FakeWeather.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };
  
  // FakeWeather =async()=>{
  //   const inputWeather =async()=>{
  //    const element =document.getElementsByClassName("app-input");
  //     if (element[0]===""){
    //     return 0;
    //   }
    // }
    // let response = await fetch("FakeWeather");
    // let data = await response.json();
    

  
  render(){
    return (
  
   
<body className="app">
    <header className="header-app">
        <input className="app-input" placeholder="London"/>
        <button className="app-button" >FIND WEATHER </button>
    </header>
    <div className="content-app">
        <img className="img-app-main"    src={clear} alt="clear"/>
        <p className="overcast">overcast clouds</p>
        <p className="temp1">Temperature  <span> 10  to 11C </span></p>
        <p className="humidity">Humidity <span>78%</span>  Pressure  <span>1008.48</span></p>

    </div>
    

    <footer>
       <div> 
        <p>03:00</p>
        <img src={cloudy}/>
        <p>8C</p>
        </div>
        <div>
        <p>03:00</p>
        <img src={drizzle}/>
        <p>8C</p>
        </div>
        <div>
        <p>03:00</p>
        <img src={fog}/>
        <p>8C</p>
        </div>
        <div>
        <p>03:00</p>
        <img src={rain}/>
        <p>8C</p>
        </div>
        <div>
        <p>03:00</p>
        <img src={snow}/>
        <p>8C</p>
        </div>
        <div>
        <p>03:00</p>
        <img src={storm}/>
        <p>8C</p>
        </div>
        <div>
        <p>03:00</p>
        <img src={cloudy}/>
        <p>8C</p>
        </div>
    </footer>


 
    </body>

     
    );
  }
}
export default App;
