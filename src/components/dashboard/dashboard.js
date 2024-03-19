import React from "react";
import Header from "../header/header";
import AllFollowers from "../allFollowers/allFollowers";
import Overview from "../overview/overview";

import './dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard dark">
            <Header/>

            <AllFollowers/>

            <Overview/>
        </div>
    )
}

export default Dashboard;