import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Navbar(props) {

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            props.changeCity();
        }
    }


    return (
        <div className="navbar">
            <div className="search">
                <input
                    id="cityInp"
                    placeholder="City..."
                    onKeyDown={handleKeyDown}
                />
                <div
                    className="search-icon"
                    onClick={props.changeCity}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
            <button onClick={props.changeUnits}>Units: {props.units.temp}</button>

        </div>
    );
}


export default Navbar