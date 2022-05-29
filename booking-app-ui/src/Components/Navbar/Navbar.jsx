import React from "react";
import "./Navbar.css";


const Navbar = () => {
    return(
        <div className="NavContainer bg-[#2B3DBF] flex flex-row justify-between items-center px-[4rem]">
            <div className="Logo text-white font-sans font-bold text-2xl">
                Go Fleeky
            </div>

            <div className="navList">
                <ul className="flex flex-row text-white text-xl">
                    <li className="mr-[3rem]">Home</li>
                    <li className="mr-[3rem]">About us</li>
                    <li className="mr-[3rem]">Contact</li>
                    <li className="mr-[3rem]">Login</li>
                    <li>Register</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;