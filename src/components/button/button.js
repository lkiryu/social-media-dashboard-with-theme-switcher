import React from "react";
import changeTheme from "../../js/changeTheme";

import './button.css'

const Button = () => {
    return (
        <div className="button">
            <p className="mode">Dark Mode</p>
            <label className="switch">
                <input type="checkbox" onClick={changeTheme}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Button