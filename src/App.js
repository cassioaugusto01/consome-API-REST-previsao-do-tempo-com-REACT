import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(res.data);
    console.log(res.data)
  }

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position)=> {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])


  if(location == false){
    return (
      <Fragment>
        você precisa habilitar a localização no browser o/
      </Fragment>
    )
  }
    else {
      return (
        <Fragment>
          <h3>clima nas suas coordenada ({weather['weather'][0]['description']})</h3>
          <hr />
          <ul>
            <li> atual: {weather['main']['temp']}º</li>
            <li> maxima: {weather['main']['temp_max']}º</li>
            <li> minima: {weather['main']['temp_min']}º</li>
            <li> pressao: {weather['main']['pressure']} hpa</li>
            <li> umidade: {weather['main']['humidity']}%</li>
          </ul>
        </Fragment>
    );

    }
  }

 


export default App;
