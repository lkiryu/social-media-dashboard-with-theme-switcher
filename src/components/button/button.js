import React from "react";

const Button = () => {
    return (
        <div className="button">
            <p className="mode dark">Dark Mode</p>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Button