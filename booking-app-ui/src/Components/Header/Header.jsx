import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faCar, faPlaneDeparture, faTaxi} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";


const Header = () => {
    return(
        <div className="headerList">
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlaneDeparture} />
                <span>Flights</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport Taxi</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
            </div>
        </div>
    )
}

export default Header;