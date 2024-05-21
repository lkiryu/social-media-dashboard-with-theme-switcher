import React from "react";

import './followers.css'

const Followers = (props) => {
    return (
        <div className={"Followers " + props.social}>
            <p className="user"><i className={'fa-brands fa-' + props.social}></i> {props.user}</p>
            <p className="total">{props.total}</p>
            <p className="text">{props.text}</p>
            <p className={"today " + props.caret}><i className={"fa-solid fa-caret-" + props.caret}></i> {props.today} Today</p>
        </div>
    )
}

export default Followers