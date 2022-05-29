import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";


const Home = () => {
    return(
        <div className="MainContainer">
            <Navbar />
            <Header />
        </div>
    )
}

export default Home;