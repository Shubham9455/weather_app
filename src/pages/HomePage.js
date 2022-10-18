import React, { useEffect,useState } from 'react'
import HeroSection from '../componants/HeroSection';
import NavBar from '../componants/NavBar'



const HomePage = () => {
  const [current,setCurrent] = useState(null);
  const [location,setLocation] = useState(null);

  const getData = async (querry) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "3a77c2e6afmsh6383b8baf7db65cp1fe15cjsn9b130326f727",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${querry}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCurrent(response.current);
        setLocation(response.location);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getData("varanasi");
  }, []);

  return (
    (current == null)?<h1>Loading</h1>:(<div>
      <NavBar />
      <HeroSection data = {current}/>
    </div>)
  );
}

export default HomePage
