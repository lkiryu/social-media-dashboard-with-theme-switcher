import React from "react";
import Header from "../header/header";
import AllFollowers from "../allFollowers/allFollowers";

import './dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard dark">
            <Header/>
            
            <AllFollowers/>
            <section className="overview"></section>
        </div>
    )
}

export default Dashboard;