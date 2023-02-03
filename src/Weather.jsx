import React, { useState, useEffect } from 'react';

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
    }, [props.city, props.units]);

    if (weather === null) {
        return <div>Loading weather data...</div>;
    } else if (weather.message === 'city not found') {
        return <div>City not found</div>;
    }

    return (
        <div>
            <p>{weather.name}</p>
            <p>Current temperature: {weather.main.temp} {props.units.temp}</p>
            <p>Feels like: {weather.main.feels_like} {props.units.temp}</p>
            <p>Summary: {weather.weather[0].main}</p>
            <p>Wind speed: {weather.wind.speed} {props.units.speed}</p>
        </div>
    );
}

export default Weather;