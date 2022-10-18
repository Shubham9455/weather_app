import React from "react";
import "./HeroSection.css";
const HeroSection = (props) => {
  const [src, setSrc] = React.useState("/video/3177755878.mp4");
  const [search, setSearch] = React.useState("");

  const { data, location } = props;
  const { temp_c, condition, wind_kph, wind_dir, pressure_mb ,cloud,humidity} = data;
  const { name, country } = location;
  // const {pressure_mb,humidity,feelslike_c} = condition;
  const { text, icon } = data.condition;

  React.useEffect(() => {
    if (text.includes("rain") && text.includes("Light")) {
      setSrc("/video/rain.mp4");
    } else if (text.includes("rain") && text.includes("Heavy")) {
      setSrc("/video/heavy_rain.mp4");
    } else if (text.includes("cloud")) {
      setSrc("/video/cloudy.mp4");
    } else if (text.includes("sun")) {
      setSrc("/video/sunny.mp4");
    } else {
      setSrc("/video/3177755878.mp4");
    }
  }, [text]);

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
            <div className="forecast" key={index}>
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
