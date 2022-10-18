import React from "react";
import './HeroSection.css'
const HeroSection = (props) => {
  const [search,setSearch] = React.useState("");

  const {data} = props;
  const {temp_c,condition,wind_kph,wind_dir} = data;
  // const {name,country} = data.location;
  const {text,icon} = data.condition;
  return (
    <div className="hero-container">
      <video autoPlay loop src="/video/3177755878.mp4"></video>
      <div className="city_temp_weather">
        <div className="city">
          <h1>Varanasi</h1>
          <h5>India</h5>
          <img src={icon} alt="" />

          <h3>{text}</h3>
        </div>
        <div className="weather_report"></div>
        <div className="temp">
          <h1>{temp_c}°C</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
