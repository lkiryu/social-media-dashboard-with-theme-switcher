import React from "react";

import './button.css'

const Button = () => {
    return (
        <div className="button">
            <p className="mode">Dark Mode</p>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Button