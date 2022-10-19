import React, { useEffect, useState } from "react";
import HeroSection from "../componants/HeroSection";
import NavBar from "../componants/NavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomePage = () => {
  const [current, setCurrent] = useState(null);
  const [location, setLocation] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [querry, setQuerry] = useState("Delhi");

  const getData = async (querry) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "3a77c2e6afmsh6383b8baf7db65cp1fe15cjsn9b130326f727",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    await fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${querry}&days=5`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCurrent(response.current);
        setLocation(response.location);
        setForecast(response.forecast);
      })
      .catch((err) => console.error(err));
  };

  function getCoordintes() {
    var options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    };

    function success(pos) {
      var crd = pos.coords;
      var lat = crd.latitude.toString();
      var lng = crd.longitude.toString();
      var coordinates = [lat, lng];
      console.log(`Latitude: ${lat}, Longitude: ${lng}`);
      var xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        "https://us1.locationiq.com/v1/reverse.php?key=pk.64989697be948cf9dfcbbdce26200585&lat=" +
          lat +
          "&lon=" +
          lng +
          "&format=json",
        true
      );
      xhr.send();
      xhr.onreadystatechange = processRequest;
      xhr.addEventListener("readystatechange", processRequest, false);

      function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var response = JSON.parse(xhr.responseText);
          var city = response.address.city;
          setQuerry(city);
          return;
        }
      }
      return;
    }

    function error(err) {
      toast.info(
        "You Have To Enable Location Or Search Your City Name To Get Live Data"
        ,{
          position:"top-center",
          pauseOnHover:"true",
          theme:"dark"
        }
        );
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }
  useEffect(()=>{
    getCoordintes();
  },[]);

  useEffect(() => {
    if (querry === ""){
      setQuerry("Delhi");
    }
    getData(querry);
  }, [querry]);

  return (
    <>
      <NavBar setquerry={setQuerry} querry={querry} />
      {current == null ? (
        <h1>Loading</h1>
      ) : (
        
          <div>
            <ToastContainer></ToastContainer>
            <HeroSection
              data={current}
              location={location}
              forecast={forecast}
            />
          </div>
      )}
    </>
  );
};

export default HomePage;
