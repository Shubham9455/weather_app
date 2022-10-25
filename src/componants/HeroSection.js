import React from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

const HeroSection = (props) => {
  const [src, setSrc] = React.useState("/video/3177755878.mp4");
  const navigator = useNavigate();
  const { data, location } = props;
  const { temp_c, condition, wind_kph, wind_dir, pressure_mb ,cloud,humidity} = data;
  const { name, country } = location;
  const { text, icon } = condition;
  const [forecastclicked,setforecastclicked] = React.useState(false);
  

  React.useEffect(() => {
    if (text.toLowerCase().includes("rain")) {
      setSrc("/video/rain.mp4");
    } else if (
      text.toLowerCase().includes("rain") &&
      text.toLowerCase().includes("heavy")
    ) {
      setSrc("/video/heavy_rain.mp4");
    } else if (text.toLowerCase().includes("cloud")) {
      setSrc("/video/cloudy.mp4");
    } else if (text.toLowerCase().includes("sun")) {
      setSrc("/video/Sunny.mp4");
    } else if (text.toLowerCase().includes("clear")) {
      setSrc("/video/clear.mp4");
    } else if (text.toLowerCase().includes("snow")) {
      setSrc("/video/snow.mp4");
    } else if (text.toLowerCase().includes("thunder")) {
      setSrc("/video/lightning.mp4");
    } else {
      setSrc("/video/3177755878.mp4");
    }
  }, [text]);

  React.useEffect(()=>{
    console.log(forecastclicked);
  },[forecastclicked]);

  return (
    <div className="hero-container">
      <video autoPlay loop src={src}></video>
      <div className="city_temp_weather">
        <div className="city">
          <h1>{name}</h1>
          <h5>{country}</h5>
        </div>
        <div>
          <img src={icon} alt="" />
          <h3>{text}</h3>
        </div>
        <div className="weather_report"></div>
        <div className="temp">
          <h1>{temp_c}°C</h1>
        </div>
      </div>

      <div className="other_details">
        <div className="others">
          <h4>{cloud}</h4>
          <h3 className="det_name">Cloud</h3>
        </div>

        <div className="others">
          <h4>{pressure_mb} mb</h4>
          <h3 className="det_name">Pressure</h3>
        </div>

        <div className="others">
          <h4>
            {wind_kph} km/h {wind_dir}
          </h4>

          <h3 className="det_name">Wind</h3>
        </div>

        <div className="others">
          <h4>{humidity}</h4>
          <h3 className="det_name">Humidity</h3>
        </div>
      </div>
      <div className="three_day_forecast">
        {props.forecast.forecastday.map((item,index) => {
          return (
            <div className="forecast" key={index} onClick={(()=>{
              console.log(item);
              navigator("/forecast",{state:{item:item,city:name,country:country}});
        })}>
              <h3>{item.date}</h3>
              <img src={item.day.condition.icon} alt="" />
              <h4>{item.day.condition.text}</h4>
              <h4>Min {item.day.maxtemp_c}°C</h4>
              <h4>Min {item.day.mintemp_c}°C</h4>
            </div>
          );
        })
        }
      </div>
    </div>
  );
};

export default HeroSection;
