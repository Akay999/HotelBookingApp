import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faCalendarDays, faCar, faChevronDown, faPeopleGroup, faPlaceOfWorship, faPlaneDeparture, faTaxi} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns"; 



const Header = () => {

    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult : 1,
        children : 0,
        room : 1
    })
    const [date, setDate] = useState([
        {
            startDate : new Date(),
            endDate : new Date(),
            key : 'selection'
        }
    ]);

    return(
        <div className="headerList text-white bg-[#2B3DBF] px-[4rem] py-[2rem]">
            <div className="HeaderListContainer  flex justify-start gap-20 text-lg">
                <div className="headerListItem flex flex-row items-center gap-5 active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem flex flex-row items-center gap-5">
                    <FontAwesomeIcon icon={faPlaneDeparture} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem flex flex-row items-center gap-5">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem flex flex-row items-center gap-5">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxi</span>
                </div>
                <div className="headerListItem flex flex-row items-center gap-5">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
            </div>

            <div className="TagLine mb-[6rem]">
                <div className="text-5xl font-black pt-[2rem] pb-4">
                    A lifetime of discounts? It's Genius.
                </div>
                <span>
                    Get rewarded for you travells - unlock instant savings of 10% or more with a free GoFleeky account.
                </span>
                <div className="py-[2rem]">
                    <button className="btnSignIn"><span>Register / Sign in</span></button>
                </div>
            </div>

            <div className="SearchBar w-[60%] text-black bg-white shadow-lg flex justify-between items-center px-[3rem] rounded-md h-1/5 absolute bottom-[-10%] left-[20%] pr-[4rem]">
                <div className="text-gray-400 w-1/4 flex flex-col justify-center gap-1 h-4/5">
                    <div className="text-[#000B7E]">
                        <span className="font-medium text-xl">Location</span>
                        <FontAwesomeIcon className="text-[#FD3F82] ml-3" icon={faChevronDown} />
                    </div>
                    <div className="text-sm">
                        <FontAwesomeIcon icon={faPlaceOfWorship} />
                        <span className="ml-2">Where are you going ?</span>
                    </div>
                </div>

                <div className="divider h-4/5"></div>

                <div className="text-gray-400 w-1/4 flex flex-col justify-center gap-1 h-4/5 relative">
                    <div className="text-[#000B7E]">
                        <span className="font-medium text-xl">Date</span>
                        <FontAwesomeIcon className="text-[#FD3F82] ml-3" onClick={ () => setOpenDate(!openDate)} icon={faChevronDown} />
                    </div>
                    <div className="text-sm cursor-pointer" onClick={ () => setOpenDate(!openDate)}>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <span className="ml-2">{ `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    </div>
                    {openDate && <div className="absolute left-[-20%] top-[130%] bg-white shadow-lg p-4">
                        <DateRangePicker className="date" editableDateInputs={true} ranges={date} onChange={item => setDate([item.selection])} moveRangeOnFirstSelection={false} />
                    </div>}
                </div>


                <div className="divider h-4/5"></div>

                <div className="text-gray-400 w-1/4 flex flex-col justify-center gap-1 h-4/5">
                    <div className="text-[#000B7E]">
                        <span className="font-medium text-xl">People</span>
                        <FontAwesomeIcon className="text-[#FD3F82] ml-3" icon={faChevronDown} />
                    </div>
                    <div className="text-sm">
                        <FontAwesomeIcon icon={faPeopleGroup} />
                        <span className="ml-2">How many people ?</span>
                    </div>
                </div>

                <div className="searchBtn absolute right-[2%]">
                    <button className="text-white bg-[#00BE93] px-4 py-2">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Header;