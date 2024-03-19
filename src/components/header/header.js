import React from "react";
import Title from "../titles/titles";

const Header = () => {
    return (
        <header className="header">
            <Title/>

            <div className="button">
                <p className="mode dark">Dark Mode</p>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
        </header>
    )
}

export default Header