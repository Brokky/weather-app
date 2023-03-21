import React from 'react'

function Navbar(props) {

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
          props.changeCity(event);
        }
      }


    return (
        <div className="navbar">
            <input
                id="cityInp"
                placeholder="City"
                onInput={props.changeCity}
                onKeyDown={handleKeyDown}
            />
            <button onClick={props.changeUnits}>{props.units.temp}</button>
        </div>
    );
}


export default Navbar