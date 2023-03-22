import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCloudRain, faSun, faSmog, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'

function Weather(props) {
    const apiKey = process.env.REACT_APP_API_KEY;

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        async function getWeather() {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${props.units.name}`
            );
            const data = await response.json();
            setWeather(data);
        }
        getWeather();
    }, [props.city, props.units, apiKey]);

    if (weather === null) {
        return <div>Loading weather data...</div>;
    } else if (weather.message === 'city not found') {
        return <div>City not found</div>;
    }

    return (
        <div className='weather-wrapper'>
            <div className='weather-description'>
                <div>
                    <img src={"https://flagsapi.com/" + weather.sys.country + "/shiny/64.png"}></img>
                    <p>{weather.name}, {new Intl.DisplayNames(['en'], { type: 'region' }).of(weather.sys.country)}</p>
                </div>
                <p>Current temperature: {weather.main.temp} {props.units.temp}</p>
                <p>Feels like: {weather.main.feels_like} {props.units.temp}</p>
                <p>Summary: {weather.weather[0].main}</p>
                <p>Wind speed: {weather.wind.speed} {props.units.speed}</p>
            </div>
            <div className='weather-summary'>
                <p>{Math.round(weather.main.temp)}{props.units.temp}</p>
                <div className='weather-icon'>
                    {weather.weather[0].main === 'Clouds' && <FontAwesomeIcon icon={faCloud} size='2xl' />}
                    {weather.weather[0].main === 'Drizzle' && <FontAwesomeIcon icon={faCloudRain} size='2xl' />}
                    {weather.weather[0].main === 'Clear' && <FontAwesomeIcon icon={faSun} size='2xl' />}
                    {weather.weather[0].main === 'Mist' && <FontAwesomeIcon icon={faSmog} size='2xl' />}
                    {weather.weather[0].main === 'Rain' && <FontAwesomeIcon icon={faCloudShowersHeavy} size='2xl' />}
                </div>
            </div>
        </div>
    );
}

export default Weather;


