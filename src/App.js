import Weather from "./Weather";
import './App.css';
import { useState } from "react";
import Navbar from "./Navbar";

function App() {

  const [city, setCity] = useState('');
  const [units, setUnits] = useState({
    name: 'metric',
    temp: '°C',
    speed: 'm/s',
  })

  function changeUnits() {

    switch (units.name) {

      case 'metric':
        setUnits({
          name: 'imperial',
          temp: '°F',
          speed: 'mph',
        });
        break;
      case 'imperial':
        setUnits({
          name: 'standard',
          temp: 'K',
          speed: 'm/s',
        });
        break;
      default:
        setUnits({
          name: 'metric',
          temp: '°C',
          speed: 'm/s',
        })
    }
  }

  function changeCity() {

    let newCity = document.querySelector('#cityInp').value;

    console.log(newCity);

    setCity(newCity);
  }

  return (
    <div className="App">
      <Navbar changeCity={changeCity} changeUnits={changeUnits} units={units} />
      <Weather city={city || 'Tel Aviv'} units={units} />
    </div>
  );
}



export default App;
