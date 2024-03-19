import React from "react";
import Header from "../header/header";

import './dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard dark">
            <Header/>
            <section className="allFollowers"></section>
            <section className="overview"></section>
        </div>
    )
}

export default Dashboard;