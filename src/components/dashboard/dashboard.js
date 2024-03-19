import React from "react";
import Header from "../header/header";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header/>
            <section className="allFollowers"></section>
            <section className="overview"></section>
        </div>
    )
}

export default Dashboard;