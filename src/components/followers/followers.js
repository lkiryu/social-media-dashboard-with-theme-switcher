import React from "react";

import './followers.css'

const Followers = (props) =>{
    return(
        <div className={"Followers dark "+props.social}>
            <ul>
                <li className="user"><i className={'fa-brands fa-'+props.social}></i> {props.user}</li>
                <li className="total">{props.total}</li>
                <li className="text">{props.text}</li>
                <li className={"today "+props.caret}><i className={"fa-solid fa-caret-"+props.caret}></i> {props.today} Today</li>
            </ul>
        </div>
    )
}

export default Followers