import React, { useEffect,useState } from 'react'
import HeroSection from '../componants/HeroSection';
import NavBar from '../componants/NavBar'



const HomePage = () => {
  const [current,setCurrent] = useState(null);
  const [location,setLocation] = useState(null);
  const [forecast,setForecast] = useState(null);
  const [querry,setQuerry] = useState("Varanasi");

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
  }
  useEffect(() => {
    getData(querry);
  }, [querry]);

  return (
    <>
      <NavBar setquerry={setQuerry} querry={querry} />
      {current == null ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <HeroSection data={current} location={location} forecast={forecast} />
        </div>
      )}
    </>
  );
}

export default HomePage
