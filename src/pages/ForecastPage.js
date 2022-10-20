import React from 'react'
import NavBar from '../componants/NavBar'
import { useLocation } from "react-router-dom";
import './ForecastPage.css'
import PlotData from '../componants/PlotData';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


const ForecastPage = () => {
  const location = useLocation();
  const {
    avghumidity,
    avgtemp_c,
    condition,
    daily_chance_of_rain,
    maxtemp_c,
    mintemp_c,
    uv,
  } = location.state.item.day;
  const {text,icon} = condition;
  const [src,setSrc] = React.useState("/video/3177755878.mp4");
  const { hour} = location.state.item;

  React.useEffect(() => {
    if (text.includes("rain")) {
      setSrc("/video/rain.mp4");
    } else if (text.includes("rain") && text.includes("Heavy")) {
      setSrc("/video/heavy_rain.mp4");
    } else if (text.includes("cloud")) {
      setSrc("/video/cloudy.mp4");
    } else if (text.includes("Sun")) {
      setSrc("/video/Sunny.mp4");
    } else {
      setSrc("/video/3177755878.mp4");
    }
  }, [text]);
  console.log(location.state.item);
  return (
    <div>
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        style={{ position: "fixed", width: "100%", zIndex: "1" }}
      >
        <Container fluid>
          <Navbar.Brand
            style={{
              margin:"1px auto",
              // marginLeft: "50px",
            }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Weatherly
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="main_container">
        <video autoPlay loop src={src}></video>
        
        <div className="date">
          <h1>{location.state.item.date}</h1>
        </div>
        <div className="city_temp_weather2">
          <div className="city">
            <h1>{location.state.city}</h1>
            <h5>{location.state.country}</h5>
          </div>
          <div> 
            <img src={icon} alt="" />
            <h3>{text}</h3>
          </div>
          <div className="weather_report"></div>
          <div className="temp">
            <h1>{avgtemp_c}°C</h1>
          </div>
        </div>
        <div className="other_details2">
          <div className="others">
            <h4>{mintemp_c} °C</h4>
            <h3 className="det_name">Min Temp</h3>
          </div>

          <div className="others">
            <h4>{maxtemp_c} °C</h4>
            <h3 className="det_name">Max Temp</h3>
          </div>

          <div className="others">
            <h4>{daily_chance_of_rain} %</h4>

            <h3 className="det_name">Rain</h3>
          </div>

          <div className="others">
            <h4>{uv}</h4>
            <h3 className="det_name">UV</h3>
          </div>
        </div>
        <div className="graphs">
          <PlotData hourData = {hour}/>
        </div>
      </div>
    </div>
  );
}

export default ForecastPage
