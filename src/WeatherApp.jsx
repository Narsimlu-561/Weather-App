import SearchBox from "./SearchBox"
import InfoBox from './InfoBox'
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
      city : "Wonderland",
      feelsLike: 32.58,
      humidity: 56,
      temp: 30.29,
      tempMax: 30.29,
      tempMin: 30.29,
      weather: "broken clouds"
    })
    let updateInfo=(newInfo)=>{
      setweatherInfo(newInfo);
    }
  return (
    <div style={{textAlign:"center"}}>
      <h2>Weather app by Narsimlu</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}