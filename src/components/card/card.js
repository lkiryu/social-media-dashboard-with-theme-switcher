import React from "react";

import './card.css'

const Card = (props) => {
    return (
        <div className="card">
            <div className="info">
                <p className="cardTitle">{props.cardTitle}</p>
                <i className={'fa-brands fa-'+props.social}></i>
            </div>
            <div className="numbers">
                <p className="value">{props.value}</p>
                <p className={"percentage "+props.caret}><i className={"fa-solid fa-caret-"+props.caret}></i> {props.today}</p>
            </div>
        </div>
    )
}

export default Card