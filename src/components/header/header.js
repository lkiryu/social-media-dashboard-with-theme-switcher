import React from "react";
import Titles from "../titles/titles";

import './header.css'

const Header = () => {
    return (
        <header className="header">
            <Titles/>

            <div className="button">
                <p className="mode dark">Dark Mode</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
        </header>
    )
}

export default Header