import React from "react";
import Card from "../card/card";

import './overview.css'

const cardData = [
    {
        cardTitle: "Page Views",
        social: "facebook",
        value: "87",
        caret: "up",
        today: "3%",
    },
    {
        cardTitle: "Likes",
        social: "facebook",
        value: "52",
        caret: "down",
        today: "2%",
    },
    {
        cardTitle: "Likes",
        social: "instagram",
        value: "5462",
        caret: "up",
        today: "2257%",
    },
    {
        cardTitle: "Profile Views",
        social: "instagram",
        value: "52k",
        caret: "up",
        today: "1375%",
    },
    {
        cardTitle: "Retweets",
        social: "twitter",
        value: "117",
        caret: "up",
        today: "303%",
    },
    {
        cardTitle: "Likes",
        social: "twitter",
        value: "507",
        caret: "up",
        today: "553%",
    },
    {
        cardTitle: "Likes",
        social: "youtube",
        value: "107",
        caret: "down",
        today: "19%",
    },
    {
        cardTitle: "Total Views",
        social: "youtube",
        value: "1407",
        caret: "down",
        today: "12%",
    },
]

const Overview = () =>{
    return (
        <section className="overview dark theme">
            <h2 className="title">Overview - Today</h2>

            <div className="cards">
                {
                    cardData.map((item, index)=>{
                        return(
                            <Card 
                                key={index}
                                cardTitle={item.cardTitle}
                                social={item.social}
                                value={item.value}
                                caret={item.caret}
                                today={item.today}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Overview