import { useState, useEffect } from 'react'
import FeatherIcon from 'feather-icons-react'

import './weather.css'
import { fetchCity } from '../../utils/fetchCity'
import { getCoords } from '../../utils/getCoords'

export const Weather = () => {
  const [city, setCity] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [current, setCurrent] = useState()

  const optionsDay = {
    weekday: 'long'
  }

  const optionsDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const convertDay = (date, options) =>
    Int.DateTimeFormat("en", options).format(new Date (date * 1000))

  useEffect(() => {
    const data = async () => {
      try {
        const {latitude: lat , longitude : lon} = await getCoords()
       //  console.log( latitude, longitude);
         const res = await fetchCity({lat, lon})
         setCity(res)
         setCurrent(res.lis)
         setLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    Object.keys(city).length === 0 && data()
  }, [])

  const filterCurrent = (date) =>{
    const tmp = city.list.find((day) => day.dt === date)
    const isTmp = current.dt !== tmp.dt
    isTmp && setCurrent(tmp)
  }

  // if(loading) {
  //   console.log( convertDay(current.));
  // }

  // console.log(city)

  return loading
    ? (
      <p className='text-white'>{error && error.message}</p>
      )
    : (
      <div className='container'>
        <div className='weather-side'>
          <div className='weather-gradient' />
          <div className='date-container'>
            <h2 className='date-dayname'>
              {convertDay(current.dt, optionsDay)}
            </h2>
            <span className='date-day'>
              {convertDay(current.dt, optionsDate)}
            </span>
            <FeatherIcon className='location-icon' icon='map-pin' />
            <span className='location'>
              {city.city.name}, {city.city.country}
            </span>
          </div>
          <div className='weather-container'>
            <img
              className='weather-icon'
              src={`http://openweathermap.org/img/wn/${current.weather.icon}@2x.png`}
              alt=''
            />
            <h1 className='weather-temp'>
              {current.main.temp.toFixed(0)}°C
            </h1>
            <h3 className='weather-desc'>
              {current.weather.description}
            </h3>
          </div>
        </div>
        <div className='info-side'>
          <div className='today-info-container'>
            <div className='today-info'>
              <div className='precipitation'>
                <span className='title'>PRECIPITATION</span>
                <span className='value'>{current.pop * 100} %</span>
              </div>
              <div className='humidity'>
                <span className='title'>HUMIDITY</span>
                <span className='value'>{current.main.humidity} %</span>
              </div>
              <div className='wind'>
                <span className='title'>WIND</span>
                <span className='value'>{current.wind.speed} mt/s</span>
              </div>
            </div>
          </div>
          <div className='week-container'>
            <ul className='week-list'>
              {current.map((day, index) => (
                <li onClick={()=> filterCurrent(day.dt)} key={index} className={index === 0 ? 'active' : ''}>
                  <FeatherIcon className='day-icon' icon='sun' />
                  <span className='day-name'>
                    {convertDay(day.dt, { weekday: 'short' })}
                  </span>
                  <span className='day-temp'>{day.main.temp.toFixed(0)}°C</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='location-container'>
            <button className='location-button'>
              <FeatherIcon icon='map-pin' />
              <span>Change location</span>
            </button>
          </div>
        </div>
      </div>
      )
}