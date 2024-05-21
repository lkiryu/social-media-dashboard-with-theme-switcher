import React from "react";
import Button from "../button/button";

import './header.css'

const Header = () => {
    return (
        <header className="header dark theme">
            <div className="titles">
                <h2 className="title">Social Media Dashboard</h2>
                <h3 className="followers">Total Followers: 23,004</h3>
            </div>

            <Button />
        </header>
    )
}

export default Header