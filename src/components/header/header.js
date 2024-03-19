import React from "react";

const Header = () => {
    return (
        <>
            <div className="titles dark">
                <h2 className="title">Social Media Dashboard</h2>
                <h3 className="followers">Total Followers: 23,004</h3>
            </div>

            <div>
                <p className="mode dark">Dark Mode</p>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
        </>
    )
}

export default Header